import { iconGlyph } from '../../scripts/html.mjs';

const panel=(cls,inner,label='Visuel abstrait')=>`<div class="premiumVisual ${cls}" aria-label="${label}" role="img">${inner}</div>`;
const dots=n=>Array.from({length:n},(_,i)=>`<i style="--i:${i}"></i>`).join('');

export const HeroVisualGroup=()=>panel('heroVisualGroup',`<div class="groupCore"><b>IG</b><span>strategy hub</span></div><div class="growthPath"></div><div class="orbitNodes">${['Certification','Web','SaaS','Connect','Data','Scale'].map(x=>`<em>${x}</em>`).join('')}</div><div class="barStack"><span></span><span></span><span></span></div>${dots(18)}`,'Structuration, croissance et interconnexion');

export const CertificationVisual=()=>panel('certificationVisual',`<div class="certDoc main"><strong>DSSP</strong><span></span><span></span><span></span><ul><li></li><li></li><li></li></ul></div><div class="certDoc side"><b>RNCP</b><small>preuves</small></div><div class="checkRing">✓</div><div class="complianceLines"><span></span><span></span><span></span><span></span></div>`,'Documents, checklist et conformité');

export const WebdesignVisual=()=>panel('webdesignVisual',`<div class="screen desktop"><header></header><section></section><p></p><p></p><button></button></div><div class="screen tablet"><header></header><p></p><p></p></div><div class="screen mobile"><header></header><span></span><span></span><span></span></div><div class="cursorPath"></div>`,'Écrans flottants et interface premium');

export const SaasVisual=()=>panel('saasVisual',`<div class="dash"><header><b></b><b></b><b></b></header><main><span></span><span></span><span></span><span></span></main></div><div class="apiCloud">API</div><div class="dbCylinder"><i></i><i></i></div><div class="moduleMesh">${['CRM','PDF','DATA','AUTO'].map(x=>`<em>${x}</em>`).join('')}</div>`,'Architecture SaaS, données et automatisation');

export const ConnectVisual=()=>panel('connectVisual',`<div class="connectDash"><b>Intégrale Connect</b><span>Données centralisées</span></div><div class="connectModules">${[['CRM','C'],['Partenaires','P'],['CPF','€'],['Gestion OF','OF']].map(([t,g],i)=>`<article class="cm cm${i}"><i>${g}</i><strong>${t}</strong><small>flux métier</small></article>`).join('')}</div><svg viewBox="0 0 600 420" aria-hidden="true"><path d="M300 210C160 76 126 96 102 122M300 210C440 76 474 96 498 122M300 210C160 344 126 324 102 298M300 210C440 344 474 324 498 298"/><path class="alt" d="M102 122C220 178 380 178 498 122M102 298C220 242 380 242 498 298"/></svg>`,'Écosystème Intégrale Connect avec quatre modules');

export const CompanyVisual=()=>panel('companyVisual',`<div class="holdingTower"><b>Holding</b><span></span><span></span><span></span></div><div class="pillarRow">${['Vision','Pôles','Pilotage','Croissance'].map(x=>`<em>${x}</em>`).join('')}</div><div class="strategyArrow"></div>`,'Structure groupe, holding et vision stratégique');

export const ContactVisual=()=>panel('contactVisual',`<div class="messageCard"><b>Projet</b><span></span><span></span><small>discussion</small></div><div class="wave wave1"></div><div class="wave wave2"></div><div class="contactNode">@</div>`,'Connexion et échange projet');

export const ExpertiseNetworkVisual=()=>panel('expertiseNetworkVisual',`<div class="expertiseCore">Intégrale<br>Group</div>${[['Certifications','cert'],['Webdesign','web'],['SaaS','saas'],['Connect','connect']].map(([t,i],n)=>`<article class="xp xp${n}"><i>${iconGlyph(i)}</i><b>${t}</b></article>`).join('')}<svg viewBox="0 0 900 420"><path d="M450 210L170 92M450 210L730 92M450 210L170 328M450 210L730 328"/></svg>`,'Schéma des quatre pôles d’expertise');

export const ModuleFlowVisual=()=>panel('moduleFlowVisual',`${['Processus','Automatisation','Dashboard'].map((x,i)=>`<article><i>0${i+1}</i><b>${x}</b><span></span><span></span></article>`).join('')}<div class="flowArrow"></div>`,'Processus vers automatisation puis dashboard');

export const DashboardMockupVisual=()=>panel('dashboardMockupVisual',`<div class="mockNav"></div><div class="mockChart"><span></span><span></span><span></span></div><div class="mockCards"><i></i><i></i><i></i></div>`,'Tableau de bord stylisé');

export const ProcessTimelineVisual=(items=['Création','Vision','Pôles','Croissance'])=>`<div class="processTimelineVisual reveal">${items.map((x,i)=>`<article><i>0${i+1}</i><b>${x}</b><span></span></article>`).join('')}</div>`;

export const visualForRoute=route=>({
 '/':HeroVisualGroup,
 '/certifications':CertificationVisual,
 '/webdesign':WebdesignVisual,
 '/developpement-saas':SaasVisual,
 '/integrale-connect':ConnectVisual,
 '/entreprise':CompanyVisual,
 '/contact':ContactVisual
}[route]||HeroVisualGroup)();
