import fs from 'fs';
const routes=['/','/les-poles-du-groupe','/pole-formation','/pole-certification-ingenierie','/pole-conseil-accompagnement','/pole-developpement-web','/notre-histoire','/entreprise','/contact'];
const menuRoutes=['/','/les-poles-du-groupe','/pole-formation','/pole-certification-ingenierie','/pole-conseil-accompagnement','/pole-developpement-web','/notre-histoire','/entreprise','/contact'];
const legacyRoutes=['/integrale-academy','/certifications','/conseil-accompagnement','/ecosysteme','/webdesign','/developpement-saas','/integrale-connect'];
const fileFor=r=>r==='/'?'dist/index.html':`dist${r}/index.html`;
const expectedMarkers={
 '/':'Les 4 pôles du groupe',
 '/les-poles-du-groupe':'Une structure mère qui développe des pôles complémentaires',
 '/pole-formation':'Visiter le site Intégrale Academy',
 '/pole-certification-ingenierie':'Certification DSSP en cours de dépôt auprès de France Compétences',
 '/pole-conseil-accompagnement':'Méthode',
 '/pole-developpement-web':'Focus Intégrale Connect',
 '/notre-histoire':'Une histoire née du terrain',
 '/entreprise':'Capital social',
 '/contact':['formulaire','mailto'],
};
const seen=new Set();
for(const route of routes){const file=fileFor(route); if(!fs.existsSync(file)) throw new Error(`${route} missing`); const html=fs.readFileSync(file,'utf8'); if(html.length<4500) throw new Error(`${route} lacks complete content`); const marker=expectedMarkers[route]; if(Array.isArray(marker)){if(!marker.some(m=>html.toLowerCase().includes(m))) throw new Error(`${route} missing one of ${marker.join(', ')}`);} else if(!html.includes(marker)) throw new Error(`${route} missing own marker ${marker}`); if(seen.has(html)) throw new Error(`${route} duplicates another page HTML`); seen.add(html); for(const r of menuRoutes){if(!html.includes(`href="${r}"`) && !(route==='/'&&r==='/')) throw new Error(`${route} missing main menu link ${r}`);} }
const home=fs.readFileSync('dist/index.html','utf8');
if(!home.includes('https://www.integraleacademy.com/')) throw new Error('external Academy link missing on home');
for(const r of legacyRoutes){const html=fs.readFileSync(fileFor(r),'utf8'); if(!html.includes('location.replace')) throw new Error(`legacy route is not redirected: ${r}`);}
const cert=fs.readFileSync('dist/pole-certification-ingenierie/index.html','utf8');
if(/DSSP[^<]{0,80}(enregistrée|enregistré|inscrit|inscrite)[^<]{0,50}RNCP/i.test(cert)) throw new Error('false DSSP RNCP claim detected');
const dev=fs.readFileSync('dist/pole-developpement-web/index.html','utf8');
for(const s of ['Site vitrine premium','CRM métier','Intégrale Connect CRM']) if(!dev.includes(s)) throw new Error(`development web page missing ${s}`);
const css=fs.readFileSync('dist/assets/styles.css','utf8');
for(const s of ['overflow-x:hidden','@media(max-width:640px)','--gold:#F4C45A','grid-template-columns:1fr']) if(!css.includes(s)) throw new Error(`responsive/global CSS guard failed: ${s}`);
console.log('OK: 4-pole architecture, redirects, navigation, Academy link and responsive CSS verified.');
