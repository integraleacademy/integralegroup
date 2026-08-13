export const route = '/pole-formation';
export const bodyClass = 'academyPage';

const academyUrl = 'https://www.integraleacademy.com/';

export const buttons = `
  <div class="academyHeroButtons">
    <a class="btn primary" href="${academyUrl}" target="_blank" rel="noopener noreferrer">Visiter Intégrale Academy <span aria-hidden="true">↗</span></a>
    <a class="btn secondary" href="#formations">Découvrir les formations</a>
  </div>
  <div class="academyHeroProof" aria-label="Repères Intégrale Academy">
    <span><i>2018</i>Une expérience construite dans la durée</span>
    <span><i>Q</i>Qualiopi</span>
    <span><i>⌖</i>Puget-sur-Argens</span>
  </div>`;

const programIcons = {
  security: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 7 51 18v15c0 12-8 20-19 25C21 53 13 45 13 33V18z"/><path d="m23 32 6 6 13-15"/></svg>',
  fire: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M34 8c2 11-8 14-8 24 0 5 3 8 7 9-1-8 8-10 9-19 8 8 11 16 6 25-4 8-13 11-21 7-10-5-14-18-8-28 3-5 8-8 10-15 2 2 4 4 6 6z"/></svg>',
  direction: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M11 53h42M17 47V23h30v24M24 23v-8h16v8"/><path d="M25 34h14M32 27v14"/></svg>',
  vtc: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 40v-9l5-13h30l5 13v9"/><path d="M17 40h30M21 47h-6v-7M49 47h-6v-7"/><circle cx="21" cy="33" r="3"/><circle cx="43" cy="33" r="3"/></svg>',
  alternance: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M11 17h42v30H11zM18 24h18M18 31h27M18 38h20"/><path d="M43 10v14M36 17h14"/></svg>',
  firstAid: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 55S11 43 11 25c0-9 11-15 21-5 10-10 21-4 21 5 0 18-21 30-21 30z"/><path d="M23 33h18M32 24v18"/></svg>',
};

const programs = [
  {
    theme: 'security featured', eyebrow: 'Métiers réglementés', icon: programIcons.security,
    title: 'Sécurité privée', text: 'Des parcours construits pour acquérir les compétences, la posture et les réflexes attendus sur le terrain.',
    tags: ['APS', 'A3P'],
  },
  {
    theme: 'fire wide', eyebrow: 'Prévention & intervention', icon: programIcons.fire,
    title: 'Sécurité incendie', text: 'Former à la prévention des risques, à la sécurité des établissements et aux premières interventions.',
    tags: ['SSIAP 1'],
  },
  {
    theme: 'direction', eyebrow: 'Encadrement', icon: programIcons.direction,
    title: 'Direction & VAE', text: 'Développer ou faire reconnaître les compétences nécessaires à la direction d’une activité de sécurité privée.',
    tags: ['DESP', 'VAE'],
  },
  {
    theme: 'vtc', eyebrow: 'Transport de personnes', icon: programIcons.vtc,
    title: 'Chauffeur VTC', text: 'Préparer un projet professionnel dans le transport de personnes avec une approche concrète du métier.',
    tags: ['VTC'],
  },
  {
    theme: 'alternance wide', eyebrow: 'Diplômes & entreprise', icon: programIcons.alternance,
    title: 'BTS en alternance', text: 'Associer apprentissages académiques, expérience en entreprise et accompagnement vers l’emploi.',
    tags: ['BTS', 'Alternance'],
  },
  {
    theme: 'firstAid', eyebrow: 'Prévention', icon: programIcons.firstAid,
    title: 'Secourisme', text: 'Acquérir les bons gestes pour prévenir les risques et intervenir face à une situation d’urgence.',
    tags: ['SST'],
  },
];

const publics = [
  ['Stagiaires', 'Acquérir une compétence professionnelle et préparer une insertion rapide dans un métier concret.', '01'],
  ['Apprentis', 'Développer savoir-faire, posture et employabilité grâce à un accompagnement inscrit dans la durée.', '02'],
  ['Professionnels', 'Actualiser les compétences, répondre aux obligations et accompagner les évolutions de carrière.', '03'],
  ['Entreprises', 'Recruter, professionnaliser les équipes et sécuriser les compétences utiles à l’activité.', '04'],
];

const programCard = program => `
  <article class="academyProgramCard ${program.theme} reveal">
    <div class="academyProgramIcon">${program.icon}</div>
    <span>${program.eyebrow}</span>
    <h3>${program.title}</h3>
    <p>${program.text}</p>
    <div>${program.tags.map(tag => `<i>${tag}</i>`).join('')}</div>
  </article>`;

export function render() {
  return `
    <section class="academyIntroSection">
      <div class="academyIntroGrid">
        <div class="academyIntroCopy reveal">
          <span>Le socle historique du groupe</span>
          <h2>Une école née du terrain, développée autour de l’emploi.</h2>
          <p>Fondée en 2018, Intégrale Academy accompagne les stagiaires, apprentis et professionnels dans des parcours exigeants, concrets et professionnalisants. L’école relie les exigences réglementaires, la pratique métier et l’accompagnement humain.</p>
          <blockquote>« Faites le premier pas vers votre futur métier. »</blockquote>
        </div>
        <div class="academyIdentityPanel reveal" aria-label="Identité d’Intégrale Academy">
          <strong>INTÉGRALE ACADEMY · PUGET-SUR-ARGENS</strong>
          <span class="academyIdentityLetter" aria-hidden="true">A</span>
          <div class="academyIdentityLogo"><i>IA</i><b>Intégrale Academy</b><small>Pôle formation d’Intégrale Group</small></div>
          <article class="academyIdentitySince"><small>Depuis</small><b>2018</b><span>Une expérience construite dans la durée.</span></article>
          <article class="academyIdentityModes"><small>Trois voies</small><div><i>Formation continue</i><i>Alternance</i><i>VAE</i></div></article>
        </div>
      </div>
    </section>

    <section class="academyProgramsSection" id="formations">
      <div class="academySectionHeading centered reveal">
        <span>Nos univers de formation</span>
        <h2>Des parcours conçus pour des métiers réels.</h2>
        <p>Chaque univers répond à un projet professionnel précis, avec une pédagogie qui relie savoirs, pratique et exigences du terrain.</p>
      </div>
      <div class="academyProgramsGrid">${programs.map(programCard).join('')}</div>
      <div class="academyProgramsFooter reveal">
        <div><i>↗</i><p><strong>Dates, prérequis, financements et inscriptions</strong><span>Retrouvez toutes les informations pratiques sur le site dédié d’Intégrale Academy.</span></p></div>
        <a class="btn primary" href="${academyUrl}" target="_blank" rel="noopener noreferrer">Voir toutes les formations <b aria-hidden="true">↗</b></a>
      </div>
    </section>

    <section class="academyQualitySection">
      <div class="academyQualityInner">
        <div class="academyQualityCopy reveal">
          <span>Exigence & qualité</span>
          <h2>Former sérieusement, accompagner réellement.</h2>
          <p>La qualité d’un parcours ne repose pas uniquement sur son programme. Elle tient aussi à l’organisation, aux formateurs, aux moyens pédagogiques, au suivi et à la capacité de faire évoluer les pratiques.</p>
          <div class="academyQualiopi"><i>Q</i><p><b>Qualiopi</b><span>Une organisation structurée autour de la qualité et de l’amélioration continue.</span></p></div>
        </div>
        <div class="academyQualityGrid">
          <article class="reveal"><i>01</i><h3>Culture terrain</h3><p>Des contenus reliés aux situations, aux contraintes et aux attentes des métiers.</p></article>
          <article class="reveal"><i>02</i><h3>Théorie & pratique</h3><p>Des apports structurés, des exercices et des mises en situation pour apprendre en faisant.</p></article>
          <article class="reveal"><i>03</i><h3>Suivi des parcours</h3><p>Un accompagnement pédagogique et administratif de l’entrée en formation jusqu’à la suite du projet.</p></article>
          <article class="reveal"><i>04</i><h3>Amélioration continue</h3><p>Des retours analysés, des procédures suivies et des ajustements réguliers.</p></article>
        </div>
      </div>
    </section>

    <section class="academyPublicsSection">
      <div class="academySectionHeading reveal">
        <span>Publics accompagnés</span>
        <h2>À chaque parcours, un objectif professionnel.</h2>
        <p>Intégrale Academy adapte son accompagnement aux situations, aux rythmes et aux projets de celles et ceux qui lui font confiance.</p>
      </div>
      <div class="academyPublicsGrid">
        ${publics.map(([title, text, number]) => `<article class="reveal"><i>${number}</i><h3>${title}</h3><p>${text}</p></article>`).join('')}
      </div>
    </section>

    <section class="academyPeopleSection">
      <div class="academyPeopleGrid">
        <article class="academyPeopleLead reveal">
          <span>Une expertise collective</span>
          <h2>Une équipe mobilisée autour d’un même niveau d’exigence.</h2>
          <p>Formateurs, coordination pédagogique, accompagnement administratif et relations entreprises travaillent ensemble pour rendre les parcours lisibles, fluides et utiles.</p>
          <a class="btn primary" href="${academyUrl}" target="_blank" rel="noopener noreferrer">Découvrir l’école <b aria-hidden="true">↗</b></a>
        </article>
        <div class="academyPeopleRoles">
          <article class="reveal"><i>FT</i><div><h3>Formateurs terrain</h3><p>Transmettre des compétences directement mobilisables.</p></div></article>
          <article class="reveal"><i>CP</i><div><h3>Coordination pédagogique</h3><p>Organiser les parcours, les évaluations et la progression.</p></div></article>
          <article class="reveal"><i>SA</i><div><h3>Suivi administratif</h3><p>Accompagner les dossiers, les financements et les étapes clés.</p></div></article>
          <article class="reveal"><i>RE</i><div><h3>Relations entreprises</h3><p>Relier formation, recrutement, alternance et emploi.</p></div></article>
        </div>
      </div>
    </section>

    <section class="academyGroupSection">
      <div class="academyGroupInner">
        <div class="academyGroupCopy reveal">
          <span>Son rôle dans le groupe</span>
          <h2>Le terrain qui nourrit tout l’écosystème.</h2>
          <p>Intégrale Academy maintient le groupe au contact des apprenants, des entreprises et des réalités métier. Cette expérience alimente la réflexion des autres pôles sans confondre leurs rôles : l’Academy forme, Intégrale Expertises conçoit les certifications, le conseil structure et le digital outille.</p>
          <a class="btn secondary" href="/les-poles-du-groupe">Voir les quatre pôles <b aria-hidden="true">→</b></a>
        </div>
        <div class="academyGroupMap reveal" aria-label="Liens entre Intégrale Academy et les autres pôles">
          <div class="academyGroupCore"><i>IA</i><b>Formation</b><small>Le terrain</small></div>
          <article class="expertises"><i>IE</i><b>Expertises</b><small>Concevoir les certifications</small></article>
          <article class="conseil"><i>↗</i><b>Conseil</b><small>Structurer les projets</small></article>
          <article class="digital"><i>▣</i><b>Digital</b><small>Outiller les usages</small></article>
          <svg viewBox="0 0 600 470" aria-hidden="true"><path d="M300 235 165 105M300 235 435 105M300 235 300 390"/><circle cx="300" cy="235" r="105"/></svg>
        </div>
      </div>
    </section>

    <section class="academyCtaSection">
      <div class="academyCta reveal">
        <div>
          <span>Votre prochain parcours</span>
          <h2>Prêt à faire le premier pas vers votre futur métier&nbsp;?</h2>
          <p>Découvrez les prochaines sessions, les modalités d’accès, les financements et les démarches d’inscription directement sur Intégrale Academy.</p>
          <div><a class="btn primary" href="${academyUrl}" target="_blank" rel="noopener noreferrer">Visiter Intégrale Academy <b aria-hidden="true">↗</b></a><a class="btn secondary" href="/contact">Contacter le groupe</a></div>
        </div>
        <i class="academyCtaMark" aria-hidden="true">IA</i>
      </div>
    </section>`;
}
