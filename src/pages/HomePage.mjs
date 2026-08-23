export const route = '/';
export const bodyClass = 'homePage';

export const buttons = `
  <div class="homeHeroButtons">
    <a class="btn primary" href="#home-poles">Découvrir les pôles <span aria-hidden="true">→</span></a>
    <a class="btn secondary" href="/notre-histoire">Notre histoire</a>
  </div>
  <div class="homeProof" aria-label="Repères Intégrale Group">
    <span><i class="goldDot"></i>Depuis 2018</span>
    <span><i class="greenDot"></i>4 pôles complémentaires</span>
    <span><i class="blueDot"></i>Approche terrain</span>
  </div>`;

const icons = {
  academy: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M14 25h36v27H14zM20 19h24M32 19V9"/><path d="M9 55h46"/></svg>',
  expertises: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 8 50 19v26L32 56 14 45V19z"/><path d="m22 33 7 7 14-18"/></svg>',
  conseil: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="m9 49 16-21 12 12 18-28"/><circle cx="9" cy="49" r="3"/><circle cx="55" cy="12" r="3"/></svg>',
  digital: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="9" y="12" width="46" height="33" rx="6"/><path d="M23 54h18M32 45v9"/></svg>',
};

const poles = [
  {
    theme: 'academy', eyebrow: '01 · Formation', icon: icons.academy, badge: 'IA',
    title: 'Intégrale Academy',
    text: 'Des formations réglementées et professionnalisantes, conçues pour l’emploi.',
    href: '/pole-formation', link: 'Découvrir le pôle',
  },
  {
    theme: 'expertises', eyebrow: '02 · Expertises', icon: icons.expertises, badge: 'IE',
    title: 'Intégrale Expertises',
    text: 'Ingénierie de certification, référentiels, évaluations et réseaux partenaires.',
    href: '/integrale-expertises', link: 'Découvrir le pôle',
  },
  {
    theme: 'conseil', eyebrow: '03 · Conseil', icon: icons.conseil, badge: '↗',
    title: 'Conseil & accompagnement',
    text: 'Stratégie, organisation, process et développement des organismes.',
    href: '/pole-conseil-accompagnement', link: 'Découvrir le pôle',
  },
  {
    theme: 'digital', eyebrow: '04 · Digital', icon: icons.digital, badge: '▣',
    title: 'Développement web & outils métiers',
    text: 'Sites, plateformes, CRM, automatisations et espaces de pilotage sur mesure.',
    href: '/pole-developpement-web', link: 'Découvrir le pôle',
  },
];

const method = [
  ['Comprendre', 'Écouter les objectifs, observer le terrain et identifier les vrais enjeux.'],
  ['Structurer', 'Donner une architecture claire au projet, aux parcours et aux responsabilités.'],
  ['Mettre en œuvre', 'Transformer les décisions en outils, actions et résultats directement exploitables.'],
  ['Faire évoluer', 'Mesurer, ajuster et améliorer dans la durée pour conserver une organisation performante.'],
];

const poleCard = (pole) => `
  <article class="homePoleCard ${pole.theme} reveal">
    <div class="homePoleVisual"><span>${pole.eyebrow}</span>${pole.icon}</div>
    <div class="homePoleBody">
      <i>${pole.badge}</i><h3>${pole.title}</h3><p>${pole.text}</p>
      <a href="${pole.href}">${pole.link}<b aria-hidden="true">→</b></a>
    </div>
  </article>`;

export function render() {
  return `
    <section class="homePolesSection" id="home-poles">
      <div class="homeSectionHeading centered reveal">
        <span>Les pôles du groupe</span>
        <h2>Quatre expertises. Une même exigence.</h2>
        <p>Des métiers différents, reliés par une même culture du concret, de la qualité et du résultat.</p>
      </div>
      <div class="homePoleGrid">${poles.map(poleCard).join('')}</div>
    </section>

    <section class="homeBentoSection">
      <div class="homeSectionHeading reveal">
        <span>L’esprit Intégrale</span>
        <h2>Un groupe qui relie stratégie et terrain.</h2>
        <p>Pas de solutions théoriques déconnectées : chaque projet est pensé pour être réellement utilisé.</p>
      </div>
      <div class="homeBentoGrid">
        <article class="homeBentoMain reveal">
          <span>Notre différence</span>
          <h3>De l’idée à l’exécution, sans perdre le terrain.</h3>
          <p>Comprendre les contraintes réelles, bâtir une organisation solide, déployer les bons outils et accompagner la durée.</p>
          <div class="homeRings" aria-label="Une méthode centrée sur un seul cap">
            <i>IG<small>Un seul cap</small></i>
            <b class="ringOne">Comprendre</b><b class="ringTwo">Structurer</b>
            <b class="ringThree">Déployer</b><b class="ringFour">Améliorer</b>
          </div>
        </article>
        <article class="homeBentoTraining reveal">
          <div>
            <span>Formation & emploi</span>
            <h3>Des parcours conçus pour des métiers réels.</h3>
            <p>Sécurité, incendie, VTC et alternance : des compétences directement mobilisables.</p>
            <div class="homeCourseTags"><i>APS</i><i>A3P</i><i>SSIAP 1</i><i>VTC</i><i>BTS</i></div>
          </div>
          <div class="homeTrainingIcon">${icons.academy}</div>
        </article>
        <a class="homeBentoSmall certification reveal" href="/integrale-expertises">
          <i>✓</i><h3>Certifier</h3><p>Des référentiels lisibles, des évaluations robustes et des partenariats maîtrisés.</p><b>Intégrale Expertises <span>→</span></b>
        </a>
        <a class="homeBentoSmall digital reveal" href="/pole-developpement-web">
          <i>▣</i><h3>Digitaliser</h3><p>Des outils simples pour mieux gérer, suivre, automatiser et décider.</p><b>Solutions digitales <span>→</span></b>
        </a>
      </div>
    </section>

    <section class="homeAcademySection">
      <div class="homeAcademyInner">
        <div class="homeAcademyCopy reveal">
          <span>Le socle historique</span>
          <h2>Intégrale Academy, l’expérience qui a tout lancé.</h2>
          <p>Créée en 2018, l’Academy accompagne les stagiaires, apprentis et professionnels dans des parcours exigeants, concrets et orientés vers l’emploi.</p>
          <a class="btn primary" href="https://www.integraleacademy.com/" target="_blank" rel="noopener noreferrer">Découvrir l’Academy <b aria-hidden="true">→</b></a>
          <div class="homeAcademyTags"><i>Sécurité</i><i>SSIAP</i><i>VTC</i><i>Alternance</i></div>
        </div>
        <div class="homeAcademyVisual reveal" aria-label="Univers de formation d’Intégrale Academy">
          <strong>INTÉGRALE ACADEMY · PUGET-SUR-ARGENS</strong>
          <span class="academyLetter" aria-hidden="true">A</span>
          <article class="academyPromise"><small>Parcours métiers</small><b>Former pour agir.</b><p>Des compétences directement mobilisables en situation.</p></article>
          <article class="academySince"><small>Depuis</small><b>2018</b><p>Une expertise construite dans la durée.</p></article>
          <article class="academyUniverse"><small>Nos univers</small><div><i>APS</i><i>A3P</i><i>SSIAP 1</i><i>VTC</i><i>BTS</i><i>Alternance</i></div></article>
        </div>
      </div>
    </section>

    <section class="homeStorySection">
      <div class="homeStoryGrid">
        <div class="homeStoryCopy reveal">
          <span>Notre histoire</span>
          <h2>Une histoire entrepreneuriale, pas un assemblage de marques.</h2>
          <p>Le groupe s’est construit progressivement autour d’une expérience opérationnelle directe.</p>
          <div class="homeStoryTimeline">
            <article><b>2018</b><strong>Création d’Intégrale Academy</strong><p>La formation professionnelle devient le premier socle de développement.</p></article>
            <article><b>2025</b><strong>Structuration d’Intégrale Group</strong><p>Les expertises complémentaires se réunissent autour d’une vision commune.</p></article>
            <article><b>Aujourd’hui</b><strong>Quatre pôles au service d’un même cap</strong><p>Former, structurer, certifier et digitaliser les projets professionnels.</p></article>
          </div>
          <a class="btn storyButton" href="/notre-histoire">Découvrir l’histoire <b aria-hidden="true">→</b></a>
        </div>
        <article class="homeFounderCard reveal">
          <span>Le fondateur</span>
          <div class="homeFounderAvatar">CV</div>
          <h3>Clément Vaillant</h3>
          <strong>Fondateur & dirigeant d’Intégrale Group</strong>
          <hr>
          <p>Un parcours à la croisée de la sécurité privée, de l’événementiel, de la communication et de la formation.</p>
          <p>Une conviction : les meilleurs projets naissent d’une compréhension directe du terrain.</p>
          <div><i>Expérience</i><i>Terrain</i><i>Master 2 communication</i></div>
        </article>
      </div>
    </section>

    <section class="homeMethodSection">
      <div class="homeSectionHeading centered reveal">
        <span>Notre méthode</span>
        <h2>Faire simple, concret et durable.</h2>
        <p>Une méthode commune aux quatre pôles pour passer rapidement de l’objectif à l’action.</p>
      </div>
      <div class="homeMethodGrid">
        ${method.map(([title, text], index) => `<article class="reveal${index === 3 ? ' featured' : ''}"><i>0${index + 1}</i><h3>${title}</h3><p>${text}</p></article>`).join('')}
      </div>
    </section>

    <section class="homeCtaSection">
      <div class="homeCta reveal">
        <div>
          <span>Parlons de votre projet</span>
          <h2>Vous avez une ambition à structurer ?</h2>
          <p>Formation, certification, conseil ou digitalisation : identifions ensemble le bon point de départ.</p>
          <div><a class="btn primary" href="/contact">Contacter le groupe <b aria-hidden="true">→</b></a><a class="btn secondary" href="/les-poles-du-groupe">Voir nos pôles</a></div>
        </div>
        <i class="homeCtaMark" aria-hidden="true">IG</i>
      </div>
    </section>`;
}
