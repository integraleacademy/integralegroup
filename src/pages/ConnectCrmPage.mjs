export const route = '/integrale-connect-crm';
export const bodyClass = 'connectCrmPage';
export const buttons = '';

const demoUrl = '/contact?sujet=integrale-connect-crm';
const arrow = '<span aria-hidden="true">↗</span>';
const iconPaths = {
  chart: '<path d="M4 4v16h16M8 15v-4m5 4V7m5 8v-6"/>',
  pipeline: '<rect x="3" y="4" width="5" height="16" rx="1.5"/><rect x="10" y="4" width="5" height="11" rx="1.5"/><rect x="17" y="4" width="4" height="7" rx="1.5"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 10h18m-13 5 3 3 5-5"/>',
  message: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',
  export: '<path d="M12 3v12m-4-4 4 4 4-4M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/>',
  contact: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
  funding: '<rect x="3" y="5" width="18" height="15" rx="3"/><path d="M16 10h5v5h-5a2.5 2.5 0 0 1 0-5M4 5l12-3v3"/>',
  compliance: '<rect x="4" y="4" width="16" height="17" rx="3"/><path d="M9 4V2h6v2M8 11h8m-8 5 2 2 5-5"/>',
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]}</svg>`;

const screens = [
  {
    id: 'pilotage-crm', nav: 'Pilotage', icon: 'chart', label: 'Pilotage & statistiques',
    title: 'Toute votre activité.<br>En un coup d’œil.',
    text: 'D’où viennent vos demandes ? Lesquelles se transforment en inscriptions ? Retrouvez les indicateurs utiles pour piloter votre acquisition et donner le bon cap à votre équipe.',
    items: ['Sources et campagnes réunies dans un tableau de bord', 'Rendez-vous, contacts et conversions par période', 'Relances échues visibles dès le premier regard'],
    image: 'connect-crm-dashboard.jpg', width: 1070, height: 620,
    alt: 'Tableau de bord des sources de demandes et des conversions dans Intégrale Connect CRM',
    note: 'De la demande à l’inscription', detail: 'Une lecture commune des résultats', color: 'violet',
  },
  {
    id: 'pipeline-crm', nav: 'Pipeline', icon: 'pipeline', label: 'Leads & pipeline',
    title: 'Chaque prospect<br>à la bonne étape.',
    text: 'Les nouvelles demandes, les rendez-vous et les dossiers en cours rejoignent le même pipeline. Chaque conseiller retrouve ses priorités et sait où en est le projet du candidat.',
    items: ['Étapes, statuts et vues adaptés à votre organisation', 'Recherche par contact, formation ou session', 'Origine de la demande et qualification conservées'],
    image: 'connect-crm-pipeline.jpg', width: 1090, height: 620,
    alt: 'Pipeline des pistes et filtres par formation ou session dans Intégrale Connect CRM',
    note: 'Une demande, un parcours', detail: 'Un historique partagé par l’équipe', color: 'blue',
  },
  {
    id: 'relances-crm', nav: 'Relances', icon: 'calendar', label: 'Rendez-vous & appels',
    title: 'La prochaine action.<br>Toujours au bon moment.',
    text: 'Un appel à passer, un rendez-vous à préparer, un prospect à rappeler : organisez la journée des conseillers avec une vue claire sur les actions à mener.',
    items: ['Agenda partagé et prochaines échéances', 'Relances datées et contacts à reprendre', 'Résultat des appels et replanification du suivi'],
    image: 'connect-crm-relances.jpg', width: 1090, height: 415,
    alt: 'Vue des relances et des actions commerciales dans Intégrale Connect CRM',
    note: 'Le bon contact, au bon moment', detail: 'Une prochaine action toujours visible', color: 'mint',
  },
  {
    id: 'messages-crm', nav: 'Messages', icon: 'message', label: 'E-mails, SMS & relances',
    title: 'Des réponses rapides.<br>Une relation personnalisée.',
    text: 'Préparez vos modèles, adaptez chaque réponse et retrouvez les échanges dans le dossier du prospect. Les automatisations accompagnent vos équipes dans les étapes récurrentes.',
    items: ['Modèles d’e-mails et de SMS personnalisables', 'Variables métier, pièces jointes et historique', 'Messages et relances selon les scénarios retenus'],
    image: 'connect-crm-modeles.jpg', width: 1080, height: 800,
    alt: 'Bibliothèque des modèles d’e-mails et de SMS avec variables de personnalisation',
    note: 'Personnaliser. Envoyer. Suivre.', detail: 'Les échanges restent liés au contact', color: 'peach',
  },
  {
    id: 'exports-crm', nav: 'Exports', icon: 'export', label: 'Exports & reporting',
    title: 'Vos données utiles.<br>Prêtes à être exploitées.',
    text: 'Préparez un point d’équipe ou approfondissez vos résultats. Les exports structurés vous permettent de retrouver les informations utiles et de poursuivre vos analyses dans Excel.',
    items: ['Exports des données commerciales', 'Informations structurées pour vos analyses', 'Un suivi partagé entre conseillers et direction'],
    image: 'connect-crm-exports.jpg', width: 1090, height: 620,
    alt: 'Écran des exports de données commerciales dans Intégrale Connect CRM',
    note: 'Du suivi à la décision', detail: 'Des données accessibles à votre équipe', color: 'violet',
  },
];

const extras = [
  { icon: 'contact', title: 'Fiches contacts à 360°', text: 'Coordonnées, formation visée, notes, historique et prochaine action : tout le contexte du candidat dans une même fiche.', tags: ['Historique unifié', 'Actions rapides'] },
  { icon: 'funding', title: 'Financement & faisabilité', text: 'CPF, France Travail ou financement personnel : suivez les montants, les demandes et les réponses pour qualifier chaque projet.', tags: ['CPF', 'France Travail', 'Personnel'] },
  { icon: 'compliance', title: 'Réglementaire & CNAPS', text: 'Pour les formations concernées, retrouvez le compte CNAPS, le numéro NUB, l’état de la demande et le suivi de la carte professionnelle.', tags: ['Prérequis', 'Progression du dossier'] },
];

const faq = [
  ['À qui s’adresse Intégrale Connect CRM ?', 'Le CRM est conçu pour les organismes de formation et CFA qui gèrent des demandes entrantes, des rendez-vous, des financements et des parcours d’inscription. La démonstration permet de vérifier son adéquation avec votre organisation commerciale.'],
  ['Peut-on adapter le pipeline et les automatisations ?', 'Oui. Les étapes, les rôles et les scénarios utiles sont définis selon vos formations, votre équipe et vos méthodes de suivi. Le périmètre retenu est précisé dans la proposition commerciale.'],
  ['Le CRM convient-il aux formations réglementées ?', 'Les fonctions de faisabilité et de suivi CNAPS permettent de suivre les démarches et prérequis des formations concernées. Elles aident vos équipes à organiser les vérifications avant l’inscription.'],
  ['Peut-on reprendre nos prospects et notre historique ?', 'La reprise est étudiée à partir de vos fichiers ou exports actuels. Les champs, les volumes, les doublons et la qualité des données déterminent ce qui peut être importé et le travail nécessaire.'],
  ['Comment est calculé l’abonnement ?', 'Le tarif mensuel dépend du nombre d’utilisateurs, des modules, du volume d’activité et des automatisations retenues. Le travail de mise en place est également chiffré. Vous recevez une proposition après la démonstration.'],
  ['Quelles sources de demandes peut-on connecter ?', 'Les connexions sont définies pendant le cadrage : formulaires web, campagnes Meta, prise de rendez-vous Calendly ou autres flux disponibles. La proposition précise les connexions et automatisations mises en place pour votre organisme.'],
];

export function renderHero(page) {
  return `<section class="hero crmTourHero" aria-labelledby="crm-title">
    <div class="crmTourHeroInner">
      <p class="crmTourEyebrow"><i aria-hidden="true"></i>${page.kicker}</p>
      <h1 id="crm-title">${page.h1}</h1>
      <p class="crmTourLead">${page.lead}</p>
      <div class="crmTourActions">
        <a class="btn primary" href="${demoUrl}">Demander une démonstration ${arrow}</a>
        <a class="btn secondary" href="#fonctionnalites-crm">Explorer les fonctionnalités <span aria-hidden="true">↓</span></a>
      </div>
      <div class="crmTourFacts" aria-label="Intégrale Connect CRM en quelques repères">
        <div><strong>8</strong><span>fonctions métier</span></div>
        <div><strong>360°</strong><span>de suivi par contact</span></div>
        <div><strong>5</strong><span>écrans à découvrir</span></div>
        <div><strong>Sur mesure</strong><span>selon votre équipe</span></div>
      </div>
      <p class="crmTourAudience">Pensé pour les <b>organismes de formation</b>, les <b>CFA</b> et leurs équipes commerciales.</p>
    </div>
  </section>`;
}

function featureRow(screen, index) {
  return `<section class="crmTourFeature ${index % 2 ? 'crmTourFeatureReverse' : ''} crmTourTone-${screen.color}" id="${screen.id}" aria-labelledby="${screen.id}-title" data-crm-chapter>
    <div class="crmTourFeatureInner">
      <figure class="crmTourFigure crmTourReveal">
        <a class="crmTourScreen" href="/images/${screen.image}" target="_blank" rel="noopener" aria-label="Agrandir l’écran : ${screen.nav}">
          <div class="crmTourBrowser" aria-hidden="true"><span><i></i><i></i><i></i></span><b>Intégrale Connect CRM</b><span>${arrow}</span></div>
          <img src="/images/${screen.image}" alt="${screen.alt}" width="${screen.width}" height="${screen.height}" loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async">
          <span class="crmTourZoom">Voir l’écran en grand ${arrow}</span>
        </a>
        <figcaption><span class="crmTourNoteIcon">${icon(screen.icon)}</span><span><strong>${screen.note}</strong><small>${screen.detail}</small></span></figcaption>
      </figure>
      <div class="crmTourFeatureCopy crmTourReveal">
        <div class="crmTourFeatureLabel"><span class="crmTourIcon">${icon(screen.icon)}</span><span>${String(index + 1).padStart(2, '0')} / ${screen.label}</span></div>
        <h2 id="${screen.id}-title">${screen.title}</h2>
        <p>${screen.text}</p>
        <ul>${screen.items.map(item => `<li><span aria-hidden="true">✓</span>${item}</li>`).join('')}</ul>
        <a class="crmTourTextLink" href="${demoUrl}">Découvrir en démonstration ${arrow}</a>
      </div>
    </div>
  </section>`;
}

export function render() {
  return `
    <nav class="crmTourNav" aria-label="Explorer les fonctionnalités du CRM">
      <div><a class="crmTourNavBrand" href="#fonctionnalites-crm"><span>IC</span>Les fonctionnalités</a>
        <div class="crmTourNavLinks">${screens.map(screen => `<a href="#${screen.id}" data-crm-chapter-link>${screen.nav}</a>`).join('')}</div>
        <a class="crmTourNavDemo" href="${demoUrl}">Demander une démo ${arrow}</a>
      </div>
    </nav>
    <div id="fonctionnalites-crm" class="crmTourAnchor"></div>
    <section class="crmTourIntro" id="captures-crm">
      <div class="crmTourHeading crmTourReveal"><span class="crmTourEyebrow">La visite guidée</span><h2>Votre quotidien, en plus simple.</h2><p>Cinq écrans du CRM pour découvrir comment vos demandes deviennent un parcours commercial clair.</p></div>
    </section>
    ${screens.map(featureRow).join('')}

    <section class="crmTourExtras" id="autres-fonctions-crm">
      <div class="crmTourHeading crmTourReveal"><span class="crmTourEyebrow">Et tout ce qui fait votre métier</span><h2>Un CRM qui comprend le parcours<br>d’un futur stagiaire.</h2><p>Au-delà de la relation commerciale, gardez une vue sur les informations qui permettent au projet d’avancer.</p></div>
      <div class="crmTourExtraGrid">${extras.map((item, index) => `<article class="crmTourExtra crmTourReveal"><div><span class="crmTourIcon">${icon(item.icon)}</span><small>0${index + 6}</small></div><h3>${item.title}</h3><p>${item.text}</p><div class="crmTourTags">${item.tags.map(tag => `<span>${tag}</span>`).join('')}</div></article>`).join('')}</div>
      <div class="crmTourSources"><span>SOURCES & CANAUX</span><div>${['Formulaires web', 'Meta', 'Calendly', 'E-mail', 'SMS', 'Excel'].map(item => `<span>${item}</span>`).join('')}</div>
    </section>

    <section class="crmTourDemo" id="demo-connect-crm">
      <div class="crmTourDemoInner">
        <div class="crmTourDemoCopy crmTourReveal"><span class="crmTourEyebrow">Le produit en mouvement</span><h2>Entrez dans<br>Intégrale Connect CRM.</h2><p>Tableau de bord, pipeline, relances, modèles et exports : retrouvez les vrais écrans dans cette courte visite du produit.</p><a class="btn primary" href="${demoUrl}">Réserver ma démonstration ${arrow}</a><small>Une présentation adaptée à vos formations et à votre équipe.</small></div>
        <div class="crmTourVideo crmTourReveal"><div class="crmTourBrowser" aria-hidden="true"><span><i></i><i></i><i></i></span><b>La visite en 17 secondes</b><span>▶</span></div><video controls playsinline preload="none" poster="/images/connect-crm-dashboard.jpg" aria-label="Vidéo de démonstration d’Intégrale Connect CRM"><source src="/videos/connect-crm-demo.mp4" type="video/mp4">Votre navigateur ne permet pas de lire cette vidéo. <a href="/videos/connect-crm-demo.mp4">Télécharger la démonstration</a>.</video></div>
      </div>
    </section>

    <section class="crmTourPricing" id="abonnement-crm">
      <div class="crmTourPricingInner crmTourReveal">
        <div><span class="crmTourEyebrow">Un abonnement mensuel, un périmètre clair</span><h2>Le CRM adapté<br>à votre organisation.</h2><p>Utilisateurs, modules, connexions, automatisations et mise en place : nous définissons ensemble ce dont votre équipe a besoin, puis nous vous remettons une proposition chiffrée.</p><a class="crmTourTextLink" href="/nos-outils-metiers">Découvrir aussi Intégrale Connect+ ${arrow}</a></div>
        <div class="crmTourPricingCard"><span>VOTRE OFFRE</span><h3>Sur mesure<span>Abonnement mensuel</span></h3><ul><li>✓ <span>Un périmètre défini après la démonstration</span></li><li>✓ <span>Une configuration adaptée à votre parcours</span></li><li>✓ <span>Une mise en place chiffrée</span></li><li>✓ <span>Un accompagnement à la prise en main</span></li></ul><a class="btn primary" href="${demoUrl}">Parlons de votre équipe ${arrow}</a></div>
      </div>
    </section>

    <section class="crmTourFaq" id="questions-crm">
      <div class="crmTourFaqInner"><div class="crmTourReveal"><span class="crmTourEyebrow">Questions fréquentes</span><h2>On répond<br>à vos questions.</h2><p>Un besoin particulier ?<br>Parlons-en pendant la démonstration.</p><a class="crmTourTextLink" href="${demoUrl}">Échanger avec nous ${arrow}</a></div><div>${faq.map(([question, answer]) => `<details><summary>${question}<span aria-hidden="true">+</span></summary><p>${answer}</p></details>`).join('')}</div></div>
    </section>

    <section class="crmTourFinal" id="demonstration-crm"><div class="crmTourReveal"><span class="crmTourEyebrow">Intégrale Connect CRM</span><h2>Vos prospects avancent.<br><span>Votre équipe aussi.</span></h2><p>Découvrez comment réunir vos demandes, vos échanges<br>et vos prochaines actions dans un seul outil.</p><a class="btn primary" href="${demoUrl}">Planifier une démonstration ${arrow}</a></div></section>
  `;
}
