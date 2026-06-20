export const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export const link=(href,label,cls='')=>`<a class="${cls}" href="${href}">${label}</a>`;
export const sameRoute=(href,path)=>href===path||(`${href}/`===path);
export const title=(k,h,p='')=>`<div class="sectionTitle reveal"><span>${k}</span><h2>${h}</h2>${p?`<p>${p}</p>`:''}</div>`;
export const cta=(h,p,b='Nous contacter',href='/contact',b2='',href2='')=>`<section class="ctaSection"><div class="finalCta reveal"><div><span>Prochaine étape</span><h2>${h}</h2><p>${p}</p></div><div class="ctaActions">${link(href,b,'btn primary')}${b2?link(href2,b2,'btn secondary'):''}</div></div></section>`;
export const card=(t,p,href='',points=[])=>`<article class="card reveal"><div class="icon">✦</div><h3>${t}</h3><p>${p}</p>${points.length?`<ul>${points.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}${href?link(href,'Découvrir','cardLink'):''}</article>`;
export const listCards=items=>items.map(([t,p])=>card(t,p)).join('');
export const steps=items=>`<div class="steps">${items.map((s,i)=>`<p class="reveal"><b>0${i+1}</b>${s}</p>`).join('')}</div>`;
