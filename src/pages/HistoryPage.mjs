import { company } from '../data/siteContent.mjs';

export const route = '/notre-histoire';
export const bodyClass = 'page-notre-histoire';
export const buttons = '<a class="btn primary" href="#history-start">Découvrir notre histoire</a><a class="btn secondary" href="/les-poles-du-groupe">Découvrir les pôles</a>';

const academyUrl = 'https://www.integraleacademy.com/';
const linkedinUrl = 'https://fr.linkedin.com/in/vaillantclement';

const terrainCards = [
  { no: '02', icon: '↗', title: 'Événementiel & forte affluence', text: 'Coordonner des équipes, des flux et des dispositifs complexes.' },
  { no: '03', icon: '◎', title: 'Communication', text: 'Structurer l’image, le message et la lisibilité des parcours.' },
  { no: '04', icon: 'A', title: 'Formation professionnelle', text: 'Transmettre des compétences utiles et directement exploitables.' },
  { no: '05', icon: '✓', title: 'Méthode & exécution', text: 'Transformer l’expérience en processus clairs, suivis et durables.' },
];

const evolutionCards = [
  ['01', 'Un écosystème structuré', 'Relier formation, accompagnement, certification et outils digitaux dans une logique cohérente.'],
  ['02', 'Des parcours plus lisibles', 'Clarifier les étapes, les informations et les décisions pour mieux accompagner chaque public.'],
  ['03', 'Une organisation pilotable', 'Transformer les besoins du terrain en processus, indicateurs et supports utilisables.'],
  ['04', 'Une croissance maîtrisée', 'Développer les projets avec méthode, exigence et une vision durable.'],
];

const journey = [
  ['2018', 'Fondation d’Intégrale Academy', 'Création d’un centre de formation fondé sur l’exigence, l’accompagnement et l’employabilité.'],
  ['2019 — 2021', 'Développement des formations réglementées', 'Structuration des parcours dans les métiers de la sécurité privée et de la sécurité incendie.'],
  ['2022 — 2024', 'Diversification et professionnalisation', 'Développement de l’alternance, des BTS, des processus internes et des outils de suivi.'],
  ['2025', 'Structuration d’Intégrale Group', 'Création d’une structure groupe pour porter une vision plus large : formation, conseil, certification et digitalisation.'],
  ['Aujourd’hui', 'Un écosystème en construction', 'Quatre pôles complémentaires se développent autour de l’accompagnement, de l’ingénierie, du digital et de la structuration des organismes.'],
  ['Demain', 'Une ambition nationale', 'Construire un acteur reconnu de la formation professionnelle, de l’accompagnement des organismes et de la digitalisation métier.'],
];

const values = [
  ['01', 'Terrain', 'Partir des réalités concrètes avant de concevoir une solution.'],
  ['02', 'Exigence', 'Maintenir un haut niveau de sérieux.'],
  ['03', 'Clarté', 'Rendre les parcours compréhensibles.'],
  ['04', 'Utilité', 'Répondre à de vrais besoins.'],
  ['05', 'Transmission', 'Faire grandir les compétences.'],
];

const eyebrow = text => `<p class="historyEyebrow"><span></span>${text}</p>`;

export function render() {
  return `<div class="historyPage">
    <section id="history-start" class="historyManifesto">
      <div class="historyWrap">
        <header class="historyHeading historyHeadingCenter">
          ${eyebrow('Notre histoire')}
          <h2>Avant d’être un groupe, Intégrale est d’abord <em>une aventure entrepreneuriale.</em></h2>
        </header>
        <div class="historyManifestoGrid">
          <article class="historyYearCard">
            <span>18</span>
            <small>Le commencement</small>
            <strong>Depuis 2018</strong>
          </article>
          <div class="historyManifestoCopy">
            <h3>Une idée simple : partir du réel pour construire des solutions utiles.</h3>
            <p>L’histoire d’Intégrale Group commence avec la création d’Intégrale Academy. Avant la structure groupe, il y a le terrain, la formation professionnelle, l’accompagnement et une conviction forte : les compétences changent durablement les parcours lorsqu’elles sont transmises avec exigence et méthode.</p>
            <p>Cette première expérience a progressivement révélé d’autres besoins : mieux structurer les organisations, sécuriser les parcours, créer des certifications et développer des outils digitaux réellement adaptés aux métiers.</p>
            <div class="historyPills"><span>Formation professionnelle</span><span>Employabilité</span><span>Accompagnement</span><span>Innovation métier</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="historyTerrain">
      <div class="historyWrap">
        <header class="historyHeading historyHeadingSplit">
          <div>${eyebrow('Le point de départ')}<h2>Tout commence <em>sur le terrain.</em></h2></div>
          <p>La méthode du groupe est née au contact d’environnements exigeants, où l’anticipation, la coordination et la responsabilité ne sont jamais théoriques.</p>
        </header>
        <div class="historyBento">
          <article class="historyBentoLead">
            <span class="historyBentoNumber">01</span>
            <i>✦</i>
            <div><h3>Sécurité privée</h3><p>Une connaissance directe des exigences opérationnelles, réglementaires et humaines du secteur. Le terrain reste le premier filtre de chaque décision.</p></div>
          </article>
          ${terrainCards.map(({ no, icon, title, text }) => `<article class="historyBentoCard"><span class="historyBentoNumber">${no}</span><i>${icon}</i><h3>${title}</h3><p>${text}</p></article>`).join('')}
        </div>
      </div>
    </section>

    <section class="historyFounder">
      <div class="historyWrap">
        <header class="historyHeading historyHeadingDark">
          ${eyebrow('Le fondateur')}
          <h2>Une vision portée par Clément Vaillant.</h2>
          <p>Un parcours qui associe culture opérationnelle, vision stratégique et volonté de construire des solutions concrètes.</p>
        </header>
        <article class="historyFounderCard">
          <div class="historyPortrait" aria-label="Clément Vaillant"><span></span><b>CV</b><small>Président fondateur · Intégrale Group</small></div>
          <div class="historyFounderCopy">
            <span class="historyRole">Président fondateur</span>
            <h3>Clément VAILLANT</h3>
            <p>Entrepreneur et dirigeant engagé dans la formation professionnelle et le développement des compétences, Clément VAILLANT a construit son parcours à partir du terrain, au croisement de la sécurité privée, de la gestion de dispositifs à forte affluence, de la communication et de la formation.</p>
            <p>De fonctions opérationnelles vers des rôles de coordination, de supervision puis de direction, il a piloté des équipes, des flux, des périmètres de sécurité et des projets complexes dans des environnements exigeants et réglementés.</p>
            <p>Titulaire d’un Master 2 en communication et stratégies d’image, il combine aujourd’hui vision stratégique, culture opérationnelle et approche pragmatique du management, du conseil et du développement digital.</p>
            <div class="historyFounderTags"><span>Entrepreneuriat</span><span>Formation</span><span>Stratégie</span><span>Développement digital</span></div>
            <a class="btn primary" href="${linkedinUrl}" target="_blank" rel="noopener noreferrer">Voir le profil LinkedIn</a>
          </div>
        </article>
      </div>
    </section>

    <section class="historyAcademy">
      <div class="historyWrap">
        <article class="historyAcademyPanel">
          <div class="historyAcademyYear"><strong>2018</strong><span>Naissance d’Intégrale Academy</span></div>
          <div class="historyAcademyCopy">
            ${eyebrow('Le socle du groupe')}
            <h2>Former avec exigence.<br>Accompagner avec proximité.</h2>
            <p>Intégrale Academy est née d’une volonté claire : proposer des formations professionnelles sérieuses, concrètes et réellement utiles. L’école s’est développée autour de la rigueur réglementaire, de l’accompagnement humain, de la proximité avec les entreprises et de l’employabilité.</p>
            <a class="btn primary" href="${academyUrl}" target="_blank" rel="noopener noreferrer">Découvrir Intégrale Academy</a>
          </div>
        </article>
      </div>
    </section>

    <section class="historyEvolution">
      <div class="historyWrap">
        <header class="historyHeading historyHeadingCenter">
          ${eyebrow('De l’école au groupe')}
          <h2>Une expérience devenue <em>un écosystème.</em></h2>
          <p>Derrière chaque parcours de formation se trouvent des enjeux d’organisation, de conformité, de financement, de pilotage et de digitalisation.</p>
        </header>
        <div class="historyEvolutionGrid">
          ${evolutionCards.map(([no, title, text]) => `<article><b>${no}</b><div><h3>${title}</h3><p>${text}</p></div></article>`).join('')}
        </div>
      </div>
    </section>

    <section class="historyJourney">
      <div class="historyWrap">
        <header class="historyHeading">
          ${eyebrow('Notre trajectoire')}
          <h2>Les étapes qui ont construit <em>Intégrale Group.</em></h2>
        </header>
        <div class="historyTimeline">
          ${journey.map(([date, title, text], index) => `<article${index === 4 ? ' class="current"' : ''}><time>${date}</time><span class="historyTimelineDot"></span><div><h3>${title}</h3><p>${text}</p></div></article>`).join('')}
        </div>
      </div>
    </section>

    <section class="historyValues">
      <div class="historyWrap">
        <header class="historyHeading historyHeadingCenter historyHeadingDark">
          ${eyebrow('Ce qui nous guide')}
          <h2>Des valeurs qui se voient dans l’exécution.</h2>
          <p>Pas de promesses abstraites : chaque valeur doit se traduire dans les décisions, les outils et l’accompagnement.</p>
        </header>
        <div class="historyValuesGrid">
          ${values.map(([no, title, text], index) => `<article${index === 0 ? ' class="featured"' : ''}><b>${no}</b><div><h3>${title}</h3><p>${text}</p></div></article>`).join('')}
        </div>
      </div>
    </section>

    <section class="historyClosing">
      <div class="historyWrap">
        <article class="historyClosingPanel">
          <div>${eyebrow('La suite s’écrit maintenant')}<h2>Construire l’avenir avec méthode.</h2><p>Intégrale Group avance avec une conviction forte : la formation, le conseil et le digital peuvent transformer durablement les parcours professionnels lorsqu’ils sont pensés à partir du terrain.</p></div>
          <div class="historyClosingActions"><a class="btn primary" href="/les-poles-du-groupe">Découvrir l’écosystème</a><a class="btn secondary" href="/contact">Nous contacter</a></div>
        </article>
        <div class="historyLegalStrip">
          <div><strong>${company.name}</strong><span>${company.legal} au capital de ${company.capital}</span><a href="/entreprise">Voir toutes les informations légales</a></div>
          <div><small>Création</small><strong>${company.created}</strong></div>
          <div><small>Siège social</small><strong>Puget-sur-Argens</strong></div>
          <div><small>SIREN</small><strong>${company.siren}</strong></div>
        </div>
      </div>
    </section>
  </div>`;
}
