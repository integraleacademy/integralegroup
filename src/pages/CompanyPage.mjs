import { company } from '../data/siteContent.mjs';

export const route = '/entreprise';
export const bodyClass = 'companyPage';
export const buttons = '<a class="btn primary" href="#architecture">Découvrir le groupe</a><a class="btn secondary" href="#infos-legales">Informations légales</a>';

const heading = (eyebrow, title, text = '', dark = false, centered = false) => `
  <header class="companyHeading${dark ? ' companyHeadingDark' : ''}${centered ? ' companyHeadingCenter' : ''}">
    <p class="companyEyebrow"><span></span>${eyebrow}</p>
    <h2>${title}</h2>
    ${text ? `<p>${text}</p>` : ''}
  </header>`;

const poles = [
  ['01', 'Intégrale Academy', 'Formation', 'Former et développer les compétences.', '/pole-formation', 'IA'],
  ['02', 'Intégrale Expertises', 'Certification', 'Concevoir des certifications professionnelles.', '/integrale-expertises', 'IE'],
  ['03', 'Conseil & accompagnement', 'Structuration', 'Donner un cap clair aux organisations.', '/pole-conseil-accompagnement', 'CA'],
  ['04', 'Digital & outils métiers', 'Solutions', 'Transformer les processus en outils utiles.', '/pole-developpement-web', 'DG'],
];

const values = [
  ['01', 'Exigence', 'Maintenir un niveau élevé dans les décisions, les contenus, les dispositifs et leur exécution.'],
  ['02', 'Terrain', 'Partir des usages, des contraintes et des réalités opérationnelles avant de construire une réponse.'],
  ['03', 'Clarté', 'Rendre les projets lisibles, les responsabilités nettes et les solutions réellement appropriables.'],
  ['04', 'Évolution', 'Concevoir des actifs, des méthodes et des outils capables de progresser dans le temps.'],
];

const legal = [
  ['Dénomination', company.name, 'identity'],
  ['Forme juridique', company.legal, 'compact'],
  ['Capital social', company.capital, 'capital'],
  ['SIREN', company.siren, 'compact'],
  ['SIRET', company.siret, 'compact'],
  ['Date de création', company.created, 'compact'],
  ['Activité', company.activity, 'compact'],
  ['Code NAF / APE', company.naf, 'compact'],
  ['Siège social', company.address, 'address'],
];

export function render() {
  return `
    <section class="companyIntro" id="mission">
      <div class="companyWrap companyIntroGrid">
        <div class="companyIntroTitle reveal">
          <p class="companyEyebrow"><span></span>Notre raison d’être</p>
          <h2>Donner une structure commune à des expertises <em>nées du terrain.</em></h2>
        </div>
        <div class="companyIntroCopy reveal">
          <p>Intégrale Group est le prolongement d’une aventure entrepreneuriale commencée en 2018 avec Intégrale Academy. Le groupe a été structuré pour relier des métiers complémentaires sans diluer leur identité.</p>
          <p>Sa fonction est simple : fixer un cap, organiser les moyens, faire circuler les savoir-faire et transformer l’expérience opérationnelle en projets solides, lisibles et durables.</p>
          <div class="companyIntroFacts" aria-label="Repères du groupe">
            <article><strong>2018</strong><span>Le point de départ</span></article>
            <article><strong>2025</strong><span>La structuration du groupe</span></article>
            <article><strong>04</strong><span>Pôles complémentaires</span></article>
          </div>
        </div>
      </div>
    </section>

    <section class="companyPurpose">
      <div class="companyWrap">
        ${heading('Le rôle du groupe', 'Transformer une vision en capacité d’action.', 'Intégrale Group crée le cadre commun qui permet à chaque pôle de se concentrer sur son métier, tout en avançant dans une même direction.', false, true)}
        <div class="companyPurposeGrid">
          <article class="companyPurposeLead reveal">
            <span class="companyPurposeNumber">01</span>
            <i>✦</i>
            <div>
              <small>Le point de départ</small>
              <h3>Partir du réel.</h3>
              <p>Les projets naissent d’un besoin observé sur le terrain : une compétence à développer, une organisation à structurer, une certification à concevoir ou un processus à simplifier.</p>
            </div>
          </article>
          <article class="companyPurposeCard reveal"><span>02</span><i>↗</i><div><h3>Donner un cap commun</h3><p>Relier la vision, les priorités et les décisions autour d’objectifs compréhensibles.</p></div></article>
          <article class="companyPurposeCard reveal"><span>03</span><i>◎</i><div><h3>Faire circuler l’expertise</h3><p>Mettre les expériences, les méthodes et les ressources au service de chaque projet.</p></div></article>
          <article class="companyPurposeCard reveal"><span>04</span><i>◇</i><div><h3>Construire pour durer</h3><p>Créer des dispositifs, contenus et outils qui restent utiles au-delà de leur lancement.</p></div></article>
        </div>
      </div>
    </section>

    <section class="companyArchitecture" id="architecture">
      <div class="companyWrap">
        ${heading('Architecture du groupe', 'Une même exigence.<br><em>Quatre rôles distincts.</em>', 'Chaque pôle dispose d’une mission claire. Ensemble, ils permettent de passer du développement des compétences à la structuration, puis à la mise en œuvre.', true)}
        <div class="companyArchitecturePanel reveal">
          <div class="companyArchitectureTop">
            <article class="companyArchitectureCore">
              <i>IG</i>
              <div><small>Structure centrale</small><strong>Intégrale Group</strong><span>Pilotage · Coordination · Développement</span></div>
            </article>
            <div class="companyArchitectureMeta"><span>SAS</span><strong>${company.capital}</strong><small>de capital social</small></div>
          </div>
          <div class="companyArchitecturePath" aria-hidden="true"><span></span><i></i><i></i><i></i><i></i></div>
          <div class="companyArchitecturePoles">
            ${poles.map(([number, name, role, text, href, initials]) => `
              <a href="${href}">
                <span>${number}</span><i>${initials}</i><small>${role}</small><h3>${name}</h3><p>${text}</p><b>Découvrir <em>→</em></b>
              </a>`).join('')}
          </div>
          <p class="companyArchitectureNote">Des expertises autonomes dans leur exécution, coordonnées dans leur direction.</p>
        </div>
      </div>
    </section>

    <section class="companyGovernance">
      <div class="companyWrap companyGovernanceGrid">
        <div class="companyGovernanceCopy">
          ${heading('Gouvernance', 'Une direction directement impliquée.', 'La stratégie du groupe reste proche des opérations, des équipes et des projets. Cette proximité permet de décider vite, d’assumer un niveau d’exigence élevé et de garder une lecture concrète des besoins.')}
          <div class="companyGovernancePrinciple reveal"><i>“</i><p>Conserver la vision d’ensemble sans perdre le contact avec le terrain.</p></div>
        </div>
        <article class="companyFounderCard reveal">
          <div class="companyFounderMonogram"><span></span><b>CV</b><small>Président<br>& fondateur</small></div>
          <div class="companyFounderCopy">
            <p class="companyFounderRole">Pilotage stratégique</p>
            <h3>Clément Vaillant</h3>
            <p>Il assure le développement du groupe, l’articulation des pôles et le pilotage des projets liés à la formation professionnelle, à la certification, au conseil et à la digitalisation.</p>
            <div class="companyFounderTags"><span>Stratégie</span><span>Développement</span><span>Certification</span><span>Digitalisation</span></div>
          </div>
        </article>
      </div>
      <div class="companyWrap companyTeamRail reveal" aria-label="Expertises mobilisées">
        <p><small>Autour des projets</small><strong>Des compétences mobilisées collectivement.</strong></p>
        <div><span>Pédagogie & formation</span><span>Ingénierie & conformité</span><span>Relations entreprises</span><span>Produit & digital</span></div>
      </div>
    </section>

    <section class="companyValues">
      <div class="companyWrap">
        ${heading('Principes de travail', 'Quatre repères qui ne changent pas.', 'Ils orientent la manière de décider, de concevoir et d’accompagner les projets du groupe.', true)}
        <div class="companyValuesGrid">
          ${values.map(([number, title, text], index) => `<article class="${index === 0 ? 'featured ' : ''}reveal"><b>${number}</b><div><h3>${title}</h3><p>${text}</p></div></article>`).join('')}
        </div>
      </div>
    </section>

    <section class="companyTrajectory">
      <div class="companyWrap">
        ${heading('Trajectoire', 'Une structure récente.<br>Une expérience déjà installée.', 'La création juridique du groupe en 2025 formalise une dynamique engagée plusieurs années auparavant.')}
        <div class="companyTimeline">
          <article class="reveal"><time>2018</time><span></span><div><small>Le socle</small><h3>Création d’Intégrale Academy</h3><p>La formation professionnelle et l’expérience du terrain constituent le premier moteur de l’écosystème.</p></div></article>
          <article class="reveal"><time>2025</time><span></span><div><small>La structure</small><h3>Création d’Intégrale Group</h3><p>Une société groupe est constituée pour coordonner les expertises et porter une vision de développement commune.</p></div></article>
          <article class="current reveal"><time>Aujourd’hui</time><span></span><div><small>Le modèle</small><h3>Quatre pôles complémentaires</h3><p>Formation, certification, conseil et digital travaillent à partir d’une même culture opérationnelle.</p></div></article>
          <article class="reveal"><time>La suite</time><span></span><div><small>Le cap</small><h3>Consolider et faire évoluer</h3><p>Développer les actifs, les partenariats et les outils en conservant la cohérence du groupe.</p></div></article>
        </div>
      </div>
    </section>

    <section class="companyIdentity" id="infos-legales">
      <div class="companyWrap">
        <div class="companyIdentityTop">
          ${heading('Informations légales', 'La carte d’identité<br>du groupe.', 'Des informations claires, réunies au même endroit.')}
          <div class="companyIdentitySeal reveal"><span>IG</span><small>Société française<br>Puget-sur-Argens</small></div>
        </div>
        <div class="companyLegalGrid">
          ${legal.map(([label, value, cls]) => `<article class="companyLegalCard ${cls} reveal"><small>${label}</small><strong>${value}</strong>${cls === 'capital' ? '<span>Capital social</span>' : ''}</article>`).join('')}
        </div>
      </div>
    </section>

    <section class="companyClosing">
      <div class="companyWrap companyClosingPanel reveal">
        <div>
          <p class="companyEyebrow"><span></span>Échangeons</p>
          <h2>Un projet à structurer.<br>Un partenariat à construire.</h2>
          <p>Présentez-nous votre contexte, votre ambition et le rôle qu’Intégrale Group peut jouer à vos côtés.</p>
        </div>
        <div class="companyClosingActions"><a class="btn primary" href="/contact">Contacter le groupe</a><a class="btn secondary" href="/les-poles-du-groupe">Voir les quatre pôles</a></div>
      </div>
    </section>`;
}
