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

const faq = [
  ['À qui s’adresse Intégrale Connect CRM ?', 'Le CRM est conçu pour les organismes de formation et CFA qui gèrent des demandes entrantes, des rendez-vous, des financements et des parcours d’inscription. La démonstration permet de vérifier son adéquation avec votre organisation commerciale.'],
  ['Le CRM convient-il aux formations réglementées ?', 'Oui. Les fonctions de faisabilité et de suivi CNAPS permettent d’intégrer les prérequis réglementaires au parcours commercial lorsque la formation le nécessite.'],
  ['Peut-on adapter le pipeline et les automatisations ?', 'Le périmètre, les étapes et les scénarios utiles sont cadrés selon vos formations, votre équipe et vos méthodes de suivi. Ils sont précisés dans la proposition commerciale.'],
  ['Comment est calculé l’abonnement ?', 'Le tarif mensuel dépend notamment du nombre d’utilisateurs, des modules retenus, du volume d’activité, des automatisations et du travail de mise en place. Une proposition est remise après la démonstration.'],
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

    <section class="crmViewsSection" id="apercus-crm">
      <div class="crmViewsHeader">
        <div class="crmSectionHeading dark reveal">
          <span>Aperçus fonctionnels</span>
          <h2>Le bon contexte, au moment d’agir.</h2>
          <p>Pipeline, fiche contact et agenda donnent trois lectures complémentaires du même parcours commercial. Les équipes voient ce qui s’est passé, ce qui bloque et ce qu’il faut faire ensuite.</p>
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
    </section>`;
}
