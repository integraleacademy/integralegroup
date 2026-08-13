export const route = '/pole-conseil-accompagnement';
export const bodyClass = 'conseilPage';

export const buttons = `
  <div class="conseilHeroButtons">
    <a class="btn primary" href="/contact?sujet=conseil">Parler de mon projet <span aria-hidden="true">→</span></a>
    <a class="btn secondary" href="#methode">Découvrir notre méthode</a>
  </div>
  <div class="conseilHeroProof" aria-label="Champs d’intervention du pôle conseil">
    <span><i>01</i>Organisation</span>
    <span><i>02</i>Stratégie</span>
    <span><i>03</i>Déploiement</span>
  </div>`;

const icons = {
  organisation: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="24" y="7" width="16" height="13" rx="4"/><rect x="7" y="44" width="16" height="13" rx="4"/><rect x="41" y="44" width="16" height="13" rx="4"/><path d="M32 20v13M15 44V33h34v11"/></svg>',
  direction: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="24"/><path d="m39 24-4 11-11 5 5-12z"/><circle cx="32" cy="32" r="3"/></svg>',
  administration: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M17 7h23l9 9v41H17z"/><path d="M40 7v10h9M24 29h18M24 37h18M24 45h12"/></svg>',
  commercial: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M9 52 25 34l10 8 20-29"/><path d="M43 13h12v12"/><circle cx="9" cy="52" r="3"/><circle cx="25" cy="34" r="3"/></svg>',
  digital: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="7" y="10" width="50" height="39" rx="5"/><path d="M7 20h50M24 56h16M32 49v7"/><path d="M15 40V29M24 40v-6M33 40V25M42 40v-9M51 40V24"/></svg>',
  certification: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="27" r="19"/><path d="m24 44-4 13 12-6 12 6-4-13M24 27l5 5 11-12"/></svg>',
  process: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="7" y="9" width="15" height="15" rx="4"/><rect x="42" y="40" width="15" height="15" rx="4"/><rect x="7" y="40" width="15" height="15" rx="4"/><path d="M22 16h17l7 7v17M15 24v16M22 48h20"/></svg>',
  custom: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="8"/><circle cx="11" cy="18" r="5"/><circle cx="53" cy="18" r="5"/><circle cx="11" cy="48" r="5"/><circle cx="53" cy="48" r="5"/><path d="m16 21 10 7M48 21l-10 7M16 45l10-8M48 45l-10-8"/></svg>',
};

const services = [
  {
    theme: 'organismes featured', number: '01', icon: icons.organisation,
    eyebrow: 'Organismes de formation', title: 'Clarifier, sécuriser et professionnaliser l’organisation.',
    text: 'Audit de l’organisation, clarification de l’offre, lecture des contraintes qualité et priorisation des actions.',
    tags: ['Audit', 'Qualité', 'Priorités'],
  },
  {
    theme: 'dirigeants', number: '02', icon: icons.direction,
    eyebrow: 'Accompagnement des dirigeants', title: 'Retrouver un cap et piloter les chantiers clés.',
    text: 'Prise de recul stratégique, structuration des décisions, feuille de route et pilotage des actions prioritaires.',
    tags: ['Décision', 'Feuille de route'],
  },
  {
    theme: 'administration', number: '03', icon: icons.administration,
    eyebrow: 'Structuration administrative', title: 'Rendre les dossiers et responsabilités plus lisibles.',
    text: 'Modèles documentaires, circuits de validation, responsabilités internes et organisation des preuves.',
    tags: ['Dossiers', 'Preuves'],
  },
  {
    theme: 'commercial', number: '04', icon: icons.commercial,
    eyebrow: 'Stratégie commerciale', title: 'Transformer une offre claire en parcours commercial cohérent.',
    text: 'Positionnement, offres, argumentaires, parcours prospects, partenariats et amélioration de la conversion.',
    tags: ['Offres', 'Conversion'],
  },
  {
    theme: 'digital', number: '05', icon: icons.digital,
    eyebrow: 'Digitalisation', title: 'Choisir les outils qui servent vraiment l’activité.',
    text: 'CRM, tableaux de bord, automatisations, espaces de suivi, outils apprenants et centralisation des données.',
    tags: ['CRM', 'Automatisation'],
  },
  {
    theme: 'certification', number: '06', icon: icons.certification,
    eyebrow: 'Certification', title: 'Mettre en cohérence compétences, évaluation et preuves.',
    text: 'Référentiels, blocs de compétences, modalités d’évaluation, cohérence pédagogique et préparation des dossiers.',
    tags: ['Référentiels', 'Évaluation'],
  },
  {
    theme: 'process', number: '07', icon: icons.process,
    eyebrow: 'Process internes', title: 'Faire circuler l’information sans friction.',
    text: 'Formalisation des étapes, standardisation des pratiques, suivi qualité et réduction des points de blocage.',
    tags: ['Process', 'Suivi qualité'],
  },
  {
    theme: 'custom full', number: '08', icon: icons.custom,
    eyebrow: 'Accompagnement sur mesure', title: 'Une intervention adaptée à la maturité réelle du projet.',
    text: 'Création, reprise, croissance, repositionnement ou transformation : le cadre d’intervention s’ajuste au contexte, aux équipes et aux objectifs.',
    tags: ['Création', 'Croissance', 'Transformation'],
  },
];

const method = [
  ['01', 'Comprendre', 'Entretiens, analyse des documents et observation du fonctionnement réel.'],
  ['02', 'Prioriser', 'Identification des risques, irritants, opportunités et actions à fort impact.'],
  ['03', 'Structurer', 'Production de supports, process, outils et feuilles de route exploitables.'],
  ['04', 'Accompagner', 'Suivi de mise en œuvre, ajustements et transmission aux équipes.'],
];

const moments = [
  ['Création', 'Poser un cadre clair dès le départ.'],
  ['Reprise', 'Comprendre l’existant avant de décider.'],
  ['Croissance', 'Adapter l’organisation au nouveau rythme.'],
  ['Repositionnement', 'Clarifier l’offre, le cap et les priorités.'],
  ['Transformation', 'Faire évoluer les pratiques et les outils.'],
];

const serviceCard = service => `
  <article class="conseilServiceCard ${service.theme} reveal">
    <div class="conseilServiceTop"><span class="conseilServiceIcon">${service.icon}</span><i>${service.number}</i></div>
    <span class="conseilServiceEyebrow">${service.eyebrow}</span>
    <h3>${service.title}</h3>
    <p>${service.text}</p>
    <div class="conseilServiceTags">${service.tags.map(tag => `<b>${tag}</b>`).join('')}</div>
  </article>`;

export function render() {
  return `
    <section class="conseilIntroSection">
      <div class="conseilIntroGrid">
        <div class="conseilIntroCopy reveal">
          <span>Une expertise opérationnelle</span>
          <h2>Un regard extérieur. Des solutions applicables.</h2>
          <p>Nous intervenons auprès des organismes de formation, dirigeants et porteurs de projets qui veulent professionnaliser leur structure, améliorer leur organisation et développer des activités cohérentes avec les exigences du marché.</p>
          <blockquote>« Le conseil devient utile lorsqu’il se traduit dans les décisions, les outils et le quotidien des équipes. »</blockquote>
        </div>
        <div class="conseilMissionPanel reveal" aria-label="Principes d’intervention du pôle conseil">
          <strong>INTÉGRALE GROUP · PÔLE CONSEIL</strong>
          <span class="conseilMissionLetter" aria-hidden="true">C</span>
          <div class="conseilMissionCore"><i>03</i><b>Conseil &<br>accompagnement</b><small>Structurer pour mieux développer</small></div>
          <article class="conseilMissionContext"><small>Point de départ</small><b>Votre réalité</b><span>Équipe · outils · contraintes · objectifs</span></article>
          <article class="conseilMissionResult"><small>Point d’arrivée</small><b>Un cap exploitable</b><span>Priorités · supports · déploiement</span></article>
        </div>
      </div>
    </section>

    <section class="conseilServicesSection" id="expertises">
      <div class="conseilSectionHeading centered reveal">
        <span>Nos champs d’intervention</span>
        <h2>Huit leviers pour faire passer une organisation au niveau suivant.</h2>
        <p>Chaque mission assemble uniquement les expertises utiles au contexte : organisation, stratégie, administration, commercial, digital, certification ou process.</p>
      </div>
      <div class="conseilServicesGrid">${services.map(serviceCard).join('')}</div>
    </section>

    <section class="conseilTerrainSection">
      <div class="conseilTerrainInner">
        <div class="conseilTerrainCopy reveal">
          <span>Approche terrain</span>
          <h2>Ni théorie hors-sol, ni simple document standard.</h2>
          <p>Chaque mission part de l’existant : équipe, outils, contraintes, niveau de maturité, objectifs commerciaux et exigences réglementaires. L’objectif est de produire des solutions utilisables, pas des recommandations difficiles à appliquer.</p>
          <a class="btn primary" href="/contact?sujet=conseil">Échanger sur votre contexte <b aria-hidden="true">→</b></a>
        </div>
        <div class="conseilDeliverables" aria-label="Livrables et résultats de l’accompagnement">
          <article class="reveal"><i>01</i><b>Diagnostic organisationnel</b><span>Comprendre avant d’agir.</span></article>
          <article class="reveal"><i>02</i><b>Plan d’action priorisé</b><span>Savoir quoi traiter, et dans quel ordre.</span></article>
          <article class="reveal"><i>03</i><b>Supports prêts à l’emploi</b><span>Passer rapidement de l’idée à l’usage.</span></article>
          <article class="reveal"><i>04</i><b>Suivi de déploiement</b><span>Ajuster pendant la mise en œuvre.</span></article>
          <article class="reveal"><i>05</i><b>Transmission aux équipes</b><span>Rendre l’organisation autonome.</span></article>
          <article class="reveal"><i>06</i><b>Pilotage dirigeant</b><span>Garder le cap sur les priorités.</span></article>
        </div>
      </div>
    </section>

    <section class="conseilMethodSection" id="methode">
      <div class="conseilMethodGrid">
        <div class="conseilMethodLead reveal">
          <span>Notre méthode</span>
          <h2>Une intervention claire en quatre temps.</h2>
          <p>Le cadre avance du diagnostic vers l’action, avec des points de validation lisibles et des livrables directement exploitables.</p>
          <div class="conseilMethodSignal" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
        </div>
        <div class="conseilMethodSteps">
          ${method.map(([number, title, text]) => `<article class="reveal"><i>${number}</i><div><h3>${title}</h3><p>${text}</p></div><b aria-hidden="true">→</b></article>`).join('')}
        </div>
      </div>
    </section>

    <section class="conseilMomentsSection">
      <div class="conseilSectionHeading reveal">
        <span>Le bon moment</span>
        <h2>Intervenir à chaque étape de la vie d’un projet.</h2>
        <p>L’accompagnement s’adapte à la maturité de la structure et au changement qu’elle doit conduire.</p>
      </div>
      <div class="conseilMomentsGrid">
        ${moments.map(([title, text], index) => `<article class="reveal"><i>0${index + 1}</i><h3>${title}</h3><p>${text}</p></article>`).join('')}
      </div>
    </section>

    <section class="conseilGroupSection">
      <div class="conseilGroupInner">
        <div class="conseilGroupCopy reveal">
          <span>Son rôle dans le groupe</span>
          <h2>La méthode qui relie stratégie et exécution.</h2>
          <p>Le pôle conseil aide à clarifier les décisions, structurer l’organisation et piloter la transformation. Il travaille au contact des autres expertises sans confondre leurs rôles : l’Academy forme, Intégrale Expertises conçoit les certifications, le conseil structure et le digital outille.</p>
          <a class="btn secondary" href="/les-poles-du-groupe">Voir les quatre pôles <b aria-hidden="true">→</b></a>
        </div>
        <div class="conseilGroupMap reveal" aria-label="Rôle du conseil dans l’écosystème Intégrale Group">
          <div class="conseilGroupCore"><i>03</i><b>Conseil</b><small>Structurer</small></div>
          <article class="formation"><i>IA</i><b>Formation</b><small>Développer les compétences</small></article>
          <article class="expertises"><i>IE</i><b>Expertises</b><small>Concevoir les certifications</small></article>
          <article class="digital"><i>▣</i><b>Digital</b><small>Outiller les usages</small></article>
          <svg viewBox="0 0 600 470" aria-hidden="true"><path d="M300 235 165 105M300 235 435 105M300 235 300 390"/><circle cx="300" cy="235" r="105"/></svg>
        </div>
      </div>
    </section>

    <section class="conseilCtaSection">
      <div class="conseilCta reveal">
        <div>
          <span>Votre prochain cap</span>
          <h2>Vous voulez structurer votre organisme ou votre projet&nbsp;?</h2>
          <p>Expliquez-nous votre contexte. Nous vous aiderons à clarifier les priorités, le cadre d’intervention et les prochaines étapes.</p>
          <div><a class="btn primary" href="/contact?sujet=conseil">Parler de mon projet <b aria-hidden="true">→</b></a><a class="btn secondary" href="/les-poles-du-groupe">Découvrir le groupe</a></div>
        </div>
        <i class="conseilCtaMark" aria-hidden="true">03</i>
      </div>
    </section>`;
}
