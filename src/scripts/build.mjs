import fs from 'fs';
import path from 'path';
import { company, nav, legacyNav, pages } from '../data/siteContent.mjs';
import { esc, link, sameRoute } from './html.mjs';
import { visualForRoute } from '../components/visuals/index.mjs';
import * as HomePage from '../pages/HomePage.mjs';
import * as CertificationsPage from '../pages/CertificationsPage.mjs';
import * as WebdesignPage from '../pages/WebdesignPage.mjs';
import * as SaasPage from '../pages/SaasPage.mjs';
import * as IntegraleConnectPage from '../pages/IntegraleConnectPage.mjs';
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
  { route: '/notre-histoire', slug: 'notre-histoire', module: HistoryPage },
  { route: '/conseil-accompagnement', slug: 'conseil-accompagnement', module: ConseilPage },
  { route: '/integrale-academy', slug: 'integrale-academy', module: AcademyPage },
  { route: '/ecosysteme', slug: 'ecosysteme', module: EcosystemPage },
  { route: '/certifications', slug: 'certifications', module: CertificationsPage },
  { route: '/webdesign', slug: 'webdesign', module: WebdesignPage },
  { route: '/developpement-saas', slug: 'developpement-saas', module: SaasPage },
  { route: '/integrale-connect', slug: 'integrale-connect', module: IntegraleConnectPage },
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
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${p.title}</title><meta name="description" content="${esc(p.lead)}"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="/assets/styles.css"></head><body><header class="siteHeader"><a class="brand" href="/">INTEGRALE <b>GROUP</b></a><button class="burger" aria-label="Ouvrir le menu" aria-expanded="false"><span></span><span></span><span></span></button><nav class="navLinks">${nav.slice(0,-1).map(([n,h])=>link(h,n,sameRoute(h,page.route)?'active':'')).join('')}<div class="navDropdown ${legacyNav.some(([,h])=>sameRoute(h,page.route))?'active':''}"><button type="button">Nos pôles</button><div class="dropdownMenu">${legacyNav.map(([n,h])=>link(h,n,sameRoute(h,page.route)?'active':'')).join('')}</div></div>${link('/contact','Contact',sameRoute('/contact',page.route)?'active':'')}</nav><a class="headerBtn" href="/contact">Contact</a></header><main><section class="hero hero-section full-width"><div class="container heroInner"><div class="heroCopy reveal"><p class="kicker">${p.kicker}</p><h1>${p.h1}</h1><p>${p.lead}</p><div class="heroActions">${buttons}</div></div><div class="heroVisualSlot reveal">${visualForRoute(page.route)}</div></div></section>${body}</main><footer><div><h2>INTEGRALE <b>GROUP</b></h2><p>${company.baseline}</p><p class="footerMeta">${company.address}<br>SIREN : ${company.siren}<br>Capital social : ${company.capital}</p></div><nav><strong>Navigation</strong>${nav.map(([n,h])=>link(h,n)).join('')}</nav><nav><strong>Contact</strong><a href="mailto:${company.email}">${company.email}</a><a href="/contact?sujet=partenariat">Devenir partenaire</a><a href="/contact?sujet=webdesign">Demander un devis</a><a href="/certifications">Certifications</a><a href="/webdesign">Webdesign</a><a href="/developpement-saas">Développement SaaS</a><a href="/integrale-connect">Intégrale Connect</a><a href="/entreprise">Infos légales</a></nav></footer><script src="/assets/app.js"></script></body></html>`;
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

fs.writeFileSync(`${out}/404.html`, shell(sitePages[0], `<section><h2>Page introuvable</h2><p>Retournez à l’accueil ou utilisez le menu.</p></section>`, link('/','Accueil','btn primary')));
fs.copyFileSync('public/styles.css', `${out}/assets/styles.css`);
fs.copyFileSync('public/app.js', `${out}/assets/app.js`);
fs.copyFileSync('public/favicon.svg', `${out}/favicon.svg`);
