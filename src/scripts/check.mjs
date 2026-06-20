import fs from 'fs';
const routes=['/','/notre-histoire','/conseil-accompagnement','/integrale-academy','/ecosysteme','/certifications','/webdesign','/developpement-saas','/integrale-connect','/entreprise','/contact'];
const menuRoutes=['/','/notre-histoire','/conseil-accompagnement','/integrale-academy','/ecosysteme','/contact'];
const legacyRoutes=['/certifications','/webdesign','/developpement-saas','/integrale-connect','/entreprise'];
const fileFor=r=>r==='/'?'dist/index.html':`dist${r}/index.html`;
const expectedMarkers={
 '/':'Intégrale Group, un écosystème dédié à la formation',
 '/notre-histoire':'Une histoire construite sur le terrain',
 '/conseil-accompagnement':'Conseil et accompagnement pour organismes de formation',
 '/integrale-academy':'Visiter le site Intégrale Academy',
 '/ecosysteme':'Intégrale Connect',
 '/certifications':'Certification DSSP en cours de dépôt auprès de France Compétences',
 '/webdesign':'Création de sites web premium',
 '/developpement-saas':'CRM métier',
 '/integrale-connect':'Intégrale Connect CRM',
 '/entreprise':'Capital social',
 '/contact':['formulaire','mailto'],
};
const seen=new Set();
for(const route of routes){const file=fileFor(route); if(!fs.existsSync(file)) throw new Error(`${route} missing`); const html=fs.readFileSync(file,'utf8'); if(html.length<4500) throw new Error(`${route} lacks complete content`); const marker=expectedMarkers[route]; if(Array.isArray(marker)){if(!marker.some(m=>html.toLowerCase().includes(m))) throw new Error(`${route} missing one of ${marker.join(', ')}`);} else if(!html.includes(marker)) throw new Error(`${route} missing own marker ${marker}`); if(seen.has(html)) throw new Error(`${route} duplicates another page HTML`); seen.add(html); for(const r of menuRoutes){if(!html.includes(`href="${r}"`) && !(route==='/'&&r==='/')) throw new Error(`${route} missing main menu link ${r}`);} }
const home=fs.readFileSync('dist/index.html','utf8');
if(!home.includes('https://www.integraleacademy.com/')) throw new Error('external Academy link missing on home');
for(const r of legacyRoutes) if(!fs.existsSync(fileFor(r))) throw new Error(`legacy page removed: ${r}`);
const cert=fs.readFileSync('dist/certifications/index.html','utf8');
if(/DSSP[^<]{0,80}(enregistrée|enregistré|inscrit|inscrite)[^<]{0,50}RNCP/i.test(cert)) throw new Error('false DSSP RNCP claim detected');
const connect=fs.readFileSync('dist/integrale-connect/index.html','utf8');
for(const s of ['Intégrale Connect CRM','Intégrale Connect Partenaires','Intégrale Connect CPF','Intégrale Connect Gestion OF']) if(!connect.includes(s)) throw new Error(`connect missing ${s}`);
const css=fs.readFileSync('dist/assets/styles.css','utf8');
for(const s of ['overflow-x:hidden','@media(max-width:640px)','--gold:#F4C45A','grid-template-columns:1fr']) if(!css.includes(s)) throw new Error(`responsive/global CSS guard failed: ${s}`);
console.log('OK: new group pages plus legacy certifications/webdesign/SaaS/Connect/entreprise pages, unique content, menu links, Academy link and responsive CSS verified.');
