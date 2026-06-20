import { iconGlyph } from '../../scripts/html.mjs';

const panel=(cls,inner,label='Visuel abstrait')=>`<div class="premiumVisual ${cls}" aria-label="${label}" role="img"><div class="visualGrid"></div><div class="lightBeam"></div>${inner}</div>`;
const dots=n=>Array.from({length:n},(_,i)=>`<i style="--i:${i}"></i>`).join('');
const metric=(k,v)=>`<span class="metric"><b>${k}</b><small>${v}</small></span>`;
const rails=(n=3)=>`<div class="signalRails">${Array.from({length:n},()=>'<span></span>').join('')}</div>`;

export const HeroVisualGroup=()=>panel('heroVisualGroup',`<div class="groupCore"><b>IG</b><span>formation & terrain</span><small>conseil · digital · outils métier</small></div><div class="growthPath"></div><div class="orbitNodes">${['Formation','Conseil','Digital','Suivi','Méthode','Emploi'].map(x=>`<em>${x}</em>`).join('')}</div><div class="barStack"><span></span><span></span><span></span></div><div class="microDashboard">${metric('Depuis','2018')}${metric('Academy','Socle')}${metric('Outils','Métier')}</div>${rails(3)}${dots(24)}`,'Structuration, croissance et interconnexion');

export const CertificationVisual=()=>panel('certificationVisual',`<div class="certDoc main"><header><strong>DSSP</strong><small>RNCP dossier</small></header><span></span><span></span><div class="certMatrix"><b>Blocs</b><i></i><i></i><i></i><i></i></div><ul><li>Référentiel</li><li>Preuves</li><li>Jury</li></ul></div><div class="certDoc side"><b>Conformité</b><small>France Compétences</small><em>86%</em></div><div class="evidenceStack"><span>Évaluation</span><span>Traçabilité</span><span>Qualité</span></div><div class="checkRing">✓</div><div class="sealMark">RNCP</div><div class="complianceLines"><span></span><span></span><span></span><span></span></div>`,'Système premium de validation, référentiel RNCP, preuves et conformité');

export const WebdesignVisual=()=>panel('webdesignVisual',`<div class="screen desktop"><header><i></i><i></i><i></i></header><section></section><div class="uiRows"><p></p><p></p><p></p></div><div class="conversionCard"><b>CTA</b><span>+18%</span></div><button></button></div><div class="screen tablet"><header></header><p></p><div class="tileGrid"><i></i><i></i><i></i><i></i></div></div><div class="screen mobile"><header></header><span></span><span></span><span></span><b></b></div><div class="designSystem"><span>Typography</span><span>Components</span><span>Grid 12</span></div><div class="cursorPath"></div>${rails(2)}`,'Mockups desktop et mobile, design system, landing page et conversion');

export const SaasVisual=()=>panel('saasVisual',`<div class="dash"><header><b></b><b></b><b></b></header><main><span><i></i></span><span><i></i></span><span><i></i></span><span><i></i></span></main><footer>${metric('Docs','PDF')}${metric('CRM','Live')}</footer></div><div class="apiCloud">API</div><div class="dbCylinder"><i></i><i></i><b>DATA</b></div><div class="automationLine"></div><div class="moduleMesh">${['CRM','PDF','DATA','AUTO','CLOUD','WEBHOOK'].map(x=>`<em>${x}</em>`).join('')}</div><svg class="saasFlow" viewBox="0 0 600 420" aria-hidden="true"><path d="M142 292C214 248 268 250 332 298S470 316 510 214"/><path class="alt" d="M164 104C238 156 335 154 424 92"/></svg>`,'Architecture SaaS avec modules, API, automatisation, données et cloud');

export const ConnectVisual=()=>panel('connectVisual',`<div class="connectDash"><b>Intégrale Connect</b><span>hub centralisé</span><div class="hubStats">${metric('Lead','CRM')}${metric('OF','Docs')}${metric('CPF','Suivi')}</div></div><div class="connectModules">${[['CRM','C','Pipeline · relances'],['Partenaires','P','Conventions · dossiers'],['CPF','€','Statuts · paiements'],['Gestion OF','OF','Sessions · qualité']].map(([t,g,s],i)=>`<article class="cm cm${i}"><i>${g}</i><strong>${t}</strong><small>${s}</small><span></span></article>`).join('')}</div><div class="connectHalo"></div><svg viewBox="0 0 600 420" aria-hidden="true"><path d="M300 210C160 76 126 96 102 122M300 210C440 76 474 96 498 122M300 210C160 344 126 324 102 298M300 210C440 344 474 324 498 298"/><path class="alt" d="M102 122C220 178 380 178 498 122M102 298C220 242 380 242 498 298"/><circle cx="300" cy="210" r="118"/><circle class="alt" cx="300" cy="210" r="176"/></svg><div class="dataPoints"><i></i><i></i><i></i><i></i><i></i><i></i></div>`,'Écosystème logiciel Intégrale Connect avec CRM, partenaires, CPF, Gestion OF et hub central');

export const CompanyVisual=()=>panel('companyVisual',`<div class="holdingTower"><b>Holding</b><small>pilotage stratégique</small><span></span><span></span><span></span></div><div class="pillarRow">${['Vision','Pôles','Pilotage','Croissance'].map((x,i)=>`<em><b>0${i+1}</b>${x}<span></span></em>`).join('')}</div><div class="strategyArrow"></div><div class="boardCard">${metric('Coordination','Groupe')}${metric('Cap','Méthode')}${metric('Projets','Métier')}</div>`,'Structure groupe, holding, coordination et vision stratégique');

export const ContactVisual=()=>panel('contactVisual',`<div class="messageCard"><b>Projet</b><span></span><span></span><small>discussion qualifiée</small></div><div class="wave wave1"></div><div class="wave wave2"></div><div class="contactNode">@</div>`,'Connexion et échange projet');

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
