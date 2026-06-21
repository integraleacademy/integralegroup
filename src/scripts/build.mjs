import fs from 'fs';
import path from 'path';
import { company, nav, poleNav, legacyRedirects, pages } from '../data/siteContent.mjs';
import { esc, link, sameRoute } from './html.mjs';
import { visualForRoute } from '../components/visuals/index.mjs';
import * as HomePage from '../pages/HomePage.mjs';
import * as CertificationsPage from '../pages/CertificationsPage.mjs';
import * as DevelopmentWebPage from '../pages/DevelopmentWebPage.mjs';
import * as CompanyPage from '../pages/CompanyPage.mjs';
import * as HistoryPage from '../pages/HistoryPage.mjs';
import * as ConseilPage from '../pages/ConseilPage.mjs';
import * as AcademyPage from '../pages/AcademyPage.mjs';
import * as EcosystemPage from '../pages/EcosystemPage.mjs';
import * as ContactPage from '../pages/ContactPage.mjs';

const out = 'dist';
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(`${out}/assets`, { recursive: true });

const sitePages = [
  { route: '/', slug: '', module: HomePage },
  { route: '/les-poles-du-groupe', slug: 'les-poles-du-groupe', module: EcosystemPage },
  { route: '/pole-formation', slug: 'pole-formation', module: AcademyPage },
  { route: '/pole-certification-ingenierie', slug: 'pole-certification-ingenierie', module: CertificationsPage },
  { route: '/pole-conseil-accompagnement', slug: 'pole-conseil-accompagnement', module: ConseilPage },
  { route: '/pole-developpement-web', slug: 'pole-developpement-web', module: DevelopmentWebPage },
  { route: '/notre-histoire', slug: 'notre-histoire', module: HistoryPage },
  { route: '/entreprise', slug: 'entreprise', module: CompanyPage },
  { route: '/contact', slug: 'contact', module: ContactPage },
];

function outputFileFor({ route, slug }) {
  const configuredFile = pages[route]?.file;
  if (configuredFile) return path.join(out, configuredFile);
  return slug ? path.join(out, slug, 'index.html') : path.join(out, 'index.html');
}

function shell(page, body, buttons) {
  const p = pages[page.route];
  if (!p) throw new Error(`Missing metadata for route ${page.route}`);
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${p.title}</title><meta name="description" content="${esc(p.metaDescription || p.lead)}"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="/assets/styles.css"></head><body><header class="siteHeader"><a class="brand" href="/">INTEGRALE <b>GROUP</b></a><button class="burger" aria-label="Ouvrir le menu" aria-expanded="false"><span></span><span></span><span></span></button><nav class="navLinks">${nav.slice(0,1).map(([n,h])=>link(h,n,sameRoute(h,page.route)?'active':'')).join('')}<div class="navDropdown ${poleNav.some(([,h])=>sameRoute(h,page.route))||sameRoute('/les-poles-du-groupe',page.route)?'active':''}"><button type="button">Nos pôles</button><div class="dropdownMenu">${link('/les-poles-du-groupe','Les pôles du groupe',sameRoute('/les-poles-du-groupe',page.route)?'active':'')}${poleNav.map(([n,h])=>link(h,n,sameRoute(h,page.route)?'active':'')).join('')}</div></div>${nav.slice(2).filter(([,h])=>h!=='/contact').map(([n,h])=>link(h,n,sameRoute(h,page.route)?'active':'')).join('')}</nav><a class="headerBtn" href="/contact">Contact</a></header><main><section class="hero hero-section full-width"><div class="container heroInner"><div class="heroCopy reveal"><p class="kicker">${p.kicker}</p><h1>${p.h1}</h1><p>${p.lead}</p><div class="heroActions">${buttons}</div></div><div class="heroVisualSlot reveal">${visualForRoute(page.route)}</div></div></section>${body}</main><footer><div><h2>INTEGRALE <b>GROUP</b></h2><p>${company.baseline}</p><p class="footerMeta">${company.address}<br>SIREN : ${company.siren}<br>Capital social : ${company.capital}</p></div><nav><strong>Navigation</strong>${nav.map(([n,h])=>link(h,n)).join('')}${poleNav.map(([n,h])=>link(h,n)).join('')}</nav><nav><strong>Contact</strong><a href="mailto:${company.email}">${company.email}</a><a>${company.address}</a><a href="/entreprise">Infos légales</a></nav></footer><script src="/assets/app.js"></script></body></html>`;
}


function redirectShell(from, to) {
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0; url=${to}"><link rel="canonical" href="${to}"><title>Redirection | Intégrale Group</title></head><body><p>Redirection vers <a href="${to}">${to}</a>.</p><script>location.replace('${to}')</script></body></html>`;
}

const generatedHtml = new Map();
for (const page of sitePages) {
  if (page.module.route !== page.route) {
    throw new Error(`Route mismatch for ${page.slug || 'home'}: ${page.module.route} !== ${page.route}`);
  }
  const html = shell(page, page.module.render(), page.module.buttons);
  if (generatedHtml.has(html)) {
    throw new Error(`${page.route} generated the same HTML as ${generatedHtml.get(html)}`);
  }
  generatedHtml.set(html, page.route);

  const file = outputFileFor(page);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

for (const [from, to] of Object.entries(legacyRedirects)) {
  const file = path.join(out, from.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, redirectShell(from, to));
}

fs.writeFileSync(`${out}/404.html`, shell(sitePages[0], `<section><h2>Page introuvable</h2><p>Retournez à l’accueil ou utilisez le menu.</p></section>`, link('/','Accueil','btn primary')));
fs.copyFileSync('public/styles.css', `${out}/assets/styles.css`);
fs.copyFileSync('public/app.js', `${out}/assets/app.js`);
fs.copyFileSync('public/favicon.svg', `${out}/favicon.svg`);
