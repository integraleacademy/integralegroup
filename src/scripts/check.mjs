import fs from 'fs';
const routes=['/','/certifications/','/webdesign/','/developpement-saas/','/integrale-connect/','/entreprise/','/contact/'];
const fileFor=r=>r==='/'?'dist/index.html':`dist${r}index.html`;
for(const route of routes){const file=fileFor(route); if(!fs.existsSync(file)) throw new Error(`${route} missing`); const html=fs.readFileSync(file,'utf8'); if(html.length<3300) throw new Error(`${route} lacks complete content`); for(const r of routes){if(!html.includes(`href="${r}"`) && !(route==='/'&&r==='/')) throw new Error(`${route} missing nav link ${r}`);} }
const cert=fs.readFileSync('dist/certifications/index.html','utf8');
if(!cert.includes('Certification DSSP en cours de dépôt auprès de France Compétences — sous réserve d’enregistrement.')) throw new Error('mandatory DSSP disclaimer missing');
if(/DSSP[^<]{0,80}(enregistrée|enregistré|inscrit|inscrite)[^<]{0,50}RNCP/i.test(cert)) throw new Error('false DSSP RNCP claim detected');
const contact=fs.readFileSync('dist/contact/index.html','utf8')+fs.readFileSync('dist/assets/app.js','utf8');
for(const s of ['Nom','Prénom','Entreprise','Email','Téléphone','Certification / partenariat','Création de site web','Développement SaaS','Intégrale Connect','Autre demande','mailto:clement@integraleacademy.com','SMTP_HOST','SMTP_PORT','SMTP_USER','SMTP_PASS','SMTP_FROM']) if(!contact.includes(s)) throw new Error(`contact missing ${s}`);
const css=fs.readFileSync('dist/assets/styles.css','utf8');
if(!css.includes('overflow-x:hidden')||!css.includes('@media(max-width:640px)')||!css.includes('--gold:#F4C45A')) throw new Error('responsive/global CSS guard failed');
console.log('OK: routes, menu links, content, responsive CSS, contact fallback and DSSP guard verified.');
