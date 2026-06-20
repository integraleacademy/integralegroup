import fs from 'fs';
const routes=['/','/certifications','/webdesign','/developpement-saas','/integrale-connect','/entreprise','/contact'];
const fileFor=r=>r==='/'?'dist/index.html':`dist${r}/index.html`;
const expectedMarkers={
 '/':'Structurer, digitaliser et développer les entreprises ambitieuses.',
 '/certifications':'DSSP',
 '/webdesign':'Création de sites web premium',
 '/developpement-saas':'CRM métier',
 '/integrale-connect':'Intégrale Connect CRM',
 '/entreprise':'Capital social',
 '/contact':['formulaire','mailto'],
};
const seen=new Set();
for(const route of routes){const file=fileFor(route); if(!fs.existsSync(file)) throw new Error(`${route} missing`); const html=fs.readFileSync(file,'utf8'); if(html.length<4500) throw new Error(`${route} lacks complete content`); const marker=expectedMarkers[route]; if(Array.isArray(marker)){if(!marker.some(m=>html.toLowerCase().includes(m))) throw new Error(`${route} missing one of ${marker.join(', ')}`);} else if(!html.includes(marker)) throw new Error(`${route} missing own marker ${marker}`); if(seen.has(html)) throw new Error(`${route} duplicates another page HTML`); seen.add(html); for(const r of routes){if(!html.includes(`href="${r}"`) && !(route==='/'&&r==='/')) throw new Error(`${route} missing nav link ${r}`);} }
const cert=fs.readFileSync('dist/certifications/index.html','utf8');
if(!cert.includes('Certification DSSP en cours de dépôt auprès de France Compétences — sous réserve d’enregistrement.')) throw new Error('mandatory DSSP disclaimer missing');
if(/DSSP[^<]{0,80}(enregistrée|enregistré|inscrit|inscrite)[^<]{0,50}RNCP/i.test(cert)) throw new Error('false DSSP RNCP claim detected');
const connect=fs.readFileSync('dist/integrale-connect/index.html','utf8');
for(const s of ['Intégrale Connect CRM','Intégrale Connect Partenaires','Intégrale Connect CPF','Intégrale Connect Gestion OF']) if(!connect.includes(s)) throw new Error(`connect missing ${s}`);
const contact=fs.readFileSync('dist/contact/index.html','utf8')+fs.readFileSync('dist/assets/app.js','utf8');
for(const s of ['Nom','Prénom','Entreprise','Email','Téléphone','Certification / partenariat','Création de site web','Développement SaaS','Intégrale Connect','Autre demande','mailto:clement@integraleacademy.com','SMTP_HOST','SMTP_PORT','SMTP_USER','SMTP_PASS','SMTP_FROM']) if(!contact.includes(s)) throw new Error(`contact missing ${s}`);
const css=fs.readFileSync('dist/assets/styles.css','utf8');
for(const s of ['overflow-x:hidden','@media(max-width:640px)','--gold:#F4C45A','body,#root','grid-template-columns:1fr']) if(!css.includes(s)) throw new Error(`responsive/global CSS guard failed: ${s}`);
console.log('OK: routes, premium page depth, required markers, menu links, responsive CSS, contact fallback and DSSP guard verified.');
