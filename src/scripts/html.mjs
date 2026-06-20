export const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export const link=(href,label,cls='')=>`<a class="${cls}" href="${href}">${label}</a>`;
export const sameRoute=(href,path)=>href===path||(`${href}/`===path);
export const card=(t,p,href)=>`<article class="card reveal"><div class="icon">✦</div><h3>${t}</h3><p>${p}</p>${href?link(href,'Découvrir','cardLink'):''}</article>`;
export const title=(k,h,p='')=>`<div class="sectionTitle reveal"><span>${k}</span><h2>${h}</h2>${p?`<p>${p}</p>`:''}</div>`;
export const cta=(h,p,b='Nous contacter',href='/contact')=>`<section class="finalCta reveal"><div><span>Prochaine étape</span><h2>${h}</h2><p>${p}</p></div>${link(href,b,'btn primary')}</section>`;
