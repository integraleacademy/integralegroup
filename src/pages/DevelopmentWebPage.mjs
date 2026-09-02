export const route = '/pole-developpement-web';
export const bodyClass = 'digitalPage';

export const buttons = `
  <div class="digitalHeroButtons">
    <a class="btn primary" href="/contact?sujet=developpement-web">Parler de mon projet <span aria-hidden="true">→</span></a>
    <a class="btn secondary" href="#solutions">Explorer les solutions</a>
  </div>
  <div class="digitalHeroProof" aria-label="Expertises du pôle développement web">
    <span><i>01</i>Sites & interfaces</span>
    <span><i>02</i>Plateformes métier</span>
    <span><i>03</i>CRM & automatisations</span>
  </div>`;

const icons = {
  web: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="6" y="9" width="52" height="40" rx="5"/><path d="M6 20h52M16 56h32M32 49v7"/><circle cx="14" cy="15" r="1"/><circle cx="20" cy="15" r="1"/><path d="M16 30h19M16 37h28"/></svg>',
  platform: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="7" y="8" width="20" height="19" rx="5"/><rect x="37" y="8" width="20" height="19" rx="5"/><rect x="7" y="37" width="20" height="19" rx="5"/><rect x="37" y="37" width="20" height="19" rx="5"/><path d="M27 17h10M17 27v10M47 27v10M27 47h10"/></svg>',
  automation: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="10"/><path d="M32 6v10M32 48v10M6 32h10M48 32h10M14 14l7 7M43 43l7 7M50 14l-7 7M21 43l-7 7"/><path d="m28 32 3 3 6-7"/></svg>',
  pilot: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 51h48M14 44V31M26 44V21M38 44V27M50 44V12"/><path d="m12 23 13-9 12 5 15-12"/></svg>',
  portal: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="8" y="10" width="48" height="43" rx="6"/><circle cx="22" cy="28" r="7"/><path d="M13 47c2-7 7-11 13-11s11 4 13 11M40 25h9M40 32h9M40 39h9"/></svg>',
  document: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M16 7h25l8 8v42H16z"/><path d="M41 7v9h8M23 29h19M23 37h19M23 45h12"/></svg>',
  architecture: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="12" cy="32" r="6"/><circle cx="52" cy="15" r="6"/><circle cx="52" cy="49" r="6"/><path d="M18 30 46 17M18 34l28 13M32 24v16"/><circle cx="32" cy="32" r="7"/></svg>',
};

const solutions = [
  {
    theme: 'web featured', number: '01', icon: icons.web, label: 'Sites & interfaces',
    title: 'Une présence digitale qui inspire confiance.',
    text: 'Sites vitrines, landing pages et refontes conçus pour rendre l’offre lisible, crédibiliser l’image de marque et faciliter la prise de contact.',
    tags: ['Webdesign', 'Responsive', 'Conversion'],
  },
  {
    theme: 'platform', number: '02', icon: icons.platform, label: 'Plateformes métier',
    title: 'Une interface bâtie autour du fonctionnement réel.',
    text: 'Dépôt de dossiers, inscriptions, pièces administratives, tableaux de bord, statuts et espaces de suivi réunis dans un même outil.',
    tags: ['Portails', 'Dossiers', 'Pilotage'],
  },
  {
    theme: 'automation', number: '03', icon: icons.automation, label: 'CRM & automatisations',
    title: 'Des flux plus simples, des données plus fiables.',
    text: 'CRM métier, automatisations contrôlées, génération de documents, notifications et connecteurs pour limiter les doubles saisies.',
    tags: ['CRM', 'API', 'Automatisation'],
  },
];

const webDeliverables = [
  'Site vitrine premium', 'Landing page de conversion', 'Refonte de site existant',
  'Site pour organisme de formation', 'Pages formations détaillées', 'Formulaires de contact',
  'Prise de rendez-vous', 'Connexion CRM ou outils externes', 'Optimisation mobile', 'SEO de base',
];

const softwareBlocks = [
  {
    icon: icons.pilot, number: '01', title: 'Pilotage & suivi',
    text: 'Centraliser l’activité et rendre les priorités immédiatement visibles.',
    items: ['CRM métier', 'Tableau de bord interne', 'Suivi de dossiers'],
  },
  {
    icon: icons.portal, number: '02', title: 'Espaces & relations',
    text: 'Donner à chaque public un accès utile, clair et sécurisé.',
    items: ['Espace client', 'Espace apprenant', 'Gestion partenaires'],
  },
  {
    icon: icons.document, number: '03', title: 'Documents & actions',
    text: 'Fluidifier les opérations administratives qui mobilisent les équipes.',
    items: ['Gestion de documents', 'Génération automatique de PDF', 'Notifications email'],
  },
  {
    icon: icons.architecture, number: '04', title: 'Architecture évolutive',
    text: 'Construire une base technique connectée et maintenable dans le temps.',
    items: ['Connexion API', 'Hébergement cloud', 'Maintenance évolutive', 'Plateforme administrative'],
  },
];

const connectModules = [
  {
    theme: 'plus featured', code: 'IC+', number: '01', title: 'Intégrale Connect+',
    text: 'Gestion des sessions, stagiaires, documents, financements, obligations réglementaires et automatisations.',
    tags: ['Sessions', 'Documents', 'CNAPS', 'CPF'],
  },
  {
    theme: 'crm', code: 'CRM', number: '02', title: 'Intégrale Connect CRM',
    text: 'Suivi des prospects, candidats, relances, rendez-vous, financements et étapes commerciales.',
    tags: ['Pipeline', 'Contacts', 'Relances', 'Conversions'],
  },
];

const method = [
  ['01', 'Cadrage', 'Comprendre les usages, les irritants et les priorités.'],
  ['02', 'Prototype', 'Valider les parcours et l’interface avant de développer.'],
  ['03', 'Développement', 'Construire les fonctions utiles sur une base claire.'],
  ['04', 'Tests', 'Vérifier les parcours, les données et les cas réels.'],
  ['05', 'Mise en ligne', 'Déployer une première version exploitable.'],
  ['06', 'Évolutions', 'Faire progresser l’outil selon les usages.'],
];

const solutionCard = solution => `
  <article class="digitalSolutionCard ${solution.theme} reveal">
    <div class="digitalSolutionTop"><span>${solution.icon}</span><i>${solution.number}</i></div>
    <small>${solution.label}</small>
    <h3>${solution.title}</h3>
    <p>${solution.text}</p>
    <div>${solution.tags.map(tag => `<b>${tag}</b>`).join('')}</div>
  </article>`;

const connectCard = module => `
  <article class="digitalConnectCard ${module.theme} reveal">
    <div class="digitalConnectCardTop"><i>${module.code}</i><span>${module.number}</span></div>
    <h3>${module.title}</h3>
    <p>${module.text}</p>
    <div>${module.tags.map(tag => `<b>${tag}</b>`).join('')}</div>
  </article>`;

export function render() {
  return `
    <section class="digitalIntroSection">
      <div class="digitalIntroGrid">
        <div class="digitalIntroCopy reveal">
          <span>Le digital au service du terrain</span>
          <h2>Des outils conçus autour de vos vrais processus.</h2>
          <p>Plutôt que d’adapter votre organisation à un logiciel générique, nous développons des solutions pensées pour votre fonctionnement réel. L’objectif : réduire les frictions, fiabiliser les données et donner une vision claire de l’activité.</p>
          <blockquote>« Partir de l’usage, simplifier le parcours, puis construire l’outil. »</blockquote>
        </div>
        <div class="digitalBlueprintPanel reveal" aria-label="Transformation d’un processus métier en outil digital">
          <strong>INTÉGRALE GROUP · PÔLE DIGITAL</strong>
          <span class="digitalBlueprintLetter" aria-hidden="true">D</span>
          <div class="digitalBlueprintFlow">
            <article><i>01</i><b>Processus réel</b><small>Dossiers · équipes · contraintes</small></article>
            <em aria-hidden="true">→</em>
            <article><i>02</i><b>Interface utile</b><small>Parcours · actions · données</small></article>
            <em aria-hidden="true">→</em>
            <article><i>03</i><b>Pilotage clair</b><small>Statuts · alertes · indicateurs</small></article>
          </div>
          <div class="digitalBlueprintTags"><span>WEB</span><span>CRM</span><span>API</span><span>AUTO</span></div>
        </div>
      </div>
    </section>

    <section class="digitalSolutionsSection" id="solutions">
      <div class="digitalSectionHeading centered reveal">
        <span>Trois portes d’entrée</span>
        <h2>Transformer un besoin en expérience digitale utile.</h2>
        <p>Le projet peut commencer par un site, une plateforme métier ou un processus à automatiser. La méthode reste la même : comprendre l’usage avant de dessiner la solution.</p>
      </div>
      <div class="digitalSolutionsGrid">${solutions.map(solutionCard).join('')}</div>
    </section>

    <section class="digitalWebSection" id="sites">
      <div class="digitalWebTop">
        <div class="digitalWebMockup reveal" aria-label="Exemple de site professionnel responsive">
          <div class="digitalBrowserFrame">
            <header><i></i><i></i><i></i><span>votre-site.fr</span></header>
            <main><small>VOTRE PROMESSE</small><b>Une offre claire.<br>Un parcours simple.</b><span></span><span></span><button>Passer à l’action</button></main>
            <aside><i>01</i><i>02</i><i>03</i></aside>
          </div>
          <div class="digitalPhoneFrame"><span></span><b></b><i></i><i></i><button></button></div>
          <div class="digitalWebMetric"><small>Interface</small><b>Responsive</b><span>Desktop · tablette · mobile</span></div>
        </div>
        <div class="digitalWebCopy reveal">
          <span>Webdesign & sites professionnels</span>
          <h2>Un site internet doit inspirer confiance.</h2>
          <p>Votre site doit rendre votre offre immédiatement lisible, crédibiliser votre image de marque, guider l’utilisateur et faciliter la prise de contact. La hiérarchie des messages, la réassurance et le parcours utilisateur transforment une vitrine en actif commercial.</p>
          <a class="btn primary" href="/contact?sujet=webdesign">Échanger sur votre site <b aria-hidden="true">→</b></a>
        </div>
      </div>
      <div class="digitalWebDeliverables">
        ${webDeliverables.map((item, index) => `<article class="reveal"><i>${String(index + 1).padStart(2, '0')}</i><b>${item}</b></article>`).join('')}
      </div>
    </section>

    <section class="digitalSoftwareSection" id="plateformes">
      <div class="digitalSoftwareInner">
        <div class="digitalSoftwareHeading reveal">
          <span>Solutions SaaS & outils métier</span>
          <h2>Des briques connectées pour automatiser l’activité.</h2>
          <p>Chaque solution est pensée comme une architecture claire : données centralisées, interfaces utiles, automatisations contrôlées et indicateurs exploitables.</p>
        </div>
        <div class="digitalSoftwareGrid">
          ${softwareBlocks.map(block => `<article class="reveal"><div><span>${block.icon}</span><i>${block.number}</i></div><h3>${block.title}</h3><p>${block.text}</p><ul>${block.items.map(item => `<li>${item}</li>`).join('')}</ul></article>`).join('')}
        </div>
        <div class="digitalFlowStrip reveal" aria-label="Processus vers automatisation puis tableau de bord">
          <article><i>01</i><div><b>Processus</b><span>Observer le fonctionnement réel</span></div></article>
          <em aria-hidden="true">→</em>
          <article><i>02</i><div><b>Automatisation</b><span>Relier les actions et les données</span></div></article>
          <em aria-hidden="true">→</em>
          <article><i>03</i><div><b>Dashboard</b><span>Piloter avec une vision claire</span></div></article>
        </div>
      </div>
    </section>

    <section class="digitalConnectSection" id="integrale-connect">
      <div class="digitalConnectHero">
        <div class="digitalConnectCopy reveal">
          <span>Focus produit métier</span>
          <h2>Intégrale Connect.</h2>
          <strong>Deux outils pensés pour les organismes de formation.</strong>
          <p>Intégrale Connect+ pilote la gestion des stagiaires et Intégrale Connect CRM structure le parcours commercial. Ensemble, ils couvrent l’activité de la première demande à la clôture de la formation.</p>
          <div><i>Abonnement mensuel</i><i>Évolutions continues</i></div>
          <a class="btn primary" href="/nos-outils-metiers">Découvrir nos outils métiers <b aria-hidden="true">→</b></a>
        </div>
        <div class="digitalConnectDashboard reveal" aria-label="Tableau de bord Intégrale Connect">
          <header><span><i></i><i></i><i></i></span><b>Intégrale Connect</b><small>Tableau de bord</small></header>
          <aside><i>IC</i><span></span><span></span><span></span><span></span></aside>
          <main>
            <div class="digitalConnectStats"><article><small>Dossiers</small><b>Suivi</b></article><article><small>Automatisation</small><b>Statuts</b></article><article><small>Partenaires</small><b>Vue unifiée</b></article></div>
            <div class="digitalConnectChart"><span></span><span></span><span></span><span></span><span></span></div>
            <div class="digitalConnectRows"><p><i></i><b>Demande CPF</b><small>Rapprochée</small></p><p><i></i><b>Pièces administratives</b><small>À contrôler</small></p><p><i></i><b>Webhook</b><small>Traité</small></p></div>
          </main>
        </div>
      </div>
      <div class="digitalConnectGrid">${connectModules.map(connectCard).join('')}</div>
      <div class="digitalConnectors reveal"><span>Flux & connecteurs</span><div><i>WEDOF</i><i>EDOF</i><i>YOUSIGN</i><i>QONTO</i><i>API</i><i>EMAIL</i></div></div>
    </section>

    <section class="digitalMethodSection" id="methode">
      <div class="digitalSectionHeading reveal">
        <span>Méthode projet</span>
        <h2>Un cycle court, cadré et évolutif.</h2>
        <p>Une progression lisible limite les risques et permet d’obtenir rapidement une première version utile, puis de la faire évoluer avec les usages.</p>
      </div>
      <div class="digitalMethodGrid">
        ${method.map(([number, title, text]) => `<article class="reveal"><i>${number}</i><h3>${title}</h3><p>${text}</p><span aria-hidden="true"></span></article>`).join('')}
      </div>
    </section>

    <section class="digitalGroupSection">
      <div class="digitalGroupInner">
        <div class="digitalGroupCopy reveal">
          <span>Son rôle dans le groupe</span>
          <h2>L’outil qui transforme la méthode en usage.</h2>
          <p>Le pôle digital conçoit les interfaces, automatise les flux et rend les données exploitables. Il travaille au contact des autres expertises sans confondre leurs rôles : l’Academy forme, Intégrale Expertises conçoit les certifications, le conseil structure et le digital outille.</p>
          <a class="btn secondary" href="/les-poles-du-groupe">Voir les quatre pôles <b aria-hidden="true">→</b></a>
        </div>
        <div class="digitalGroupMap reveal" aria-label="Rôle du digital dans l’écosystème Intégrale Group">
          <div class="digitalGroupCore"><i>04</i><b>Digital</b><small>Outiller</small></div>
          <article class="formation"><i>IA</i><b>Formation</b><small>Développer les compétences</small></article>
          <article class="expertises"><i>IE</i><b>Expertises</b><small>Concevoir les certifications</small></article>
          <article class="conseil"><i>03</i><b>Conseil</b><small>Structurer les projets</small></article>
          <svg viewBox="0 0 600 470" aria-hidden="true"><path d="M300 235 165 105M300 235 435 105M300 235 300 390"/><circle cx="300" cy="235" r="105"/></svg>
        </div>
      </div>
    </section>

    <section class="digitalCtaSection">
      <div class="digitalCta reveal">
        <div>
          <span>Votre prochain outil</span>
          <h2>Votre site, votre plateforme ou votre CRM ne reflète pas encore votre niveau réel&nbsp;?</h2>
          <p>Expliquez-nous votre processus actuel, les irritants et les automatisations prioritaires.</p>
          <div><a class="btn primary" href="/contact?sujet=developpement-web">Parler de mon projet <b aria-hidden="true">→</b></a><a class="btn secondary" href="/nos-outils-metiers">Découvrir nos outils métiers</a></div>
        </div>
        <i class="digitalCtaMark" aria-hidden="true">04</i>
      </div>
    </section>`;
}
