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
          </ul>
          <div class="toolsProductActions">
            <a class="btn primary" href="/integrale-connect-crm">Découvrir Connect CRM <b aria-hidden="true">→</b></a>
            <a class="toolsTextLink" href="/contact?sujet=integrale-connect-crm">Demander une démonstration</a>
          </div>
        </div>
        <div class="toolsProductPreview toolsCrmPreview" aria-label="Aperçu fonctionnel d’Intégrale Connect CRM">
          <div class="toolsBrowserBar"><span><i></i><i></i><i></i></span><b>Intégrale Connect CRM</b><small>Vue commerciale</small></div>
          <div class="toolsCrmShell">
            <aside><strong>IC</strong><i></i><i></i><i></i><i></i><i></i></aside>
            <main>
              <header><div><small>TABLEAU DE BORD</small><b>Bonjour Cassandre</b></div><span>+ Nouvelle piste</span></header>
              <div class="toolsCrmStats"><article><small>Pistes à traiter</small><b>28</b><i>+ 12 %</i></article><article><small>Rendez-vous</small><b>16</b><i>Aujourd’hui</i></article><article><small>Conversions</small><b>34 %</b><i>Ce mois</i></article></div>
              <div class="toolsCrmColumns"><article><b>Nouvelles pistes</b><span></span><span></span><span></span></article><article><b>À relancer</b><span></span><span></span><span></span></article><article><b>RDV programmés</b><span></span><span></span><span></span></article></div>
            </main>
          </div>
          <div class="toolsPreviewLabel"><i></i><span><b>Pipeline en temps réel</b><small>Relances et priorités visibles</small></span></div>
        </div>
      </article>
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

    <section class="toolsSubscriptionSection">
      <div class="toolsSubscriptionCard reveal">
        <div>
          <span>Abonnement mensuel</span>
          <h2>Une formule adaptée à votre structure et à vos usages.</h2>
          <p>Le périmètre est défini après une démonstration : solution choisie, modules utiles, nombre d’utilisateurs, reprise éventuelle des données et accompagnement au démarrage.</p>
        </div>
        <div class="toolsSubscriptionActions">
          <a class="btn primary" href="/contact?sujet=outils-metiers">Planifier une démonstration <b aria-hidden="true">→</b></a>
          <a class="btn secondary" href="/integrale-connect-plus">Voir Connect+ en détail</a>
        </div>
      </div>
    </section>`;
}
