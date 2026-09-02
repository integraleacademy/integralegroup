export const route = '/integrale-connect-plus';
export const bodyClass = 'connectPlusPage';

export const buttons = `
  <div class="connectPlusHeroButtons">
    <a class="btn primary" href="/contact?sujet=integrale-connect-plus">Demander une démonstration <span aria-hidden="true">→</span></a>
    <a class="btn secondary" href="#fonctionnalites">Voir les fonctionnalités</a>
  </div>
  <div class="connectPlusHeroProof" aria-label="Caractéristiques d’Intégrale Connect+">
    <span><i></i>Solution métier SaaS</span>
    <span><i></i>Abonnement mensuel</span>
    <span><i></i>Évolutions continues</span>
  </div>`;

const featureGroups = [
  {
    number: '01', code: 'ST', theme: 'sessions', title: 'Sessions & stagiaires',
    text: 'Organisez les formations et retrouvez immédiatement la situation de chaque session.',
    items: ['Création et pilotage des sessions', 'Dates de formation, distanciel, présentiel et examens', 'Listes stagiaires et statuts d’avancement', 'Filtres par formation et par période', 'Archivage et historique des sessions'],
  },
  {
    number: '02', code: 'DS', theme: 'records', title: 'Dossiers administratifs',
    text: 'Rassemblez les informations et les pièces d’un stagiaire dans une fiche de suivi unique.',
    items: ['Fiche stagiaire centralisée', 'Suivi des pièces reçues et manquantes', 'Contrôle de complétude du dossier', 'Accès aux documents et actions utiles', 'Espace stagiaire et suivi de connexion'],
  },
  {
    number: '03', code: 'DOC', theme: 'documents', title: 'Documents & signatures',
    text: 'Générez, classez et faites signer les documents nécessaires au parcours de formation.',
    items: ['Conventions, attestations et documents PDF', 'Signature électronique selon le parcours', 'Suivi de l’assiduité et du e-learning', 'Tableaux de suivi de formation à distance', 'Centralisation des versions signées'],
  },
  {
    number: '04', code: '€', theme: 'finance', title: 'Financements & paiements',
    text: 'Conservez une lecture claire du financement, des encaissements et des sommes restant à traiter.',
    items: ['Financement personnel et autres financeurs', 'CPF, EDOF et WEDOF', 'Échéanciers, prélèvements et espèces', 'Suivi des ventes et facturation', 'Rapprochement des dossiers et des paiements'],
  },
  {
    number: '05', code: 'CN', theme: 'regulatory', title: 'CNAPS & conformité',
    text: 'Suivez les démarches réglementaires sans perdre de vue les échéances de formation.',
    items: ['NUB et état des demandes CNAPS', 'Statuts transmis, en instruction et acceptés', 'Vérification de carte professionnelle', 'Import et suivi PRE CNAPS', 'Alertes sur les changements de statut'],
  },
  {
    number: '06', code: 'EX', theme: 'exams', title: 'Examens & parcours',
    text: 'Reliez les dates, les participants et les obligations propres à chaque type de formation.',
    items: ['Planification et suivi des examens', 'Parcours APS, SSIAP, A3P, VTC, dirigeant et VAE', 'Gestion des espaces BTS', 'Indicateurs par session et formation', 'Suivi des étapes jusqu’à la certification'],
  },
  {
    number: '07', code: 'AU', theme: 'automation', title: 'Automatisations métier',
    text: 'Déclenchez les actions répétitives au bon moment tout en conservant un contrôle opérationnel.',
    items: ['Actions programmées et alertes', 'Déclarations d’entrée et de service fait', 'E-mails et notifications de suivi', 'Connecteurs, API et webhooks', 'Blocage et traitement des exceptions'],
  },
  {
    number: '08', code: 'PI', theme: 'reporting', title: 'Pilotage & tableaux de bord',
    text: 'Donnez à l’équipe et à la direction une vision immédiate de l’activité et des priorités.',
    items: ['KPI annuels et par formation', 'Filtres et recherches instantanées', 'Indicateurs de dossiers complets', 'Suivi des anomalies et actions à mener', 'Traçabilité des automatisations'],
  },
];

const journey = [
  ['01', 'Inscription', 'Le stagiaire et sa session sont créés dans un parcours structuré.'],
  ['02', 'Dossier', 'Les informations, pièces et éléments manquants sont visibles au même endroit.'],
  ['03', 'Financement', 'La répartition, les paiements et les dossiers CPF sont suivis sans rupture.'],
  ['04', 'Conformité', 'Les démarches CNAPS et les obligations réglementaires restent sous contrôle.'],
  ['05', 'Formation', 'Assiduité, e-learning, documents et examens accompagnent le déroulement réel.'],
  ['06', 'Clôture', 'Attestations, service fait, facturation et archivage terminent le parcours.'],
];

const gains = [
  ['Une donnée unique', 'Les équipes n’ont plus à rechercher la dernière version d’une information dans plusieurs fichiers ou outils.'],
  ['Des priorités visibles', 'Les dossiers incomplets, échéances et anomalies apparaissent directement dans les vues de pilotage.'],
  ['Moins d’actions manuelles', 'Les automatisations prennent en charge les tâches répétitives tout en signalant les exceptions.'],
  ['Une meilleure traçabilité', 'Les statuts, documents et actions restent rattachés au bon stagiaire et à la bonne session.'],
];

const faq = [
  ['À quels organismes s’adresse Connect+ ?', 'La solution s’adresse aux organismes de formation et CFA qui doivent coordonner des sessions, des dossiers stagiaires, des documents, des financements et des obligations réglementaires. Une démonstration permet de confirmer l’adéquation avec votre fonctionnement.'],
  ['Faut-il utiliser toutes les fonctionnalités ?', 'Non. Le périmètre utile est défini selon vos formations, vos processus et vos priorités. La proposition commerciale précise les modules et les accès retenus.'],
  ['Peut-on reprendre des données existantes ?', 'La faisabilité d’une reprise est étudiée à partir de vos sources actuelles : fichiers, exports ou outils déjà utilisés. Le volume et la qualité des données déterminent le travail nécessaire.'],
  ['Comment est calculé l’abonnement ?', 'Le tarif mensuel dépend du périmètre fonctionnel, du nombre d’utilisateurs, du volume d’activité et de l’accompagnement nécessaire au démarrage. Une proposition est remise après la démonstration.'],
];

export function render() {
  return `
    <section class="connectPlusPositioning">
      <div class="connectPlusPositioningGrid">
        <div class="connectPlusSectionHeading reveal">
          <span>Du premier dossier à la clôture</span>
          <h2>Un seul environnement pour suivre tout le parcours stagiaire.</h2>
          <p>Connect+ remplace l’empilement de tableaux, dossiers partagés et outils isolés par un fil de gestion continu. Chaque information reste liée à la bonne personne, à la bonne session et à la bonne action.</p>
        </div>
        <div class="connectPlusAudience reveal">
          <small>CONÇU POUR</small>
          <div><span>Organismes de formation</span><span>CFA</span><span>Formations réglementées</span><span>Équipes administratives</span></div>
          <strong>Une solution développée et utilisée au quotidien par un organisme de formation.</strong>
        </div>
      </div>
    </section>

    <section class="connectPlusJourneySection">
      <div class="connectPlusSectionHeading centered reveal">
        <span>Un parcours sans rupture</span>
        <h2>Six étapes reliées dans le même outil.</h2>
        <p>L’information progresse avec le stagiaire. Les équipes retrouvent le contexte, les documents et la prochaine action sans recommencer le suivi à chaque étape.</p>
      </div>
      <div class="connectPlusJourney">
        ${journey.map(([number, title, text]) => `<article class="reveal"><i>${number}</i><h3>${title}</h3><p>${text}</p><span aria-hidden="true">→</span></article>`).join('')}
      </div>
    </section>

    <section class="connectPlusScreensSection" id="captures">
      <div class="connectPlusScreensHeader">
        <div class="connectPlusSectionHeading connectPlusSectionHeadingDark reveal">
          <span>Le produit, en conditions réelles</span>
          <h2>Des vues claires pour décider et agir.</h2>
          <p>Ces écrans sont issus d’Intégrale Connect+ en utilisation réelle. Les vues présentées ne contiennent aucune donnée nominative.</p>
        </div>
        <div class="connectPlusScreenCounter reveal"><b>03</b><span>vues métier</span></div>
      </div>
      <div class="connectPlusScreensGrid">
        <figure class="connectPlusScreen connectPlusScreenMain reveal">
          <a href="/images/connect-plus-sessions.jpg" target="_blank" rel="noopener" aria-label="Agrandir la vue de pilotage des sessions">
            <div class="connectPlusBrowserBar"><span><i></i><i></i><i></i></span><b>Intégrale Connect+</b><small>Sessions</small></div>
            <img src="/images/connect-plus-sessions.jpg" alt="Tableau de bord annuel des sessions et stagiaires" width="1350" height="925" loading="lazy">
          </a>
          <figcaption><i>01</i><div><h3>Pilotage des sessions</h3><p>Volumes annuels, filtres, dates, examens, dossiers complets et indicateurs réglementaires sont visibles dans une seule vue.</p></div></figcaption>
        </figure>
        <figure class="connectPlusScreen reveal">
          <a href="/images/connect-plus-cnaps.jpg" target="_blank" rel="noopener" aria-label="Agrandir la vue de suivi CNAPS">
            <div class="connectPlusBrowserBar"><span><i></i><i></i><i></i></span><b>Intégrale Connect+</b><small>CNAPS</small></div>
            <img src="/images/connect-plus-cnaps.jpg" alt="Indicateurs de suivi des dossiers CNAPS" width="1350" height="430" loading="lazy">
          </a>
          <figcaption><i>02</i><div><h3>Suivi CNAPS</h3><p>Changements de statut, inscriptions, NUB et dossiers à surveiller restent immédiatement identifiables.</p></div></figcaption>
        </figure>
        <figure class="connectPlusScreen reveal">
          <a href="/images/connect-plus-wedof.jpg" target="_blank" rel="noopener" aria-label="Agrandir la vue de pilotage CPF et WEDOF">
            <div class="connectPlusBrowserBar"><span><i></i><i></i><i></i></span><b>Intégrale Connect+</b><small>CPF · WEDOF</small></div>
            <img src="/images/connect-plus-wedof.jpg" alt="Pilotage des automatisations CPF et WEDOF" width="1350" height="925" loading="lazy">
          </a>
          <figcaption><i>03</i><div><h3>Pilotage CPF & WEDOF</h3><p>Automatisations, compteurs, alertes, verrous et dossiers à traiter sont réunis dans un tableau de bord contrôlable.</p></div></figcaption>
        </figure>
      </div>
    </section>

    <section class="connectPlusFeaturesSection" id="fonctionnalites">
      <div class="connectPlusSectionHeading centered reveal">
        <span>Couverture fonctionnelle</span>
        <h2>Tout ce qu’il faut pour administrer une formation sans perdre le fil.</h2>
        <p>Les fonctions sont regroupées par usages métier. Le périmètre final dépend des modules retenus pour votre organisation.</p>
      </div>
      <div class="connectPlusFeaturesGrid">
        ${featureGroups.map(group => `<article class="connectPlusFeature ${group.theme} reveal"><header><i>${group.code}</i><span>${group.number}</span></header><h3>${group.title}</h3><p>${group.text}</p><ul>${group.items.map(item => `<li><i>✓</i>${item}</li>`).join('')}</ul></article>`).join('')}
      </div>
    </section>

    <section class="connectPlusGainsSection">
      <div class="connectPlusGainsInner">
        <div class="connectPlusGainsCopy reveal">
          <span>Ce que Connect+ change</span>
          <h2>Moins de dispersion. Plus de maîtrise.</h2>
          <p>La solution rapproche l’administratif, le réglementaire et le pilotage. Le gain principal est simple : chacun sait où trouver l’information et ce qu’il doit faire ensuite.</p>
          <a class="btn primary" href="/contact?sujet=integrale-connect-plus">Voir Connect+ en démonstration <b aria-hidden="true">→</b></a>
        </div>
        <div class="connectPlusGainsGrid">
          ${gains.map(([title, text], index) => `<article class="reveal"><i>${String(index + 1).padStart(2, '0')}</i><h3>${title}</h3><p>${text}</p></article>`).join('')}
        </div>
      </div>
    </section>

    <section class="connectPlusDeploymentSection">
      <div class="connectPlusSectionHeading reveal">
        <span>Mise en place</span>
        <h2>Un déploiement cadré autour de votre organisation.</h2>
        <p>La démonstration sert d’abord à comprendre vos formations, vos outils actuels et les points de friction. Elle permet ensuite de définir un périmètre utile et une proposition adaptée.</p>
      </div>
      <div class="connectPlusDeploymentFlow reveal">
        <article><i>01</i><div><b>Démonstration</b><span>Découverte des écrans et des parcours.</span></div></article>
        <article><i>02</i><div><b>Cadrage</b><span>Modules, utilisateurs et contraintes.</span></div></article>
        <article><i>03</i><div><b>Configuration</b><span>Paramétrage selon le périmètre validé.</span></div></article>
        <article><i>04</i><div><b>Prise en main</b><span>Accompagnement défini dans la proposition.</span></div></article>
      </div>
    </section>

    <section class="connectPlusPricingSection">
      <div class="connectPlusPricingCard reveal">
        <div class="connectPlusPricingTop">
          <span>MODÈLE D’ABONNEMENT</span><i>Mensuel</i>
        </div>
        <div class="connectPlusPricingBody">
          <div><h2>Une proposition dimensionnée selon vos besoins.</h2><p>Le tarif est établi après la démonstration, en fonction des modules, des utilisateurs, du volume d’activité et du travail de mise en place.</p></div>
          <ul><li><i>✓</i>Périmètre fonctionnel défini</li><li><i>✓</i>Nombre d’accès précisé</li><li><i>✓</i>Mise en place chiffrée</li><li><i>✓</i>Abonnement mensuel lisible</li></ul>
        </div>
        <div class="connectPlusPricingActions"><a class="btn primary" href="/contact?sujet=integrale-connect-plus">Demander une démonstration <b aria-hidden="true">→</b></a><a class="btn secondary" href="/nos-outils-metiers">Comparer nos deux outils</a></div>
      </div>
    </section>

    <section class="connectPlusFaqSection">
      <div class="connectPlusSectionHeading reveal"><span>Questions fréquentes</span><h2>Avant de planifier une démonstration.</h2></div>
      <div class="connectPlusFaq">
        ${faq.map(([question, answer], index) => `<details class="reveal"${index === 0 ? ' open' : ''}><summary><span>${String(index + 1).padStart(2, '0')}</span><b>${question}</b><i aria-hidden="true">+</i></summary><p>${answer}</p></details>`).join('')}
      </div>
    </section>

    <section class="connectPlusFinalSection">
      <div class="connectPlusFinalCard reveal">
        <div><span>Intégrale Connect+</span><h2>Voyez votre gestion stagiaires réunie dans un seul outil.</h2><p>Présentez-nous votre fonctionnement actuel. Nous vous montrerons les parcours les plus pertinents pour votre organisme.</p></div>
        <div><a class="btn primary" href="/contact?sujet=integrale-connect-plus">Planifier une démonstration <b aria-hidden="true">→</b></a><a class="connectPlusFinalContact" href="mailto:clement@integraleacademy.com?subject=D%C3%A9monstration%20Int%C3%A9grale%20Connect%2B">clement@integraleacademy.com</a></div>
      </div>
    </section>`;
}
