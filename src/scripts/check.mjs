import fs from 'fs';
const routes=['/','/les-poles-du-groupe','/pole-formation','/integrale-expertises','/pole-conseil-accompagnement','/pole-developpement-web','/notre-histoire','/entreprise','/contact'];
const menuRoutes=['/','/les-poles-du-groupe','/pole-formation','/integrale-expertises','/pole-conseil-accompagnement','/pole-developpement-web','/notre-histoire','/entreprise','/contact'];
const legacyRoutes=['/integrale-academy','/certifications','/integrale-certifications','/pole-certification-ingenierie','/conseil-accompagnement','/ecosysteme','/webdesign','/developpement-saas','/integrale-connect'];
const fileFor=r=>r==='/'?'dist/index.html':`dist${r}/index.html`;
const expectedMarkers={
 '/':'Quatre expertises. Une même exigence.',
 '/les-poles-du-groupe':'Quatre expertises.<br>Quatre portes d’entrée.',
 '/pole-formation':'Des parcours conçus pour des métiers réels.',
 '/integrale-expertises':'Dossiers en cours d’instruction auprès de France compétences',
 '/pole-conseil-accompagnement':'Huit leviers pour faire passer une organisation au niveau suivant.',
 '/pole-developpement-web':'Transformer un besoin en expérience digitale utile.',
 '/notre-histoire':'Une histoire née du terrain',
 '/entreprise':'La carte d’identité',
 '/contact':'Quatre expertises.<br><em>Un seul contact.</em>',
};
const seen=new Set();
for(const route of routes){const file=fileFor(route); if(!fs.existsSync(file)) throw new Error(`${route} missing`); const html=fs.readFileSync(file,'utf8'); if(html.length<4500) throw new Error(`${route} lacks complete content`); const marker=expectedMarkers[route]; if(Array.isArray(marker)){if(!marker.some(m=>html.toLowerCase().includes(m))) throw new Error(`${route} missing one of ${marker.join(', ')}`);} else if(!html.includes(marker)) throw new Error(`${route} missing own marker ${marker}`); if(seen.has(html)) throw new Error(`${route} duplicates another page HTML`); seen.add(html); for(const r of menuRoutes){if(!html.includes(`href="${r}"`) && !(route==='/'&&r==='/')) throw new Error(`${route} missing main menu link ${r}`);} }
const home=fs.readFileSync('dist/index.html','utf8');
if(!home.includes('https://www.integraleacademy.com/')) throw new Error('external Academy link missing on home');
for(const marker of ['homePage','/assets/home.css','homeHeaderCta','Un groupe qui relie stratégie et terrain.','Clément Vaillant','Faire simple, concret et durable.']) if(!home.includes(marker)) throw new Error(`homepage redesign missing ${marker}`);
for(const href of ['/pole-formation','/integrale-expertises','/pole-conseil-accompagnement','/pole-developpement-web']) if(!home.includes(`href="${href}"`)) throw new Error(`homepage missing pole link ${href}`);
const polesPage=fs.readFileSync('dist/les-poles-du-groupe/index.html','utf8');
for(const marker of ['polesPage','/assets/poles.css','Intégrale Academy','Intégrale Expertises','Structurer pour mieux développer','Outils digitaux & solutions métiers','Des expertises autonomes, une méthode partagée.']) if(!polesPage.includes(marker)) throw new Error(`poles page redesign missing ${marker}`);
for(const href of ['/pole-formation','/integrale-expertises','/pole-conseil-accompagnement','/pole-developpement-web']) if(!polesPage.includes(`href="${href}"`)) throw new Error(`poles page missing pole link ${href}`);
const academy=fs.readFileSync('dist/pole-formation/index.html','utf8');
for(const marker of ['academyPage','/assets/academy.css','Depuis 2018','Qualiopi','Sécurité privée','Sécurité incendie','Direction & VAE','Chauffeur VTC','BTS en alternance','Secourisme','Une expertise collective','Le terrain qui nourrit tout l’écosystème.']) if(!academy.includes(marker)) throw new Error(`Academy page redesign missing ${marker}`);
for(const marker of ['Stagiaires','Apprentis','Professionnels','Entreprises','https://www.integraleacademy.com/']) if(!academy.includes(marker)) throw new Error(`Academy page missing ${marker}`);
const conseil=fs.readFileSync('dist/pole-conseil-accompagnement/index.html','utf8');
for(const marker of ['conseilPage','/assets/conseil.css','Structurer pour mieux','Organismes de formation','Accompagnement des dirigeants','Structuration administrative','Stratégie commerciale','Digitalisation','Certification','Process internes','Accompagnement sur mesure','Ni théorie hors-sol','Une intervention claire en quatre temps.','Création','Reprise','Croissance','Repositionnement','Transformation','La méthode qui relie stratégie et exécution.']) if(!conseil.includes(marker)) throw new Error(`Conseil page redesign missing ${marker}`);
for(const marker of ['Comprendre','Prioriser','Structurer','Accompagner','Diagnostic organisationnel','Plan d’action priorisé','Supports prêts à l’emploi','Suivi de déploiement','Transmission aux équipes','Pilotage dirigeant']) if(!conseil.includes(marker)) throw new Error(`Conseil page missing ${marker}`);
for(const r of legacyRoutes){const html=fs.readFileSync(fileFor(r),'utf8'); if(!html.includes('location.replace')) throw new Error(`legacy route is not redirected: ${r}`);}
const expertises=fs.readFileSync('dist/integrale-expertises/index.html','utf8');
for(const title of ['Équipier de sécurité privée','Équipier de sécurité privée armé – catégorie D','Équipier de protection rapprochée','Expert en investigation et renseignement sur les cybermenaces','Dirigeant d’une société de sécurité privée','Opérateur de vidéoprotection et de surveillance électronique','Équipier de protection rapprochée armé – catégories B et D','Équipier de sécurité privée armé – catégories B et D','Équipier de sécurité privée événementiel','Agent de recherches privées']) if(!expertises.includes(title)) throw new Error(`Intégrale Expertises page missing ${title}`);
for(const title of ['ESP','ESP-AD','EPR','EIRC','DSSP','OVP-SE','EPRA-BD','ESPA-BD','ESP-E','ARP']) if(!expertises.includes(`(${title})`)) throw new Error(`Intégrale Expertises page missing ${title}`);
for(const duration of ['196 h','252 h','364 h','700 h','270 h','225 h','480 h 30','353 h','147 h','371 h']) if(!expertises.includes(`<dd>${duration}</dd>`)) throw new Error(`Intégrale Expertises page missing duration ${duration}`);
for(const marker of ['Niveau visé','Présentiel','Distanciel','hors évaluations certificatives']) if(!expertises.includes(marker)) throw new Error(`Intégrale Expertises page missing detail ${marker}`);
if(/DSSP[^<]{0,80}(enregistrée|enregistré|inscrit|inscrite)[^<]{0,50}RNCP/i.test(expertises)) throw new Error('false DSSP RNCP claim detected');
if(!expertises.includes('mailto:clement@integraleacademy.com')) throw new Error('partner contact missing on Intégrale Expertises page');
const dev=fs.readFileSync('dist/pole-developpement-web/index.html','utf8');
for(const marker of ['digitalPage','/assets/digital.css','Transformer vos process en outils','Sites & interfaces','Plateformes métier','CRM & automatisations','Un site internet doit inspirer confiance.','Des briques connectées pour automatiser l’activité.','Intégrale Connect.','Une suite pensée pour les organismes de formation.','Un cycle court, cadré et évolutif.','L’outil qui transforme la méthode en usage.']) if(!dev.includes(marker)) throw new Error(`Digital page redesign missing ${marker}`);
for(const item of ['Site vitrine premium','Landing page de conversion','Refonte de site existant','Site pour organisme de formation','Pages formations détaillées','Formulaires de contact','Prise de rendez-vous','Connexion CRM ou outils externes','Optimisation mobile','SEO de base']) if(!dev.includes(item)) throw new Error(`Digital web offer missing ${item}`);
for(const item of ['CRM métier','Plateforme administrative','Tableau de bord interne','Espace client','Espace apprenant','Suivi de dossiers','Gestion de documents','Génération automatique de PDF','Notifications email','Gestion partenaires','Connexion API','Hébergement cloud','Maintenance évolutive']) if(!dev.includes(item)) throw new Error(`Digital software offer missing ${item}`);
for(const item of ['Intégrale Connect CRM','Intégrale Connect Partenaires','Intégrale Connect CPF','Intégrale Connect Gestion OF','WeDoF','EDOF','Rapprochement','WEBHOOKS','SALESFORCE','JSON']) if(!dev.includes(item)) throw new Error(`Intégrale Connect content missing ${item}`);
for(const item of ['Cadrage','Prototype','Développement','Tests','Mise en ligne','Évolutions']) if(!dev.includes(item)) throw new Error(`Digital method missing ${item}`);
const companyPage=fs.readFileSync('dist/entreprise/index.html','utf8');
for(const marker of ['companyPage','/assets/company.css','Une structure pour faire grandir des projets','Donner une structure commune à des expertises','Transformer une vision en capacité d’action.','Une même exigence.<br><em>Quatre rôles distincts.</em>','Une direction directement impliquée.','Clément Vaillant','Quatre repères qui ne changent pas.','Une structure récente.<br>Une expérience déjà installée.','La carte d’identité<br>du groupe.','Capital social']) if(!companyPage.includes(marker)) throw new Error(`Company page redesign missing ${marker}`);
for(const marker of ['INTEGRALE GROUP','SAS','989 785 068','989 785 068 00010','54 chemin du Carreou, 83480 Puget-sur-Argens','1 041 000 €','23/07/2025','Gestion de fonds','66.30Z']) if(!companyPage.includes(marker)) throw new Error(`Company legal identity missing ${marker}`);
for(const href of ['/pole-formation','/integrale-expertises','/pole-conseil-accompagnement','/pole-developpement-web']) if(!companyPage.includes(`href="${href}"`)) throw new Error(`Company page missing pole link ${href}`);
const contact=fs.readFileSync('dist/contact/index.html','utf8');
for(const marker of ['contactPage','/assets/contact.css','Parlons de votre <span>projet.</span>','Quatre expertises.<br><em>Un seul contact.</em>','Intégrale Academy','Intégrale Expertises','Conseil & accompagnement','Digital & outils métiers','Quelques informations suffisent pour commencer.','Écrivez-nous.','Un échange simple, en trois temps.','Vous préférez parler<br>de vive voix','Préparer mon e-mail','04 22 47 07 68','mailto:clement@integraleacademy.com','tel:+33422470768']) if(!contact.includes(marker)) throw new Error(`Contact page redesign missing ${marker}`);
for(const option of ['Formation / Intégrale Academy','Intégrale Expertises / partenariat','Conseil & accompagnement','Développement web & outils métiers','Intégrale Connect','Partenariat groupe','Autre demande']) if(!contact.includes(`<option value="${option}">${option}</option>`)) throw new Error(`Contact subject missing ${option}`);
for(const forbidden of ['SMTP_HOST','SMTP_PORT','SMTP_USER','SMTP_PASS','CONTACT_EMAIL','Variables prévues']) if(contact.includes(forbidden)) throw new Error(`Technical contact implementation leaked in page: ${forbidden}`);
const app=fs.readFileSync('dist/assets/app.js','utf8');
for(const marker of ['subjectMap','data-contact-subject','contactFormStatus','[Intégrale Group]']) if(!app.includes(marker)) throw new Error(`Contact form behavior missing ${marker}`);
const css=fs.readFileSync('dist/assets/styles.css','utf8');
for(const s of ['overflow-x:hidden','@media(max-width:640px)','--gold:#F4C45A','grid-template-columns:1fr']) if(!css.includes(s)) throw new Error(`responsive/global CSS guard failed: ${s}`);
const homeCss=fs.readFileSync('dist/assets/home.css','utf8');
for(const s of ['@media (max-width: 1120px)','@media (max-width: 760px)','@media (max-width: 520px)','grid-template-columns: 1fr','homePoleGrid','homeBentoGrid']) if(!homeCss.includes(s)) throw new Error(`homepage responsive CSS guard failed: ${s}`);
const polesCss=fs.readFileSync('dist/assets/poles.css','utf8');
for(const s of ['@media (max-width: 1120px)','@media (max-width: 760px)','@media (max-width: 640px)','grid-template-columns: 1fr','polesDetailGrid','polesOrientationGrid','overflow-wrap: anywhere']) if(!polesCss.includes(s)) throw new Error(`poles responsive CSS guard failed: ${s}`);
const academyCss=fs.readFileSync('dist/assets/academy.css','utf8');
for(const s of ['@media (max-width: 1120px)','@media (max-width: 760px)','@media (max-width: 640px)','grid-template-columns: 1fr','academyProgramsGrid','academyPeopleGrid','overflow-wrap: anywhere']) if(!academyCss.includes(s)) throw new Error(`Academy responsive CSS guard failed: ${s}`);
const conseilCss=fs.readFileSync('dist/assets/conseil.css','utf8');
for(const s of ['@media (max-width: 1120px)','@media (max-width: 760px)','@media (max-width: 640px)','grid-template-columns: 1fr','conseilServicesGrid','conseilMethodGrid','conseilMomentsGrid','overflow-wrap: anywhere']) if(!conseilCss.includes(s)) throw new Error(`Conseil responsive CSS guard failed: ${s}`);
const digitalCss=fs.readFileSync('dist/assets/digital.css','utf8');
for(const s of ['@media (max-width: 1120px)','@media (max-width: 760px)','@media (max-width: 640px)','grid-template-columns: 1fr','digitalSolutionsGrid','digitalSoftwareGrid','digitalConnectGrid','digitalMethodGrid','overflow-wrap: anywhere']) if(!digitalCss.includes(s)) throw new Error(`Digital responsive CSS guard failed: ${s}`);
const companyCss=fs.readFileSync('dist/assets/company.css','utf8');
for(const s of ['@media (max-width: 1120px)','@media (max-width: 760px)','@media (max-width: 640px)','grid-template-columns: 1fr','companyPurposeGrid','companyArchitecturePoles','companyGovernanceGrid','companyLegalGrid','overflow-wrap: anywhere']) if(!companyCss.includes(s)) throw new Error(`Company responsive CSS guard failed: ${s}`);
const contactCss=fs.readFileSync('dist/assets/contact.css','utf8');
for(const s of ['@media (max-width: 1120px)','@media (max-width: 760px)','@media (max-width: 640px)','grid-template-columns: 1fr','contactOrientationGrid','contactFormGrid','contactProcessGrid','contactDirectPanel','overflow-wrap: anywhere']) if(!contactCss.includes(s)) throw new Error(`Contact responsive CSS guard failed: ${s}`);
const expertisesCss=fs.readFileSync('dist/assets/expertises.css','utf8');
for(const s of ['@media(max-width:1120px)','@media(max-width:760px)','grid-template-columns:1fr','overflow-wrap:anywhere']) if(!expertisesCss.includes(s)) throw new Error(`Intégrale Expertises responsive CSS guard failed: ${s}`);
console.log('OK: 4-pole architecture, redirects, navigation, Academy link and responsive CSS verified.');
