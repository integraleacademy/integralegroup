export const route = '/integrale-expertises';
export const bodyClass = 'page-integrale-expertises';
export const buttons = '<a class="btn primary" href="#titres">Découvrir nos titres</a><a class="btn secondary" href="#devenir-partenaire">Devenir partenaire</a>';

const registrationTitles = [
  { acronym: 'ESP', name: 'Équipier de sécurité privée', level: '3', total: '196 h', onsite: '134 h', remote: '62 h' },
  { acronym: 'ESP-AD', name: 'Équipier de sécurité privée armé – catégorie D', level: '4', total: '252 h', onsite: '174 h', remote: '78 h' },
  { acronym: 'EPR', name: 'Équipier de protection rapprochée', level: '4', total: '364 h', onsite: '364 h', remote: '0 h' },
  { acronym: 'EIRC', name: 'Expert en investigation et renseignement sur les cybermenaces', level: '6', total: '700 h', onsite: '462 h', remote: '238 h' },
  { acronym: 'DSSP', name: 'Dirigeant d’une société de sécurité privée', level: '5', total: '270 h', onsite: '96 h', remote: '174 h' },
];

const writingTitles = [
  { acronym: 'OVP-SE', name: 'Opérateur de vidéoprotection et de surveillance électronique', level: '4', total: '225 h', onsite: '158 h', remote: '67 h' },
  { acronym: 'EPRA-BD', name: 'Équipier de protection rapprochée armé – catégories B et D', level: '4', total: '480 h 30', onsite: '351 h', remote: '129 h 30' },
  { acronym: 'ESPA-BD', name: 'Équipier de sécurité privée armé – catégories B et D', level: '4', total: '353 h', onsite: '271 h', remote: '82 h' },
  { acronym: 'ESP-E', name: 'Équipier de sécurité privée événementiel', level: '3', total: '147 h', onsite: '112 h', remote: '35 h' },
  { acronym: 'ARP', name: 'Agent de recherches privées', level: '5', total: '371 h', onsite: '266 h', remote: '105 h' },
];

const eyebrow = text => `<p class="expertisesEyebrow"><span></span>${text}</p>`;

const titleList = titles => `<div class="expertisesTitleList">${titles.map((title, index) => `<article class="expertisesTitleCard">
  <div class="expertisesTitleIdentity">
    <span>0${index + 1}</span>
    <div><h4>${title.name} <b>(${title.acronym})</b></h4><small>Niveau visé <strong>${title.level}</strong></small></div>
  </div>
  <dl class="expertisesTitleHours" aria-label="Durées de formation de ${title.name}">
    <div class="total"><dt>Total</dt><dd>${title.total}</dd></div>
    <div><dt>Présentiel</dt><dd>${title.onsite}</dd></div>
    <div><dt>Distanciel</dt><dd>${title.remote}</dd></div>
  </dl>
</article>`).join('')}</div>`;

export function render() {
  return `<div class="expertisesPage">
    <section class="expertisesIntro">
      <div class="expertisesWrap expertisesIntroGrid">
        <div class="expertisesStatement">
          ${eyebrow('Notre expérience')}
          <h2>Transformer une expertise métier en certification <em>lisible, exigeante et déployable.</em></h2>
          <p>Intégrale Expertises concentre l’expérience du groupe en ingénierie de certification professionnelle. Cette expertise s’est construite au contact de formations réglementées, de professionnels de terrain, de centres de formation et des exigences propres aux dispositifs certifiants.</p>
          <p>Nous travaillons chaque projet dans sa globalité : analyse du métier, formalisation des compétences, construction des référentiels, définition des évaluations, traçabilité des preuves et préparation des éléments nécessaires à l’instruction.</p>
        </div>
        <div class="expertisesNumbers" aria-label="Portefeuille de titres professionnels">
          <article class="featured"><strong>10</strong><span>projets de titres professionnels suivis</span></article>
          <article><strong>05</strong><span>en cours d’enregistrement</span></article>
          <article><strong>05</strong><span>en cours d’écriture</span></article>
        </div>
      </div>
    </section>

    <section class="expertisesExperience">
      <div class="expertisesWrap">
        <header class="expertisesHeading expertisesHeadingDark">
          ${eyebrow('Ingénierie de certification')}
          <h2>Une approche complète, de la réalité du métier jusqu’aux preuves.</h2>
          <p>Notre méthode relie les attentes du terrain, la cohérence pédagogique, la qualité des évaluations et la capacité des futurs partenaires à déployer un dispositif maîtrisé.</p>
        </header>
        <div class="expertisesExperienceGrid">
          <article><span>01</span><i>◎</i><h3>Analyse métier</h3><p>Observer les situations professionnelles, les responsabilités et les évolutions du secteur.</p></article>
          <article><span>02</span><i>≡</i><h3>Référentiels</h3><p>Structurer les activités, les compétences et les critères attendus de manière cohérente.</p></article>
          <article><span>03</span><i>✓</i><h3>Évaluation</h3><p>Concevoir des épreuves exigeantes, objectives, traçables et directement reliées aux compétences.</p></article>
          <article><span>04</span><i>◇</i><h3>Déploiement</h3><p>Préparer un cadre clair pour les centres, les formateurs, les jurys et le suivi qualité.</p></article>
        </div>
      </div>
    </section>

    <section class="expertisesPortfolio" id="titres">
      <div class="expertisesWrap">
        <header class="expertisesHeading expertisesHeadingCenter">
          ${eyebrow('Notre portefeuille')}
          <h2>Des titres à différents stades de développement.</h2>
          <p>Deux étapes sont volontairement distinguées pour présenter clairement l’avancement réel de chaque projet.</p>
        </header>
        <div class="expertisesPortfolioGrid">
          <article class="expertisesPortfolioCard registration">
            <div class="expertisesPortfolioHeader"><span class="expertisesStatus"><i></i>En cours d’enregistrement</span><strong>05 titres</strong></div>
            <h3>Dossiers en cours d’instruction auprès de France compétences</h3>
            <p>Les référentiels et dossiers ont atteint l’étape de l’enregistrement. Leur reconnaissance reste soumise à la décision de France compétences.</p>
            ${titleList(registrationTitles)}
          </article>
          <article class="expertisesPortfolioCard writing">
            <div class="expertisesPortfolioHeader"><span class="expertisesStatus"><i></i>En cours d’écriture</span><strong>05 titres</strong></div>
            <h3>Projets actuellement en phase de conception</h3>
            <p>Ces titres font l’objet d’un travail d’analyse métier, de structuration des compétences et de construction des modalités d’évaluation.</p>
            ${titleList(writingTitles)}
          </article>
        </div>
        <p class="expertisesDisclaimer"><b>Information importante.</b> La mention « en cours d’enregistrement » ne vaut pas enregistrement au RNCP. Les niveaux indiqués sont les niveaux visés dans les demandes et ne seront acquis qu’après une décision favorable de France compétences. Les durées sont exprimées hors évaluations certificatives.</p>
      </div>
    </section>

    <section class="expertisesMethod">
      <div class="expertisesWrap">
        <header class="expertisesHeading">
          ${eyebrow('Notre méthode')}
          <h2>Construire des certifications solides et réellement exploitables.</h2>
        </header>
        <div class="expertisesMethodGrid">
          <article><b>01</b><h3>Comprendre</h3><p>Étudier le métier, son cadre, ses évolutions et les besoins des employeurs.</p></article>
          <article><b>02</b><h3>Structurer</h3><p>Formaliser les activités, compétences, référentiels et parcours associés.</p></article>
          <article><b>03</b><h3>Évaluer</h3><p>Créer des modalités d’évaluation fiables, équitables et traçables.</p></article>
          <article><b>04</b><h3>Déployer</h3><p>Organiser l’habilitation, l’accompagnement et le contrôle du réseau partenaire.</p></article>
        </div>
      </div>
    </section>

    <section class="expertisesPartner" id="devenir-partenaire">
      <div class="expertisesWrap expertisesPartnerPanel">
        <div class="expertisesPartnerCopy">
          ${eyebrow('Centres de formation partenaires')}
          <h2>Vous souhaitez proposer nos certifications au sein de votre centre de formation ?</h2>
          <p>Intégrale Expertises prépare un réseau de centres partenaires sérieux, structurés et engagés dans la qualité. L’objectif est de permettre un déploiement homogène des futures certifications, dans le respect des référentiels, des conditions d’habilitation et des exigences de contrôle.</p>
          <div class="expertisesPartnerBenefits"><span>Cadre d’habilitation</span><span>Référentiels & évaluations</span><span>Accompagnement au déploiement</span><span>Suivi qualité & traçabilité</span></div>
        </div>
        <aside class="expertisesContactCard">
          <span>Votre interlocuteur</span>
          <div class="expertisesContactAvatar">CV</div>
          <h3>Clément VAILLANT</h3>
          <p>Direction & partenariats<br>Intégrale Expertises</p>
          <a class="btn primary" href="mailto:clement@integraleacademy.com?subject=Partenariat%20Int%C3%A9grale%20Expertises">clement@integraleacademy.com</a>
          <small>Présentez votre centre, vos formations actuelles et les titres qui vous intéressent.</small>
        </aside>
      </div>
    </section>
  </div>`;
}
