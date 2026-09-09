const demoUrl = '/contact?sujet=integrale-connect-crm';
const arrow = '<span aria-hidden="true">↗</span>';
const iconPaths = {
  chart: '<path d="M4 4v16h16M8 15v-4m5 4V7m5 8v-6"/>',
  pipeline: '<rect x="3" y="4" width="5" height="16" rx="1.5"/><rect x="10" y="4" width="5" height="11" rx="1.5"/><rect x="17" y="4" width="4" height="7" rx="1.5"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 10h18m-13 5 3 3 5-5"/>',
  message: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',
  export: '<path d="M12 3v12m-4-4 4 4 4-4M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/>',
  contact: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
  funding: '<rect x="3" y="5" width="18" height="15" rx="3"/><path d="M16 10h5v5h-5a2.5 2.5 0 0 1 0-5M4 5l12-3v3"/>',
  compliance: '<rect x="4" y="4" width="16" height="17" rx="3"/><path d="M9 4V2h6v2M8 11h8m-8 5 2 2 5-5"/>',
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]}</svg>`;

const screens = [
  {
    id: 'pilotage-crm', nav: 'Pilotage', icon: 'chart', label: 'Pilotage & statistiques',
    title: 'Toute votre activité.<br>En un coup d’œil.',
    text: 'D’où viennent vos demandes ? Lesquelles se transforment en inscriptions ? Retrouvez les indicateurs utiles pour piloter votre acquisition et donner le bon cap à votre équipe.',
    items: ['Sources et campagnes réunies dans un tableau de bord', 'Rendez-vous, contacts et conversions par période', 'Relances échues visibles dès le premier regard'],
    image: 'connect-crm-dashboard.jpg', width: 1070, height: 620,
    alt: 'Tableau de bord des sources de demandes et des conversions dans Intégrale Connect CRM',
    note: 'De la demande à l’inscription', detail: 'Une lecture commune des résultats', color: 'violet',
  },
  {
    id: 'pipeline-crm', nav: 'Pipeline', icon: 'pipeline', label: 'Leads & pipeline',
    title: 'Chaque prospect<br>à la bonne étape.',
    text: 'Les nouvelles demandes, les rendez-vous et les dossiers en cours rejoignent le même pipeline. Chaque conseiller retrouve ses priorités et sait où en est le projet du candidat.',
    items: ['Étapes, statuts et vues adaptés à votre organisation', 'Recherche par contact, formation ou session', 'Origine de la demande et qualification conservées'],
    image: 'connect-crm-pipeline.jpg', width: 1090, height: 620,
    alt: 'Pipeline des pistes et filtres par formation ou session dans Intégrale Connect CRM',
    note: 'Une demande, un parcours', detail: 'Un historique partagé par l’équipe', color: 'blue',
  },
  {
    id: 'relances-crm', nav: 'Relances', icon: 'calendar', label: 'Rendez-vous & appels',
    title: 'La prochaine action.<br>Toujours au bon moment.',
    text: 'Un appel à passer, un rendez-vous à préparer, un prospect à rappeler : organisez la journée des conseillers avec une vue claire sur les actions à mener.',
    items: ['Agenda partagé et prochaines échéances', 'Relances datées et contacts à reprendre', 'Résultat des appels et replanification du suivi'],
    image: 'connect-crm-relances.jpg', width: 1090, height: 415,
    alt: 'Vue des relances et des actions commerciales dans Intégrale Connect CRM',
    note: 'Le bon contact, au bon moment', detail: 'Une prochaine action toujours visible', color: 'mint',
  },
  {
    id: 'messages-crm', nav: 'Messages', icon: 'message', label: 'E-mails, SMS & relances',
    title: 'Des réponses rapides.<br>Une relation personnalisée.',
    text: 'Préparez vos modèles, adaptez chaque réponse et retrouvez les échanges dans le dossier du prospect. Les automatisations accompagnent vos équipes dans les étapes récurrentes.',
    items: ['Modèles d’e-mails et de SMS personnalisables', 'Variables métier, pièces jointes et historique', 'Messages et relances selon les scénarios retenus'],
    image: 'connect-crm-modeles.jpg', width: 1080, height: 800,
    alt: 'Bibliothèque des modèles d’e-mails et de SMS avec variables de personnalisation',
    note: 'Personnaliser. Envoyer. Suivre.', detail: 'Les échanges restent liés au contact', color: 'peach',
  },
  {
    id: 'exports-crm', nav: 'Exports', icon: 'export', label: 'Exports & reporting',
    title: 'Vos données utiles.<br>Prêtes à être exploitées.',
    text: 'Préparez un point d’équipe ou approfondissez vos résultats. Les exports structurés vous permettent de retrouver les informations utiles et de poursuivre vos analyses dans Excel.',
    items: ['Exports des données commerciales', 'Informations structurées pour vos analyses', 'Un suivi partagé entre conseillers et direction'],
    image: 'connect-crm-exports.jpg', width: 1090, height: 620,
    alt: 'Écran des exports de données commerciales dans Intégrale Connect CRM',
    note: 'Du suivi à la décision', detail: 'Des données accessibles à votre équipe', color: 'violet',
  },
];

function featureRow(screen, index) {
  return `<section class="crmTourFeature ${index % 2 ? 'crmTourFeatureReverse' : ''} crmTourTone-${screen.color}" id="${screen.id}" aria-labelledby="${screen.id}-title">
    <div class="crmTourFeatureInner">
      <figure class="crmTourFigure reveal">
        <a class="crmTourScreen" href="/images/${screen.image}" target="_blank" rel="noopener" aria-label="Agrandir l’écran : ${screen.nav}">
          <div class="crmTourBrowser" aria-hidden="true"><span><i></i><i></i><i></i></span><b>Intégrale Connect CRM</b><span>${arrow}</span></div>
          <img src="/images/${screen.image}" alt="${screen.alt}" width="${screen.width}" height="${screen.height}" loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async">
          <span class="crmTourZoom">Voir l’écran en grand ${arrow}</span>
        </a>
        <figcaption><span class="crmTourNoteIcon">${icon(screen.icon)}</span><span><strong>${screen.note}</strong><small>${screen.detail}</small></span></figcaption>
      </figure>
      <div class="crmTourFeatureCopy reveal">
        <div class="crmTourFeatureLabel"><span class="crmTourIcon">${icon(screen.icon)}</span><span>${String(index + 1).padStart(2, '0')} / ${screen.label}</span></div>
        <h2 id="${screen.id}-title">${screen.title}</h2>
        <p>${screen.text}</p>
        <ul>${screen.items.map(item => `<li><span aria-hidden="true">✓</span>${item}</li>`).join('')}</ul>
        <a class="crmTourTextLink" href="${demoUrl}">Découvrir en démonstration ${arrow}</a>
      </div>
    </div>
  </section>`;
}

export function renderCrmFeatureHighlights() {
  return `<div class="crmFeatureHighlights" id="fonctionnalites-en-images-crm">
    ${screens.map(featureRow).join('')}
  </div>`;
}
