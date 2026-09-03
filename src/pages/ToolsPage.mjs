export const route = '/nos-outils-metiers';
export const bodyClass = 'toolsPage';

export const buttons = `
  <div class="toolsHeroButtons">
    <a class="btn primary" href="#solutions-metiers">Découvrir les solutions <span aria-hidden="true">→</span></a>
    <a class="btn secondary" href="/contact?sujet=outils-metiers">Demander une démonstration</a>
  </div>
  <div class="toolsHeroProof" aria-label="Repères de l’offre Intégrale Connect">
    <span><i></i>Conçus sur le terrain</span>
    <span><i></i>Disponibles sur abonnement</span>
    <span><i></i>Évolutions continues</span>
  </div>`;

const check = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>';

const reasons = [
  ['01', 'Pensés par un organisme de formation', 'Les écrans et les automatisations partent de situations réellement rencontrées : dossiers incomplets, échéances réglementaires, relances, financements et coordination des équipes.'],
  ['02', 'Une information centralisée', 'Chaque équipe travaille depuis la même donnée. Les doubles saisies diminuent, les statuts restent lisibles et les actions à mener sont immédiatement identifiables.'],
  ['03', 'Des outils qui continuent d’évoluer', 'Les solutions sont enrichies à partir des usages et des besoins métier. La proposition commerciale précise le périmètre, les accès et le niveau d’accompagnement retenu.'],
];

const comparisonRows = [
  ['Objectif principal', 'Convertir les demandes en inscriptions', 'Administrer les stagiaires et les sessions'],
  ['Utilisateurs concernés', 'Commerciaux, admissions et direction', 'Administration, pédagogie, conformité et direction'],
  ['Moment du parcours', 'Du premier contact à la décision d’inscription', 'De l’inscription à la clôture de la formation'],
  ['Vues essentielles', 'Pipeline, fiches contacts, agenda, relances et conversions', 'Sessions, dossiers, documents, financements et examens'],
  ['Automatisations', 'Attribution, relances, messages et prochaines actions', 'Documents, alertes, démarches métier et suivi des exceptions'],
  ['À choisir si…', 'Des prospects se perdent ou restent trop longtemps sans réponse', 'La gestion repose encore sur plusieurs fichiers et outils séparés'],
];

const deploymentSteps = [
  ['01', 'Découverte', 'Nous regardons vos outils, votre organisation et les points qui vous font perdre du temps.'],
  ['02', 'Démonstration', 'Nous ouvrons les écrans correspondant à vos parcours réels et à vos priorités.'],
  ['03', 'Périmètre', 'Modules, accès, données à reprendre et automatisations sont définis clairement.'],
  ['04', 'Mise en place', 'Configuration, accompagnement et calendrier sont cadrés dans la proposition.'],
];

const faq = [
  ['Faut-il prendre les deux solutions ?', 'Non. Connect CRM et Connect+ peuvent répondre à des besoins distincts. Vous pouvez commencer par la solution la plus urgente pour votre organisation et faire évoluer le périmètre ensuite.'],
  ['Quelle est la différence avec un logiciel généraliste ?', 'Les écrans, statuts et automatisations sont construits autour des situations d’un organisme de formation : financement, parcours d’inscription, documents, sessions, CNAPS, CPF, WEDOF, examens et suivi commercial.'],
  ['Peut-on reprendre les données de nos outils actuels ?', 'La faisabilité est étudiée à partir de vos fichiers et exports. Les volumes, les champs disponibles et la qualité des données déterminent la reprise possible et le travail nécessaire.'],
  ['Comment connaître le tarif ?', 'L’abonnement dépend de la solution, des modules, du nombre d’utilisateurs, du volume d’activité et de l’accompagnement au démarrage. Une proposition détaillée est remise après la démonstration.'],
];

export function render() {
  return `
    <section class="toolsIntroSection">
      <div class="toolsSectionHeading centered reveal">
        <span>La suite Intégrale Connect</span>
        <h2>Des logiciels métier, pas des outils généralistes à adapter.</h2>
        <p>Nos solutions sont nées des besoins quotidiens d’Intégrale Academy. Elles transforment des processus complexes en parcours simples, lisibles et automatisés pour les organismes de formation.</p>
      </div>
      <div class="toolsContextStrip reveal">
        <article><b>01</b><span>Moins de fichiers dispersés</span></article>
        <article><b>02</b><span>Moins de doubles saisies</span></article>
        <article><b>03</b><span>Plus de traçabilité</span></article>
        <article><b>04</b><span>Une vision partagée</span></article>
      </div>
    </section>

    <section class="toolsFlowSection">
      <div class="toolsSectionHeading centered reveal">
        <span>Un parcours couvert de bout en bout</span>
        <h2>Deux logiciels pour deux moments décisifs de votre activité.</h2>
        <p>Le CRM structure la relation avant l’inscription. Connect+ prend le relais pour administrer le parcours du stagiaire. Chaque solution peut être choisie seule ou dans une démarche globale.</p>
      </div>
      <div class="toolsFlowBoard reveal" aria-label="Parcours couvert par Intégrale Connect CRM et Intégrale Connect+">
        <article class="toolsFlowProduct crm">
          <header><i>IC</i><span><small>AVANT L’INSCRIPTION</small><b>Intégrale Connect CRM</b></span></header>
          <div class="toolsFlowStages"><span>Demande</span><span>Qualification</span><span>Rendez-vous</span><span>Relance</span></div>
          <p>Transformer les demandes entrantes en parcours commercial clair et mesurable.</p>
          <a href="/integrale-connect-crm">Découvrir le CRM <b aria-hidden="true">→</b></a>
        </article>
        <div class="toolsFlowRelay" aria-hidden="true"><span></span><i>Inscription</i><span></span></div>
        <article class="toolsFlowProduct plus">
          <header><i>IC+</i><span><small>APRÈS L’INSCRIPTION</small><b>Intégrale Connect+</b></span></header>
          <div class="toolsFlowStages"><span>Dossier</span><span>Financement</span><span>Formation</span><span>Clôture</span></div>
          <p>Suivre les sessions, les documents, la conformité et les financements sans rupture.</p>
          <a href="/integrale-connect-plus">Découvrir Connect+ <b aria-hidden="true">→</b></a>
        </article>
      </div>
      <p class="toolsFlowNote reveal"><i></i>Les deux solutions sont complémentaires, mais leur périmètre est défini séparément selon vos besoins.</p>
    </section>

    <section class="toolsDemosSection" id="demonstrations">
      <div class="toolsDemosHeader reveal">
        <div><span>Les solutions en action</span><h2>Voyez les écrans avant de réserver une démonstration.</h2></div>
        <p>Deux parcours courts réalisés à partir de vues réelles et non nominatives. Lancez la lecture, puis ouvrez la page détaillée de la solution qui correspond à votre priorité.</p>
      </div>
      <div class="toolsDemoGrid">
        <article class="toolsDemoCard toolsDemoCrm reveal">
          <header><div><i>IC</i><span><small>RELATION CLIENT</small><b>Connect CRM</b></span></div><em>17 secondes</em></header>
          <div class="toolsDemoVideo"><video autoplay muted loop playsinline controls preload="metadata" poster="/images/connect-crm-dashboard.jpg" aria-label="Démonstration vidéo d’Intégrale Connect CRM"><source src="/videos/connect-crm-demo.mp4" type="video/mp4"></video><span><i></i>Pipeline · relances · conversions</span></div>
          <div class="toolsDemoFooter"><p>Pour centraliser les prospects, organiser les rendez-vous et suivre la conversion.</p><a class="btn primary" href="/integrale-connect-crm">Explorer le CRM <b aria-hidden="true">→</b></a></div>
        </article>
        <article class="toolsDemoCard toolsDemoPlus reveal">
          <header><div><i>IC+</i><span><small>GESTION DES STAGIAIRES</small><b>Connect+</b></span></div><em>17 secondes</em></header>
          <div class="toolsDemoVideo"><video autoplay muted loop playsinline controls preload="metadata" poster="/images/connect-plus-sessions.jpg" aria-label="Démonstration vidéo d’Intégrale Connect+"><source src="/videos/connect-plus-demo.mp4" type="video/mp4"></video><span><i></i>Sessions · conformité · automatisations</span></div>
          <div class="toolsDemoFooter"><p>Pour piloter l’administratif, les financements et les obligations métier.</p><a class="btn primary" href="/integrale-connect-plus">Explorer Connect+ <b aria-hidden="true">→</b></a></div>
        </article>
      </div>
    </section>

    <section class="toolsProductsSection" id="solutions-metiers">
      <div class="toolsProductsHeading reveal">
        <p><span></span>Deux solutions complémentaires</p>
        <h2>De la première prise de contact à la fin de formation.</h2>
      </div>

      <article class="toolsProductCard toolsProductPlus reveal">
        <div class="toolsProductCopy">
          <header>
            <i>IC+</i>
            <div><small>GESTION DES STAGIAIRES</small><h3>Intégrale Connect+</h3></div>
            <span>Solution SaaS</span>
          </header>
          <p class="toolsProductPromise">Pilotez les sessions, les dossiers, les documents, les financements et les obligations réglementaires depuis une seule interface.</p>
          <ul>
            <li>${check}<span>Sessions, stagiaires et dossiers administratifs</span></li>
            <li>${check}<span>Documents, signatures et suivi e-learning</span></li>
            <li>${check}<span>Financements, paiements, CPF et WEDOF</span></li>
            <li>${check}<span>CNAPS, examens, alertes et automatisations</span></li>
            <li>${check}<span>Tableaux de bord et priorités opérationnelles</span></li>
            <li>${check}<span>API, webhooks et connexions étudiées au cadrage</span></li>
          </ul>
          <div class="toolsProductActions">
            <a class="btn primary" href="/integrale-connect-plus">Découvrir Connect+ <b aria-hidden="true">→</b></a>
            <a class="toolsTextLink" href="/contact?sujet=integrale-connect-plus">Demander une démonstration</a>
          </div>
        </div>
        <div class="toolsProductPreview toolsPlusPreview">
          <div class="toolsBrowserBar"><span><i></i><i></i><i></i></span><b>Intégrale Connect+</b><small>Tableau de bord</small></div>
          <img src="/images/connect-plus-sessions.jpg" alt="Vue du tableau de bord des sessions Intégrale Connect+" width="1350" height="925" loading="lazy">
          <div class="toolsPreviewLabel"><i></i><span><b>231 stagiaires</b><small>Vue annuelle centralisée</small></span></div>
        </div>
      </article>

      <article class="toolsProductCard toolsProductCrm reveal">
        <div class="toolsProductCopy">
          <header>
            <i>IC</i>
            <div><small>CRM POUR ORGANISMES DE FORMATION</small><h3>Intégrale Connect CRM</h3></div>
            <span>Solution SaaS</span>
          </header>
          <p class="toolsProductPromise">Transformez chaque demande en parcours commercial clair, de l’arrivée du prospect jusqu’à son inscription en formation.</p>
          <ul>
            <li>${check}<span>Pipeline, fiches contacts et historique unifié</span></li>
            <li>${check}<span>Rendez-vous, appels, relances, e-mails et SMS</span></li>
            <li>${check}<span>Financement, faisabilité et suivi réglementaire</span></li>
            <li>${check}<span>Automatisations, scoring et tableaux de bord</span></li>
            <li>${check}<span>Sources de prospects et campagnes d’acquisition</span></li>
            <li>${check}<span>Modèles de messages et exports structurés</span></li>
          </ul>
          <div class="toolsProductActions">
            <a class="btn primary" href="/integrale-connect-crm">Découvrir Connect CRM <b aria-hidden="true">→</b></a>
            <a class="toolsTextLink" href="/contact?sujet=integrale-connect-crm">Demander une démonstration</a>
          </div>
        </div>
        <div class="toolsProductPreview toolsCrmPreview toolsCrmRealPreview" aria-label="Aperçu réel d’Intégrale Connect CRM">
          <div class="toolsBrowserBar"><span><i></i><i></i><i></i></span><b>Intégrale Connect CRM</b><small>Acquisition & conversion</small></div>
          <img src="/images/connect-crm-dashboard.jpg" alt="Tableau de bord réel des indicateurs d’acquisition dans Intégrale Connect CRM" width="1070" height="620" loading="lazy">
          <div class="toolsPreviewLabel"><i></i><span><b>Pipeline en temps réel</b><small>Relances et priorités visibles</small></span></div>
        </div>
      </article>
    </section>

    <section class="toolsComparisonSection" id="comparatif">
      <div class="toolsComparisonHeader reveal">
        <div><span>Comparer les solutions</span><h2>Quel outil répond à votre priorité actuelle ?</h2></div>
        <p>Le CRM intervient avant l’inscription. Connect+ intervient après. Ce comparatif permet d’identifier rapidement le bon point de départ.</p>
      </div>
      <div class="toolsComparisonTable reveal" role="table" aria-label="Comparaison entre Intégrale Connect CRM et Intégrale Connect+">
        <div class="toolsComparisonRow toolsComparisonTitles" role="row">
          <div role="columnheader">Votre besoin</div>
          <div role="columnheader"><i>IC</i><span><small>RELATION CLIENT</small><b>Connect CRM</b></span></div>
          <div role="columnheader"><i>IC+</i><span><small>GESTION STAGIAIRES</small><b>Connect+</b></span></div>
        </div>
        ${comparisonRows.map(([label, crm, plus]) => `<div class="toolsComparisonRow" role="row"><div role="rowheader">${label}</div><div role="cell">${crm}</div><div role="cell">${plus}</div></div>`).join('')}
        <div class="toolsComparisonActions"><span></span><a href="/integrale-connect-crm">Voir le CRM en détail <b aria-hidden="true">→</b></a><a href="/integrale-connect-plus">Voir Connect+ en détail <b aria-hidden="true">→</b></a></div>
      </div>
    </section>

    <section class="toolsChoiceSection">
      <div class="toolsSectionHeading centered reveal">
        <span>Trois façons de commencer</span>
        <h2>Choisissez le périmètre qui crée de la valeur maintenant.</h2>
        <p>Il n’est pas nécessaire de tout transformer d’un coup. La démonstration sert à identifier le besoin prioritaire et à construire un déploiement réaliste.</p>
      </div>
      <div class="toolsChoiceGrid">
        <article class="reveal"><i>01</i><span>PRIORITÉ COMMERCIALE</span><h3>Commencer par le CRM</h3><p>Vos demandes arrivent de plusieurs sources, les relances sont difficiles à suivre ou la direction manque de visibilité sur la conversion.</p><ul><li>Centraliser les prospects</li><li>Structurer les relances</li><li>Mesurer les sources et les résultats</li></ul><a href="/integrale-connect-crm">Découvrir Connect CRM <b aria-hidden="true">→</b></a></article>
        <article class="reveal"><i>02</i><span>PRIORITÉ ADMINISTRATIVE</span><h3>Commencer par Connect+</h3><p>Les dossiers stagiaires, documents, financements et obligations sont encore répartis entre plusieurs fichiers ou outils.</p><ul><li>Réunir le parcours stagiaire</li><li>Suivre les obligations métier</li><li>Automatiser les tâches répétitives</li></ul><a href="/integrale-connect-plus">Découvrir Connect+ <b aria-hidden="true">→</b></a></article>
        <article class="featured reveal"><i>03</i><span>TRANSFORMATION GLOBALE</span><h3>Étudier les deux solutions</h3><p>Vous souhaitez structurer à la fois l’acquisition, les inscriptions et l’administration des formations dans une démarche cohérente.</p><ul><li>Couvrir tout le cycle d’activité</li><li>Donner une vision partagée aux équipes</li><li>Déployer par étapes selon les priorités</li></ul><a href="/contact?sujet=outils-metiers">Construire mon périmètre <b aria-hidden="true">→</b></a></article>
      </div>
    </section>

    <section class="toolsReasonsSection">
      <div class="toolsReasonsInner">
        <div class="toolsSectionHeading toolsSectionHeadingDark reveal">
          <span>Pourquoi Intégrale Connect</span>
          <h2>Une technologie construite autour du métier.</h2>
          <p>La valeur ne vient pas d’une liste de fonctionnalités. Elle vient d’un outil qui suit réellement votre organisation et aide les équipes à agir au bon moment.</p>
        </div>
        <div class="toolsReasonsGrid">
          ${reasons.map(([number, title, text]) => `<article class="reveal"><i>${number}</i><h3>${title}</h3><p>${text}</p></article>`).join('')}
        </div>
      </div>
    </section>

    <section class="toolsDeploymentSection">
      <div class="toolsDeploymentHeader reveal"><div><span>De votre besoin à la mise en place</span><h2>Une démarche concrète, sans vous imposer un logiciel standard.</h2></div><p>Nous commençons par vos usages réels. Le périmètre commercial, la configuration et l’accompagnement sont ensuite détaillés avant tout engagement.</p></div>
      <div class="toolsDeploymentGrid">
        ${deploymentSteps.map(([number, title, text]) => `<article class="reveal"><i>${number}</i><h3>${title}</h3><p>${text}</p></article>`).join('')}
      </div>
      <div class="toolsDeploymentCta reveal"><div><b>Une démonstration centrée sur votre organisme</b><span>Prospects, sessions, financements, conformité, documents : nous ouvrons les parcours qui vous concernent réellement.</span></div><a class="btn primary" href="/contact?sujet=outils-metiers">Planifier une démonstration <b aria-hidden="true">→</b></a></div>
    </section>

    <section class="toolsFaqSection">
      <div class="toolsFaqInner">
        <div class="toolsFaqIntro reveal"><span>Questions fréquentes</span><h2>Ce qu’il faut savoir avant de choisir.</h2><p>La démonstration reste le moyen le plus simple de vérifier l’adéquation avec votre fonctionnement.</p></div>
        <div class="toolsFaq">
          ${faq.map(([question, answer], index) => `<details class="reveal"${index === 0 ? ' open' : ''}><summary><i>${String(index + 1).padStart(2, '0')}</i><b>${question}</b><span aria-hidden="true">+</span></summary><p>${answer}</p></details>`).join('')}
        </div>
      </div>
    </section>

    <section class="toolsSubscriptionSection">
      <div class="toolsSubscriptionCard reveal">
        <div>
          <span>Abonnement mensuel</span>
          <h2>Une formule adaptée à votre structure et à vos usages.</h2>
          <p>Le périmètre est défini après une démonstration : solution choisie, modules utiles, nombre d’utilisateurs, reprise éventuelle des données et accompagnement au démarrage.</p>
        </div>
        <div class="toolsSubscriptionActions">
          <a class="btn primary" href="/contact?sujet=outils-metiers">Planifier une démonstration <b aria-hidden="true">→</b></a>
          <a class="btn secondary" href="/integrale-connect-crm">Voir Connect CRM</a>
          <a class="toolsSubscriptionLink" href="/integrale-connect-plus">Voir Connect+ en détail <b aria-hidden="true">→</b></a>
        </div>
      </div>
    </section>

    <div class="productStickyCta toolsStickyCta" data-product-sticky aria-label="Actions rapides pour découvrir les outils métiers">
      <div><i>IC</i><span><b>La suite Intégrale Connect</b><small>CRM & gestion des stagiaires</small></span></div>
      <nav><a href="#comparatif">Comparer</a><a class="btn primary" href="/contact?sujet=outils-metiers">Demander une démo <b aria-hidden="true">→</b></a></nav>
    </div>`;
}
