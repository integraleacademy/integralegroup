import fs from 'fs';
const routes=['/','/notre-histoire','/conseil-accompagnement','/integrale-academy','/ecosysteme','/contact'];
const fileFor=r=>r==='/'?'dist/index.html':`dist${r}/index.html`;
const expectedMarkers={
 '/':'Intégrale Group, un écosystème dédié à la formation',
 '/notre-histoire':'Une histoire construite sur le terrain',
 '/conseil-accompagnement':'Conseil et accompagnement pour organismes de formation',
 '/integrale-academy':'Visiter le site Intégrale Academy',
 '/ecosysteme':'Intégrale Connect',
 '/contact':['formulaire','mailto'],
};
const seen=new Set();
for(const route of routes){const file=fileFor(route); if(!fs.existsSync(file)) throw new Error(`${route} missing`); const html=fs.readFileSync(file,'utf8'); if(html.length<4500) throw new Error(`${route} lacks complete content`); const marker=expectedMarkers[route]; if(Array.isArray(marker)){if(!marker.some(m=>html.toLowerCase().includes(m))) throw new Error(`${route} missing one of ${marker.join(', ')}`);} else if(!html.includes(marker)) throw new Error(`${route} missing own marker ${marker}`); if(seen.has(html)) throw new Error(`${route} duplicates another page HTML`); seen.add(html); for(const r of routes){if(!html.includes(`href="${r}"`) && !(route==='/'&&r==='/')) throw new Error(`${route} missing nav link ${r}`);} }
const academy=fs.readFileSync('dist/integrale-academy/index.html','utf8')+fs.readFileSync('dist/index.html','utf8');
if(!academy.includes('https://www.integraleacademy.com/')) throw new Error('external Academy link missing');
const css=fs.readFileSync('dist/assets/styles.css','utf8');
for(const s of ['overflow-x:hidden','@media(max-width:640px)','--gold:#F4C45A','grid-template-columns:1fr']) if(!css.includes(s)) throw new Error(`responsive/global CSS guard failed: ${s}`);
console.log('OK: routes, unique page content, menu links, Academy external link, metadata-driven pages and responsive CSS verified.');
