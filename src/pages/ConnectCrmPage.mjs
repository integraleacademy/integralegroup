export const route = '/integrale-connect-crm';
export const bodyClass = 'connectCrmPage';

export const buttons = `
  <div class="crmHeroButtons">
    <a class="btn primary" href="/contact?sujet=integrale-connect-crm">Demander une démonstration <span aria-hidden="true">→</span></a>
    <a class="btn secondary" href="#fonctionnalites-crm">Voir les fonctionnalités</a>
  </div>
  <div class="crmHeroProof" aria-label="Caractéristiques d’Intégrale Connect CRM">
    <span><i></i>CRM métier SaaS</span>
    <span><i></i>Abonnement mensuel</span>
    <span><i></i>Évolutions continues</span>
  </div>`;

const journey = [
  ['01', 'Demande entrante', 'Chaque contact arrive dans le même pipeline, quelle que soit sa source.'],
  ['02', 'Qualification', 'Le besoin, la formation visée et les informations utiles sont structurés.'],
  ['03', 'Rendez-vous', 'Les appels, rendez-vous et relances s’inscrivent dans un agenda partagé.'],
  ['04', 'Faisabilité', 'Financement et prérequis réglementaires sont contrôlés avant de poursuivre.'],
  ['05', 'Proposition', 'Les messages, documents et prochaines actions restent liés au contact.'],
  ['06', 'Inscription', 'Le prospect converti rejoint un parcours clair jusqu’à son entrée en formation.'],
];

const featureGroups = [
  {
    number: '01', code: 'PL', theme: 'pipeline', title: 'Leads & pipeline',
    text: 'Visualisez immédiatement les nouvelles demandes, les priorités et l’avancement commercial.',
    items: ['Centralisation des prospects et candidats', 'Étapes de pipeline personnalisables', 'Origine des demandes et campagnes', 'Filtres, recherche et vues par conseiller', 'Statuts, priorités et scoring'],
  },
  {
    number: '02', code: '360', theme: 'contacts', title: 'Fiches contacts à 360°',
    text: 'Retrouvez tout le contexte d’un prospect sans ouvrir plusieurs outils ni rechercher le dernier échange.',
    items: ['Coordonnées et formation visée', 'Historique unifié des activités', 'Prochaine action et prochain rendez-vous', 'Notes, pièces et informations utiles', 'Téléphone formaté et actions rapides'],
  },
  {
    number: '03', code: 'RDV', theme: 'appointments', title: 'Rendez-vous & appels',
    text: 'Cadrez l’activité quotidienne des équipes commerciales et évitez les opportunités sans suite.',
    items: ['Agenda partagé et rendez-vous', 'Appels passés, aboutis ou sans réponse', 'Replanification depuis la fiche contact', 'Compte rendu et résultat de l’échange', 'Relance créée depuis le rendez-vous'],
  },
  {
    number: '04', code: 'MSG', theme: 'messages', title: 'E-mails, SMS & relances',
    text: 'Accélérez les réponses tout en conservant des échanges cohérents, traçables et personnalisables.',
    items: ['Envoi d’e-mails et de SMS', 'Modèles de réponses rapides', 'Pièces jointes et documents', 'Relances planifiées', 'Journal complet des communications'],
  },
  {
    number: '05', code: '€', theme: 'funding', title: 'Financement & faisabilité',
    text: 'Qualifiez le mode de financement et suivez les étapes utiles avant de confirmer l’inscription.',
    items: ['Financement personnel, CPF et France Travail', 'Montants déclarés et confirmés', 'Étapes adaptées au financement choisi', 'Demandes et réponses France Travail', 'Suivi de la faisabilité du projet'],
  },
  {
    number: '06', code: 'CN', theme: 'compliance', title: 'Réglementaire & CNAPS',
    text: 'Intégrez les démarches réglementaires au parcours commercial des formations concernées.',
    items: ['Compte CNAPS et numéro NUB', 'Demande transmise, en instruction ou acceptée', 'Vérification de la carte professionnelle', 'Progression réglementaire lisible', 'Masquage des étapes devenues inutiles'],
  },
  {
    number: '07', code: 'AU', theme: 'automations', title: 'Automatisations & prochaines actions',
    text: 'Transformez chaque événement en action concrète pour que le suivi continue au bon moment.',
    items: ['Prochaine action suggérée ou manuelle', 'Scénarios de relance', 'Messages déclenchés par un statut', 'Tâches et rappels d’équipe', 'Gestion des refus et des exceptions'],
  },
  {
    number: '08', code: 'KPI', theme: 'reporting', title: 'Pilotage & statistiques',
    text: 'Mesurez l’activité commerciale et identifiez les canaux qui créent réellement des inscriptions.',
    items: ['Tableau de bord commercial', 'Rendez-vous, relances et conversions', 'Performance par source de leads', 'Suivi des campagnes', 'Indicateurs par période et par équipe'],
  },
];

const gains = [
  ['Aucun prospect oublié', 'Les contacts à traiter et les relances en retard sont visibles avant qu’une opportunité ne se refroidisse.'],
  ['Un discours mieux coordonné', 'Chaque conseiller connaît les échanges déjà réalisés, le financement envisagé et la prochaine étape.'],
  ['Une qualification plus fiable', 'Les éléments commerciaux, financiers et réglementaires sont réunis avant de confirmer la faisabilité.'],
  ['Des conversions mesurables', 'La direction suit les sources, l’activité et les passages du premier contact à l’inscription.'],
];

const galleryScreens = [
  { label: 'Tableau de bord', eyebrow: 'Vision acquisition', title: 'Comprendre d’où viennent les demandes et ce qu’elles deviennent.', text: 'Volumes, sources, campagnes et conversions donnent à la direction une lecture immédiate de l’acquisition.', image: 'connect-crm-dashboard.jpg', alt: 'Tableau de bord réel des indicateurs d’acquisition dans Intégrale Connect CRM', width: 1070, height: 620 },
  { label: 'Pipeline', eyebrow: 'Suivi commercial', title: 'Chaque piste à la bonne étape, avec la bonne priorité.', text: 'Les volumes par statut, les filtres et les actions à mener structurent le travail quotidien des conseillers.', image: 'connect-crm-pipeline.jpg', alt: 'Vue réelle du pipeline commercial dans Intégrale Connect CRM', width: 1090, height: 620 },
  { label: 'Relances', eyebrow: 'Prochaine action', title: 'Les relances dues aujourd’hui ne disparaissent plus dans une boîte mail.', text: 'Compteurs, dates, statuts et recherches permettent de concentrer l’équipe sur les contacts à reprendre.', image: 'connect-crm-relances.jpg', alt: 'Vue réelle des relances dans Intégrale Connect CRM', width: 1090, height: 415 },
  { label: 'E-mails & SMS', eyebrow: 'Communication', title: 'Des réponses rapides, cohérentes et toujours personnalisables.', text: 'Les modèles et variables métier accélèrent les échanges tout en conservant le contexte du prospect.', image: 'connect-crm-modeles.jpg', alt: 'Bibliothèque réelle de modèles de messages dans Intégrale Connect CRM', width: 1080, height: 800 },
  { label: 'Exports', eyebrow: 'Exploitation des données', title: 'Les données utiles restent disponibles pour le pilotage.', text: 'Des exports structurés permettent de poursuivre une analyse ou un traitement lorsque le besoin l’exige.', image: 'connect-crm-exports.jpg', alt: 'Vue réelle des exports disponibles dans Intégrale Connect CRM', width: 1090, height: 620 },
];

const transformations = [
  ['Des demandes réparties entre formulaires, e-mails et fichiers', 'Un pipeline commun qui conserve la source et l’historique'],
  ['Des relances dépendantes de la mémoire de chaque conseiller', 'Une prochaine action datée et visible par l’équipe'],
  ['Des résultats commerciaux difficiles à relier aux campagnes', 'Des tableaux de bord qui rapprochent acquisition et conversion'],
];

const useCases = [
  ['Conseillers', 'Qualifier, appeler, planifier et relancer depuis une fiche qui garde tout le contexte.'],
  ['Responsable commercial', 'Répartir les priorités, suivre le pipeline et identifier les opportunités sans suite.'],
  ['Direction', 'Mesurer les sources, l’activité et les conversions pour mieux orienter les investissements.'],
];

const ecosystem = ['Formulaires web', 'Meta', 'Calendly', 'E-mail', 'SMS', 'Exports Excel'];

const faq = [
  ['À qui s’adresse Intégrale Connect CRM ?', 'Le CRM est conçu pour les organismes de formation et CFA qui gèrent des demandes entrantes, des rendez-vous, des financements et des parcours d’inscription. La démonstration permet de vérifier son adéquation avec votre organisation commerciale.'],
  ['Le CRM convient-il aux formations réglementées ?', 'Oui. Les fonctions de faisabilité et de suivi CNAPS permettent d’intégrer les prérequis réglementaires au parcours commercial lorsque la formation le nécessite.'],
  ['Peut-on adapter le pipeline et les automatisations ?', 'Le périmètre, les étapes et les scénarios utiles sont cadrés selon vos formations, votre équipe et vos méthodes de suivi. Ils sont précisés dans la proposition commerciale.'],
  ['Comment est calculé l’abonnement ?', 'Le tarif mensuel dépend notamment du nombre d’utilisateurs, des modules retenus, du volume d’activité, des automatisations et du travail de mise en place. Une proposition est remise après la démonstration.'],
  ['Peut-on reprendre nos prospects et notre historique ?', 'La reprise est étudiée à partir de vos fichiers ou exports actuels. Les champs, les volumes, les doublons et la qualité des données déterminent ce qui peut être importé et le travail nécessaire.'],
  ['Le CRM peut-il recevoir automatiquement nos demandes ?', 'Les sources à connecter sont définies pendant le cadrage : formulaires, campagnes, prise de rendez-vous ou autres flux disponibles. La proposition précise les connexions et automatisations réellement mises en place.'],
];

const browserBar = (view) => `<div class="crmBrowserBar"><span><i></i><i></i><i></i></span><b>Intégrale Connect CRM</b><small>${view}</small></div>`;

function pipelinePreview() {
  const cards = [
    ['Nouvelle demande', 'APS · Financement à qualifier', 'Aujourd’hui'],
    ['À rappeler', 'VTC · Premier échange réalisé', '14:30'],
    ['Dossier à valider', 'SSIAP · Pièces reçues', 'Demain'],
  ];
  return `<div class="crmProductUi crmPipelineUi">
    ${browserBar('Pipeline commercial')}
    <div class="crmUiShell">
      <aside><strong>IC</strong><i class="active"></i><i></i><i></i><i></i><i></i></aside>
      <main>
        <header><div><small>VUE COMMERCIALE</small><b>Pipeline des admissions</b></div><span>+ Nouvelle piste</span></header>
        <div class="crmUiStats"><article><small>À traiter</small><b>28</b><i>+ 12 %</i></article><article><small>Rendez-vous</small><b>16</b><i>Aujourd’hui</i></article><article><small>Conversion</small><b>34 %</b><i>Ce mois</i></article></div>
        <div class="crmKanban">${cards.map(([title, detail, timing], index) => `<article><header><b>${['Nouvelles pistes', 'À relancer', 'Proposition'][index]}</b><i>${[8, 11, 5][index]}</i></header><div class="crmLeadCard"><strong>${title}</strong><span>${detail}</span><small>${timing}</small></div><div class="crmLeadCard muted"><strong>${index === 0 ? 'Formulaire reçu' : index === 1 ? 'Rendez-vous passé' : 'Financement en cours'}</strong><span>Prochaine action planifiée</span></div></article>`).join('')}</div>
      </main>
    </div>
  </div>`;
}

function contactPreview() {
  return `<div class="crmProductUi crmContactUi">
    ${browserBar('Fiche contact')}
    <div class="crmContactCanvas">
      <aside><strong>IC</strong><i></i><i class="active"></i><i></i><i></i></aside>
      <main>
        <header><div><small>CONTACT #0248</small><b>Projet de formation APS</b></div><span>Prospect qualifié</span></header>
        <div class="crmContactTop"><article><i>PF</i><div><b>Prospect formation</b><small>Demande reçue via le site</small></div></article><article><small>PROCHAINE ACTION</small><b>Appel de qualification</b><span>Demain · 10:00</span></article></div>
        <div class="crmContactGrid">
          <article><header><b>Coordonnées</b><span>Modifier</span></header><p><i></i>Téléphone renseigné</p><p><i></i>E-mail renseigné</p><p><i></i>Formation : APS</p></article>
          <article><header><b>Financement</b><span>CPF</span></header><div class="crmProgress"><i></i></div><p><i></i>Éligibilité à confirmer</p><p><i></i>Montant renseigné</p></article>
          <article><header><b>Suivi réglementaire</b><span>40 / 100</span></header><div class="crmSteps"><i class="done"></i><i class="done"></i><i></i><i></i></div><p><i></i>Compte CNAPS créé</p><p><i></i>NUB à vérifier</p></article>
          <article class="crmActivityCard"><header><b>Activité récente</b><span>Tout voir</span></header><ul><li><i>SMS</i><span><b>Confirmation envoyée</b><small>Il y a 18 min</small></span></li><li><i>RDV</i><span><b>Échange téléphonique</b><small>Hier · 16:20</small></span></li></ul></article>
        </div>
      </main>
    </div>
  </div>`;
}

function agendaPreview() {
  return `<div class="crmProductUi crmAgendaUi">
    ${browserBar('Agenda & relances')}
    <div class="crmAgendaCanvas">
      <header><div><small>SEMAINE COMMERCIALE</small><b>Rendez-vous & prochaines actions</b></div><span>+ Ajouter</span></header>
      <div class="crmAgendaBody">
        <aside><b>À faire</b><article><i></i><span><strong>6 relances</strong><small>À traiter aujourd’hui</small></span></article><article><i></i><span><strong>3 dossiers</strong><small>En attente de réponse</small></span></article><article><i></i><span><strong>2 financements</strong><small>À confirmer</small></span></article></aside>
        <main><header>${['Lun. 07', 'Mar. 08', 'Mer. 09', 'Jeu. 10', 'Ven. 11'].map(day => `<b>${day}</b>`).join('')}</header><div class="crmCalendarGrid">${Array.from({ length: 20 }, (_, index) => `<i>${[2, 7, 11, 13, 18].includes(index) ? `<span class="${index === 11 ? 'gold' : ''}">${index === 2 ? 'Appel' : index === 7 ? 'Démo' : index === 11 ? 'Relance' : index === 13 ? 'RDV' : 'Suivi'}</span>` : ''}</i>`).join('')}</div></main>
      </div>
    </div>
  </div>`;
}

export function render() {
  return `
    <section class="crmPositioning">
      <div class="crmPositioningGrid">
        <div class="crmSectionHeading reveal">
          <span>Du premier contact à l’inscription</span>
          <h2>Un CRM qui comprend vraiment le parcours d’un futur stagiaire.</h2>
          <p>Intégrale Connect CRM ne se limite pas à stocker des coordonnées. Il relie les demandes, les rendez-vous, les échanges, le financement, la faisabilité réglementaire et la prochaine action dans un même fil commercial.</p>
        </div>
        <div class="crmAudience reveal">
          <small>CONÇU POUR</small>
          <div><span>Organismes de formation</span><span>CFA</span><span>Équipes commerciales</span><span>Admissions</span></div>
          <strong>Une solution métier développée à partir des parcours commerciaux réellement gérés par un organisme de formation.</strong>
        </div>
      </div>
    </section>

    <section class="productDemoSection productDemoCrm" id="demo-connect-crm">
      <div class="productDemoIntro reveal">
        <div><span>Démonstration en mouvement</span><h2>Le CRM en action, en moins de 20 secondes.</h2></div>
        <p>Tableau de bord, pipeline, relances, modèles et exports : découvrez de vrais écrans avant de nous présenter votre parcours commercial.</p>
      </div>
      <div class="productVideoStage reveal">
        <div class="productVideoChrome"><span><i></i><i></i><i></i></span><b>Intégrale Connect CRM</b><small>Démo produit · 17 s</small></div>
        <video autoplay muted loop playsinline controls preload="metadata" poster="/images/connect-crm-dashboard.jpg" aria-label="Vidéo de démonstration d’Intégrale Connect CRM">
          <source src="/videos/connect-crm-demo.mp4" type="video/mp4">
          Votre navigateur ne permet pas de lire cette vidéo. <a href="/videos/connect-crm-demo.mp4">Télécharger la démonstration</a>.
        </video>
        <div class="productVideoPulse"><i></i>Écrans réels · données non nominatives</div>
      </div>
      <div class="productDemoPoints">
        <article class="reveal"><i>01</i><div><b>Centraliser les demandes</b><span>Toutes les sources rejoignent un même parcours commercial.</span></div></article>
        <article class="reveal"><i>02</i><div><b>Organiser les relances</b><span>La prochaine action reste visible et partagée par l’équipe.</span></div></article>
        <article class="reveal"><i>03</i><div><b>Mesurer les conversions</b><span>Les indicateurs rapprochent acquisition, activité et inscriptions.</span></div></article>
      </div>
    </section>

    <section class="crmJourneySection">
      <div class="crmSectionHeading centered reveal">
        <span>Un parcours commercial continu</span>
        <h2>Six étapes. Une prochaine action toujours visible.</h2>
        <p>Le contact avance sans perdre son historique. Chaque échange enrichit le dossier et prépare la décision suivante, jusqu’à l’inscription.</p>
      </div>
      <div class="crmJourney">
        ${journey.map(([number, title, text]) => `<article class="reveal"><i>${number}</i><h3>${title}</h3><p>${text}</p><span aria-hidden="true">→</span></article>`).join('')}
      </div>
    </section>

    <section class="productGallerySection productGalleryCrm" id="captures-crm">
      <div class="productGalleryHeading reveal">
        <div><span>Explorez le produit</span><h2>Cinq écrans réels pour suivre toute la relation commerciale.</h2><p>Choisissez une vue : le carrousel vous montre comment le CRM transforme chaque demande en parcours clair, mesurable et actionnable.</p></div>
        <div class="productGalleryCount"><b>05</b><span>vues métier</span></div>
      </div>
      <div class="productGallery reveal" data-product-gallery data-gallery-interval="5600">
        <div class="productGalleryTabs" role="tablist" aria-label="Captures d’écran d’Intégrale Connect CRM">
          ${galleryScreens.map((screen, index) => `<button type="button" role="tab" id="crm-tab-${index}" aria-controls="crm-panel-${index}" aria-selected="${index === 0}" tabindex="${index === 0 ? '0' : '-1'}" data-product-tab="${index}"><i>${String(index + 1).padStart(2, '0')}</i><span>${screen.label}</span></button>`).join('')}
        </div>
        <div class="productGalleryStage">
          ${galleryScreens.map((screen, index) => `<figure id="crm-panel-${index}" role="tabpanel" aria-labelledby="crm-tab-${index}" aria-hidden="${index !== 0}" class="productGalleryPanel${index === 0 ? ' is-active' : ''}" data-product-panel="${index}">
            <a class="productGalleryImage" href="/images/${screen.image}" target="_blank" rel="noopener" aria-label="Agrandir : ${screen.title}"><img src="/images/${screen.image}" alt="${screen.alt}" width="${screen.width}" height="${screen.height}" loading="${index === 0 ? 'eager' : 'lazy'}"></a>
            <figcaption><span>${screen.eyebrow}</span><h3>${screen.title}</h3><p>${screen.text}</p><a href="/images/${screen.image}" target="_blank" rel="noopener">Voir l’écran en grand <i aria-hidden="true">↗</i></a></figcaption>
          </figure>`).join('')}
        </div>
      </div>
    </section>

    <section class="crmViewsSection" id="apercus-crm">
      <div class="crmViewsHeader">
        <div class="crmSectionHeading dark reveal">
          <span>Parcours animés</span>
          <h2>Suivez la prochaine action, pas seulement une liste de contacts.</h2>
          <p>Ces mises en situation montrent comment pipeline, fiche contact et agenda travaillent ensemble. Elles complètent les captures réelles avec une lecture guidée du parcours commercial.</p>
        </div>
        <div class="crmViewsCounter reveal"><b>03</b><span>vues métier</span></div>
      </div>
      <div class="crmViewsGrid">
        <figure class="crmView crmViewMain reveal">
          ${pipelinePreview()}
          <figcaption><i>01</i><div><h3>Pipeline commercial</h3><p>Les nouvelles demandes, relances, rendez-vous et propositions sont organisés par priorité et par étape.</p></div></figcaption>
        </figure>
        <figure class="crmView reveal">
          ${contactPreview()}
          <figcaption><i>02</i><div><h3>Fiche contact unifiée</h3><p>Historique, financement, réglementation et prochaine action restent accessibles sans changer d’outil.</p></div></figcaption>
        </figure>
        <figure class="crmView reveal">
          ${agendaPreview()}
          <figcaption><i>03</i><div><h3>Agenda & relances</h3><p>Rendez-vous, tâches et contacts à rappeler structurent la journée de chaque conseiller.</p></div></figcaption>
        </figure>
      </div>
    </section>

    <section class="productTransformationSection productTransformationCrm">
      <div class="productTransformationIntro reveal"><span>Avant / avec le CRM</span><h2>Une méthode commerciale partagée, du premier clic à l’inscription.</h2><p>Le CRM ne se contente pas de conserver des coordonnées. Il structure la prochaine décision et rend les résultats lisibles.</p></div>
      <div class="productTransformationGrid">
        ${transformations.map(([before, after], index) => `<article class="reveal"><i>${String(index + 1).padStart(2, '0')}</i><div><small>AVANT</small><p>${before}</p></div><span aria-hidden="true">→</span><div><small>AVEC LE CRM</small><p>${after}</p></div></article>`).join('')}
      </div>
    </section>

    <section class="productUseCasesSection productUseCasesCrm">
      <div class="productUseCasesHeader reveal"><div><span>Une vision pour chaque rôle</span><h2>Le quotidien de l’équipe et les décisions de la direction, enfin reliés.</h2></div><p>Les conseillers agissent dans le même environnement que celui qui alimente le pilotage commercial.</p></div>
      <div class="productUseCasesGrid">${useCases.map(([title, text], index) => `<article class="reveal"><i>${String(index + 1).padStart(2, '0')}</i><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>
      <div class="productEcosystem reveal"><span>SOURCES & CANAUX</span><div>${ecosystem.map(item => `<i>${item}</i>`).join('')}</div></div>
    </section>

    <section class="crmFeaturesSection" id="fonctionnalites-crm">
      <div class="crmSectionHeading centered reveal">
        <span>Couverture fonctionnelle</span>
        <h2>Tout le suivi commercial d’un organisme de formation.</h2>
        <p>Les fonctions sont organisées autour des usages de vos équipes. Le périmètre final dépend des modules et automatisations retenus.</p>
      </div>
      <div class="crmFeaturesGrid">
        ${featureGroups.map(group => `<article class="crmFeature ${group.theme} reveal"><header><i>${group.code}</i><span>${group.number}</span></header><h3>${group.title}</h3><p>${group.text}</p><ul>${group.items.map(item => `<li><i>✓</i>${item}</li>`).join('')}</ul></article>`).join('')}
      </div>
    </section>

    <section class="crmGainsSection">
      <div class="crmGainsInner">
        <div class="crmGainsCopy reveal">
          <span>Ce que le CRM change</span>
          <h2>Moins de relances oubliées. Plus d’inscriptions maîtrisées.</h2>
          <p>La solution donne aux équipes une méthode de suivi partagée, tout en offrant à la direction une lecture claire de l’activité et des conversions.</p>
          <a class="btn primary" href="/contact?sujet=integrale-connect-crm">Voir le CRM en démonstration <b aria-hidden="true">→</b></a>
        </div>
        <div class="crmGainsGrid">
          ${gains.map(([title, text], index) => `<article class="reveal"><i>${String(index + 1).padStart(2, '0')}</i><h3>${title}</h3><p>${text}</p></article>`).join('')}
        </div>
      </div>
    </section>

    <section class="productDemoAgendaSection productDemoAgendaCrm">
      <div class="productDemoAgendaCard reveal">
        <div class="productDemoAgendaCopy"><span>Votre démonstration personnalisée</span><h2>En 4 parcours, vous saurez comment le CRM s’adapte à votre équipe.</h2><p>Nous partons de vos sources de demandes, de vos étapes et de vos règles de relance pour vous montrer un scénario concret.</p><a class="btn primary" href="/contact?sujet=integrale-connect-crm">Réserver ma démonstration <b aria-hidden="true">→</b></a></div>
        <ol>
          <li><i>01</i><div><b>Faire entrer une demande</b><span>Source, campagne et attribution du contact.</span></div></li>
          <li><i>02</i><div><b>Qualifier une piste</b><span>Besoin, financement et faisabilité.</span></div></li>
          <li><i>03</i><div><b>Programmer la suite</b><span>Rendez-vous, message et prochaine relance.</span></div></li>
          <li><i>04</i><div><b>Lire la conversion</b><span>Pipeline, sources et activité commerciale.</span></div></li>
        </ol>
      </div>
    </section>

    <section class="crmDeploymentSection">
      <div class="crmSectionHeading reveal">
        <span>Mise en place</span>
        <h2>Un CRM configuré autour de votre parcours commercial.</h2>
        <p>La démonstration permet de comprendre vos sources de prospects, vos étapes, vos financements et vos règles de relance. Le déploiement est ensuite cadré sur un périmètre concret.</p>
      </div>
      <div class="crmDeploymentFlow reveal">
        <article><i>01</i><div><b>Démonstration</b><span>Découverte des vues et des parcours.</span></div></article>
        <article><i>02</i><div><b>Cadrage</b><span>Pipeline, rôles et automatisations utiles.</span></div></article>
        <article><i>03</i><div><b>Configuration</b><span>Paramétrage du périmètre validé.</span></div></article>
        <article><i>04</i><div><b>Prise en main</b><span>Accompagnement des utilisateurs.</span></div></article>
      </div>
    </section>

    <section class="crmPricingSection">
      <div class="crmPricingCard reveal">
        <div class="crmPricingTop"><span>MODÈLE D’ABONNEMENT</span><i>Mensuel</i></div>
        <div class="crmPricingBody">
          <div><h2>Une proposition adaptée à votre équipe commerciale.</h2><p>Le tarif est établi après la démonstration, selon le nombre d’utilisateurs, les modules, les automatisations, le volume d’activité et le travail de mise en place.</p></div>
          <ul><li><i>✓</i>Pipeline et modules définis</li><li><i>✓</i>Nombre d’accès précisé</li><li><i>✓</i>Mise en place chiffrée</li><li><i>✓</i>Abonnement mensuel lisible</li></ul>
        </div>
        <div class="crmPricingActions"><a class="btn primary" href="/contact?sujet=integrale-connect-crm">Demander une démonstration <b aria-hidden="true">→</b></a><a class="btn secondary" href="/nos-outils-metiers">Comparer nos deux outils</a></div>
      </div>
    </section>

    <section class="crmFaqSection">
      <div class="crmSectionHeading reveal"><span>Questions fréquentes</span><h2>Avant de découvrir le CRM.</h2></div>
      <div class="crmFaq">
        ${faq.map(([question, answer], index) => `<details class="reveal"${index === 0 ? ' open' : ''}><summary><span>${String(index + 1).padStart(2, '0')}</span><b>${question}</b><i aria-hidden="true">+</i></summary><p>${answer}</p></details>`).join('')}
      </div>
    </section>

    <section class="crmFinalSection">
      <div class="crmFinalCard reveal">
        <div><span>Intégrale Connect CRM</span><h2>Voyez votre parcours commercial réuni dans un seul outil.</h2><p>Présentez-nous vos étapes actuelles. Nous vous montrerons comment le CRM peut structurer les demandes, les relances et les inscriptions de votre organisme.</p></div>
        <div><a class="btn primary" href="/contact?sujet=integrale-connect-crm">Planifier une démonstration <b aria-hidden="true">→</b></a><a class="crmFinalContact" href="mailto:clement@integraleacademy.com?subject=D%C3%A9monstration%20Int%C3%A9grale%20Connect%20CRM">clement@integraleacademy.com</a></div>
      </div>
    </section>

    <div class="productStickyCta productStickyCrm" data-product-sticky aria-label="Actions rapides Intégrale Connect CRM">
      <div><i>IC</i><span><b>Intégrale Connect CRM</b><small>Prospects, relances & conversion</small></span></div>
      <nav><a href="#captures-crm">Voir les écrans</a><a class="btn primary" href="/contact?sujet=integrale-connect-crm">Demander une démo <b aria-hidden="true">→</b></a></nav>
    </div>`;
}
