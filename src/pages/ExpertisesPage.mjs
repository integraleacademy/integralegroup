export const route = '/integrale-expertises';
export const bodyClass = 'page-integrale-expertises';
export const buttons = '<a class="btn primary" href="#titres">Découvrir nos titres</a><a class="btn secondary" href="#devenir-partenaire">Devenir partenaire</a>';

const registrationTitles = ['ESP', 'ESP-AD', 'EPR', 'EIRC', 'DSSP'];
const writingTitles = ['OVSE', 'EPRA-BD', 'ESPA-BD', 'ESP-E', 'ARP'];

const eyebrow = text => `<p class="expertisesEyebrow"><span></span>${text}</p>`;

const titleList = (titles, label) => `<div class="expertisesTitleList">${titles.map((title, index) => `<article><span>0${index + 1}</span><b>${title}</b><small>${label}</small></article>`).join('')}</div>`;

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
            ${titleList(registrationTitles, 'Enregistrement en cours')}
          </article>
          <article class="expertisesPortfolioCard writing">
            <div class="expertisesPortfolioHeader"><span class="expertisesStatus"><i></i>En cours d’écriture</span><strong>05 titres</strong></div>
            <h3>Projets actuellement en phase de conception</h3>
            <p>Ces titres font l’objet d’un travail d’analyse métier, de structuration des compétences et de construction des modalités d’évaluation.</p>
            ${titleList(writingTitles, 'Conception en cours')}
          </article>
        </div>
        <p class="expertisesDisclaimer"><b>Information importante.</b> La mention « en cours d’enregistrement » ne vaut pas enregistrement au RNCP. Les titres concernés ne pourront être présentés comme enregistrés qu’après une décision favorable de France compétences.</p>
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
