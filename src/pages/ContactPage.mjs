import { company } from '../data/siteContent.mjs';

export const route = '/contact';
export const bodyClass = 'contactRoute';
export const buttons = `<a class="btn primary" href="#contact-form">Décrire mon besoin</a><a class="btn secondary" href="tel:${company.phoneHref}">${company.phone}</a>`;

const heading = (eyebrow, title, text = '', dark = false, centered = false) => `
  <header class="contactHeading${dark ? ' contactHeadingDark' : ''}${centered ? ' contactHeadingCenter' : ''}">
    <p class="contactEyebrow"><span></span>${eyebrow}</p>
    <h2>${title}</h2>
    ${text ? `<p>${text}</p>` : ''}
  </header>`;

const routes = [
  ['01', 'IA', 'Formation', 'Intégrale Academy', 'Une formation, une admission, une alternance ou une demande entreprise.', 'Formation / Intégrale Academy', 'academy'],
  ['02', 'IE', 'Certification', 'Intégrale Expertises', 'Un partenariat certificateur, un titre professionnel ou une habilitation.', 'Intégrale Expertises / partenariat', 'expertises'],
  ['03', 'CA', 'Structuration', 'Conseil & accompagnement', 'Une organisation, un projet ou des processus à clarifier et développer.', 'Conseil & accompagnement', 'conseil'],
  ['04', 'DG', 'Solutions', 'Digital & outils métiers', 'Un site, une plateforme, un CRM, une automatisation ou Intégrale Connect.', 'Développement web & outils métiers', 'digital'],
];

const options = [
  'Formation / Intégrale Academy',
  'Intégrale Expertises / partenariat',
  'Conseil & accompagnement',
  'Développement web & outils métiers',
  'Intégrale Connect',
  'Partenariat groupe',
  'Autre demande',
];

export function render() {
  return `
    <section class="contactOrientation" id="orientation">
      <div class="contactWrap">
        ${heading('Votre point d’entrée', 'Quatre expertises.<br><em>Un seul contact.</em>', 'Choisissez le sujet le plus proche de votre besoin. Votre demande sera ensuite orientée vers le bon interlocuteur.', false, true)}
        <div class="contactOrientationGrid">
          ${routes.map(([number, initials, label, title, text, subject, theme]) => `
            <a class="contactOrientationCard ${theme} reveal" href="/contact?sujet=${encodeURIComponent(subject)}#contact-form" data-contact-subject="${subject}">
              <span>${number}</span>
              <i>${initials}</i>
              <small>${label}</small>
              <h3>${title}</h3>
              <p>${text}</p>
              <b>Choisir ce sujet <em>→</em></b>
            </a>`).join('')}
        </div>
      </div>
    </section>

    <section class="contactFormSection" id="contact-form">
      <div class="contactWrap contactFormGrid">
        <div class="contactFormAside">
          ${heading('Parlons de votre projet', 'Quelques informations suffisent pour commencer.', 'Décrivez simplement votre situation. La direction du groupe qualifie la demande puis la transmet au pôle concerné.')}
          <div class="contactDetails reveal">
            <a href="mailto:${company.email}?subject=Demande%20Int%C3%A9grale%20Group"><i>@</i><div><small>Email</small><strong>${company.email}</strong></div><span>→</span></a>
            <a href="tel:${company.phoneHref}"><i>☎</i><div><small>Téléphone</small><strong>${company.phone}</strong></div><span>→</span></a>
            <div><i>⌖</i><div><small>Siège social</small><strong>${company.address}</strong></div></div>
          </div>
          <div class="contactChecklist reveal">
            <p><small>Pour mieux vous répondre</small><strong>Vous pouvez préciser dès le premier message :</strong></p>
            <div><span><i>01</i>Votre contexte</span><span><i>02</i>Votre objectif</span><span><i>03</i>Votre calendrier</span><span><i>04</i>Vos contraintes</span></div>
          </div>
        </div>

        <form id="contactForm" class="contactForm reveal">
          <header>
            <span>Votre demande</span>
            <h2>Écrivez-nous.</h2>
            <p>Les champs marqués d’un astérisque sont nécessaires pour préparer votre message.</p>
          </header>
          <div class="contactFieldsTwo">
            <label><span>Nom <b>*</b></span><input name="nom" autocomplete="family-name" required placeholder="Votre nom"></label>
            <label><span>Prénom <b>*</b></span><input name="prenom" autocomplete="given-name" required placeholder="Votre prénom"></label>
          </div>
          <label><span>Entreprise ou organisme</span><input name="entreprise" autocomplete="organization" placeholder="Nom de votre structure"></label>
          <div class="contactFieldsTwo">
            <label><span>Email <b>*</b></span><input type="email" name="email" autocomplete="email" required placeholder="vous@entreprise.fr"></label>
            <label><span>Téléphone</span><input type="tel" name="telephone" autocomplete="tel" placeholder="06 00 00 00 00"></label>
          </div>
          <label><span>Sujet <b>*</b></span><select name="sujet" required>${options.map(option => `<option value="${option}">${option}</option>`).join('')}</select></label>
          <label><span>Votre message <b>*</b></span><textarea name="message" rows="7" required placeholder="Présentez votre contexte, votre objectif et, si vous en avez un, le calendrier envisagé."></textarea></label>
          <div class="contactFormBottom">
            <p>Vos informations sont utilisées uniquement pour répondre à votre demande. Le bouton ouvre votre application de messagerie avec un e-mail déjà préparé.</p>
            <button class="btn primary" type="submit">Préparer mon e-mail <span aria-hidden="true">→</span></button>
          </div>
          <p class="contactFormStatus" aria-live="polite"></p>
        </form>
      </div>
    </section>

    <section class="contactProcess">
      <div class="contactWrap">
        ${heading('La suite', 'Un échange simple, en trois temps.', 'Pas de parcours compliqué : votre demande est lue, orientée puis approfondie avec la bonne expertise.', true)}
        <div class="contactProcessGrid">
          <article class="reveal"><i>01</i><span>Votre demande</span><h3>Vous posez le contexte.</h3><p>Un besoin, une difficulté, une ambition ou une idée encore à structurer.</p></article>
          <article class="reveal"><i>02</i><span>L’orientation</span><h3>Nous identifions le bon pôle.</h3><p>Formation, certification, conseil ou digital : la demande est qualifiée sans vous faire naviguer entre plusieurs contacts.</p></article>
          <article class="reveal"><i>03</i><span>L’échange</span><h3>Nous précisons la prochaine étape.</h3><p>Un premier échange permet de cadrer le besoin, les personnes concernées et la suite utile.</p></article>
        </div>
      </div>
    </section>

    <section class="contactDirect">
      <div class="contactWrap contactDirectPanel reveal">
        <div>
          <p class="contactEyebrow"><span></span>Contact direct</p>
          <h2>Vous préférez parler<br>de vive voix&nbsp;?</h2>
          <p>Appelez-nous ou écrivez directement à la direction d’Intégrale Group.</p>
        </div>
        <div class="contactDirectActions">
          <a href="tel:${company.phoneHref}"><small>Téléphone</small><strong>${company.phone}</strong><span>Appeler →</span></a>
          <a href="mailto:${company.email}?subject=Demande%20Int%C3%A9grale%20Group"><small>Email</small><strong>${company.email}</strong><span>Écrire →</span></a>
        </div>
      </div>
    </section>`;
}
