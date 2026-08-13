export const route = '/les-poles-du-groupe';
export const bodyClass = 'polesPage';

export const buttons = `
  <div class="polesHeroButtons">
    <a class="btn primary" href="#poles">Explorer les quatre pôles <span aria-hidden="true">→</span></a>
    <a class="btn secondary" href="#modele">Comprendre notre modèle</a>
  </div>
  <div class="polesHeroProof" aria-label="Les quatre expertises d’Intégrale Group">
    <span><i>01</i>Formation</span>
    <span><i>02</i>Expertises</span>
    <span><i>03</i>Conseil</span>
    <span><i>04</i>Digital</span>
  </div>`;

const icons = {
  academy: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M14 25h36v27H14zM20 19h24M32 19V9"/><path d="M9 55h46"/></svg>',
  expertises: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 8 50 19v26L32 56 14 45V19z"/><path d="m22 33 7 7 14-18"/></svg>',
  conseil: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="m9 49 16-21 12 12 18-28"/><circle cx="9" cy="49" r="3"/><circle cx="55" cy="12" r="3"/></svg>',
  digital: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="9" y="12" width="46" height="33" rx="6"/><path d="M23 54h18M32 45v9"/></svg>',
};

const poles = [
  {
    number: '01', theme: 'academy', label: 'Formation professionnelle', badge: 'IA', icon: icons.academy,
    title: 'Intégrale Academy',
    headline: 'Former aux métiers et préparer à l’emploi.',
    text: 'Le socle historique du groupe accompagne les stagiaires, apprentis et professionnels dans des parcours réglementés, professionnalisants et directement reliés aux réalités des métiers.',
    points: ['Sécurité privée & incendie', 'Transport VTC', 'Alternance & parcours métiers'],
    href: '/pole-formation', link: 'Découvrir le pôle formation',
  },
  {
    number: '02', theme: 'expertises', label: 'Ingénierie de certification', badge: 'IE', icon: icons.expertises,
    title: 'Intégrale Expertises',
    headline: 'Concevoir des certifications qui partent du métier.',
    text: 'Le pôle structure des titres professionnels, leurs référentiels, leurs modalités d’évaluation et leur futur déploiement auprès de centres de formation partenaires.',
    points: ['Référentiels de compétences', 'Évaluations & jurys', 'Réseaux de partenaires'],
    href: '/integrale-expertises', link: 'Découvrir Intégrale Expertises',
  },
  {
    number: '03', theme: 'conseil', label: 'Conseil & accompagnement', badge: '↗', icon: icons.conseil,
    title: 'Structurer pour mieux développer',
    headline: 'Passer d’une ambition à une organisation solide.',
    text: 'Le pôle conseil accompagne les dirigeants et organismes dans la clarification de leur stratégie, de leurs offres, de leurs process et de leurs priorités de développement.',
    points: ['Stratégie & organisation', 'Process & pilotage', 'Développement d’offres'],
    href: '/pole-conseil-accompagnement', link: 'Découvrir le pôle conseil',
  },
  {
    number: '04', theme: 'digital', label: 'Développement web', badge: '▣', icon: icons.digital,
    title: 'Outils digitaux & solutions métiers',
    headline: 'Transformer les process en outils simples.',
    text: 'Le pôle conçoit des sites, plateformes, CRM, automatisations et espaces de pilotage adaptés aux usages réels des entreprises et organismes de formation.',
    points: ['Sites & plateformes', 'CRM & automatisations', 'Outils de pilotage'],
    href: '/pole-developpement-web', link: 'Découvrir le pôle digital',
  },
];

const levers = [
  ['Outils digitaux internes', 'Développer des tableaux de bord, espaces de suivi, automatisations et supports réellement opérationnels.', '01'],
  ['Partenariats formation', 'Construire des relations utiles avec les entreprises, prescripteurs, organismes et acteurs métier.', '02'],
  ['Développement d’offres', 'Créer des parcours lisibles, cohérents et alignés avec les attentes du marché.', '03'],
  ['Amélioration continue', 'Mesurer les résultats, écouter les retours terrain et faire évoluer les pratiques.', '04'],
];

const poleCard = pole => `
  <article class="polesDetailCard ${pole.theme} reveal">
    <div class="polesCardVisual">
      <span>${pole.number} · ${pole.label}</span>
      <i>${pole.icon}</i>
      <b aria-hidden="true">${pole.number}</b>
    </div>
    <div class="polesCardBody">
      <div class="polesCardIdentity"><i>${pole.badge}</i><h3>${pole.title}</h3></div>
      <h4>${pole.headline}</h4>
      <p>${pole.text}</p>
      <ul>${pole.points.map(point => `<li>${point}</li>`).join('')}</ul>
      <a href="${pole.href}">${pole.link}<b aria-hidden="true">→</b></a>
    </div>
  </article>`;

export function render() {
  return `
    <section class="polesVisionSection" id="vision">
      <div class="polesVisionGrid">
        <div class="polesVisionCopy reveal">
          <span>Une architecture cohérente</span>
          <h2>Chaque pôle répond à un besoin précis.</h2>
          <p>Intégrale Group réunit des activités distinctes qui partagent la même culture du terrain, de la clarté et de l’exécution. Chaque expertise peut intervenir seule ou se connecter aux autres selon la réalité du projet.</p>
          <div class="polesVisionStatement">
            <i>IG</i>
            <p><strong>Un seul cap.</strong> Faire progresser les compétences, les organisations et les outils professionnels.</p>
          </div>
        </div>
        <div class="polesCompass reveal" aria-label="Architecture des quatre pôles Intégrale Group">
          <span class="compassTitle">L’écosystème en un regard</span>
          <div class="compassCore"><i>IG</i><b>Intégrale Group</b><small>Vision commune</small></div>
          <article class="academy"><i>01</i><b>Formation</b><small>Compétences & emploi</small></article>
          <article class="expertises"><i>02</i><b>Expertises</b><small>Certification</small></article>
          <article class="conseil"><i>03</i><b>Conseil</b><small>Organisation</small></article>
          <article class="digital"><i>04</i><b>Digital</b><small>Outils métiers</small></article>
          <svg viewBox="0 0 660 480" aria-hidden="true"><path d="M330 240 150 112M330 240 510 112M330 240 150 368M330 240 510 368"/><circle cx="330" cy="240" r="116"/></svg>
        </div>
      </div>
    </section>

    <section class="polesDetailSection" id="poles">
      <div class="polesSectionHeading centered reveal">
        <span>Les pôles du groupe</span>
        <h2>Quatre expertises.<br>Quatre portes d’entrée.</h2>
        <p>Identifiez le pôle qui correspond à votre besoin et découvrez son approche, ses métiers et ses solutions.</p>
      </div>
      <div class="polesDetailGrid">${poles.map(poleCard).join('')}</div>
    </section>

    <section class="polesSynergySection" id="modele">
      <div class="polesSynergyInner">
        <div class="polesSynergyCopy reveal">
          <span>La logique du groupe</span>
          <h2>Des expertises autonomes, une méthode partagée.</h2>
          <p>La force du groupe consiste à connecter les réalités terrain d’Intégrale Academy, l’ingénierie de certification, les méthodes de conseil et les outils digitaux. Cette approche limite les silos et donne davantage de cohérence aux projets.</p>
          <a class="btn primary" href="/notre-histoire">Découvrir notre histoire <b aria-hidden="true">→</b></a>
        </div>
        <div class="polesMethodGrid">
          <article class="reveal"><i>01</i><h3>Comprendre</h3><p>Observer le terrain, les objectifs et les contraintes réelles.</p></article>
          <article class="reveal"><i>02</i><h3>Structurer</h3><p>Clarifier l’offre, les parcours, les responsabilités et les process.</p></article>
          <article class="reveal"><i>03</i><h3>Déployer</h3><p>Transformer la stratégie en actions, compétences et outils utilisables.</p></article>
          <article class="reveal"><i>04</i><h3>Faire évoluer</h3><p>Mesurer, ajuster et consolider les résultats dans la durée.</p></article>
        </div>
      </div>
    </section>

    <section class="polesLeversSection">
      <div class="polesSectionHeading reveal">
        <span>Ce qui relie nos activités</span>
        <h2>Des leviers communs pour soutenir la croissance.</h2>
        <p>Au-delà de leurs métiers propres, les pôles partagent des chantiers qui renforcent la qualité, la lisibilité et l’efficacité des projets.</p>
      </div>
      <div class="polesLeversGrid">
        ${levers.map(([title, text, number]) => `<article class="reveal"><i>${number}</i><h3>${title}</h3><p>${text}</p></article>`).join('')}
      </div>
    </section>

    <section class="polesOrientationSection">
      <div class="polesOrientationGrid">
        <article class="polesOrientationLead reveal">
          <span>Votre point de départ</span>
          <h2>Quel besoin souhaitez-vous faire avancer&nbsp;?</h2>
          <p>Accédez directement au bon pôle. Si votre projet mobilise plusieurs expertises, Intégrale Group vous aide à construire un parcours cohérent.</p>
          <a class="btn primary" href="/contact">Échanger sur votre projet <b aria-hidden="true">→</b></a>
        </article>
        <div class="polesOrientationLinks">
          <a class="academy reveal" href="/pole-formation"><i>01</i><span><b>Former des professionnels</b><small>Intégrale Academy</small></span><em>→</em></a>
          <a class="expertises reveal" href="/integrale-expertises"><i>02</i><span><b>Concevoir ou proposer une certification</b><small>Intégrale Expertises</small></span><em>→</em></a>
          <a class="conseil reveal" href="/pole-conseil-accompagnement"><i>03</i><span><b>Structurer une organisation</b><small>Conseil & accompagnement</small></span><em>→</em></a>
          <a class="digital reveal" href="/pole-developpement-web"><i>04</i><span><b>Créer un site ou un outil métier</b><small>Développement web</small></span><em>→</em></a>
        </div>
      </div>
    </section>

    <section class="polesCtaSection">
      <div class="polesCta reveal">
        <div>
          <span>Construisons la suite</span>
          <h2>Un projet ne rentre pas toujours dans une seule case.</h2>
          <p>Présentez-nous votre ambition : nous vous orienterons vers le bon pôle ou vers la combinaison d’expertises la plus pertinente.</p>
          <div><a class="btn primary" href="/contact">Contacter Intégrale Group <b aria-hidden="true">→</b></a><a class="btn secondary" href="/notre-histoire">Découvrir le groupe</a></div>
        </div>
        <i class="polesCtaMark" aria-hidden="true">IG</i>
      </div>
    </section>`;
}
