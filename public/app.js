const header = document.querySelector('.siteHeader');
const burger = document.querySelector('.burger');
const navDropdowns = [...document.querySelectorAll('.navDropdown')];
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const setDropdownOpen = (dropdown, open) => {
  dropdown.classList.toggle('is-open', open);
  dropdown.querySelector('.navDropdownToggle')?.setAttribute('aria-expanded', String(open));
};

const closeDropdowns = exception => {
  navDropdowns.forEach(dropdown => {
    if (dropdown !== exception) setDropdownOpen(dropdown, false);
  });
};

navDropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('.navDropdownToggle');

  toggle?.addEventListener('click', event => {
    event.stopPropagation();
    const willOpen = !dropdown.classList.contains('is-open');
    closeDropdowns(dropdown);
    setDropdownOpen(dropdown, willOpen);
  });

  if (canHover) {
    dropdown.addEventListener('mouseenter', () => setDropdownOpen(dropdown, true));
    dropdown.addEventListener('mouseleave', () => {
      if (!dropdown.contains(document.activeElement)) setDropdownOpen(dropdown, false);
    });
  }
  dropdown.addEventListener('focusout', event => {
    if (!dropdown.contains(event.relatedTarget)) setDropdownOpen(dropdown, false);
  });
  dropdown.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    setDropdownOpen(dropdown, false);
    toggle?.focus();
  });
});

document.addEventListener('click', event => {
  if (!navDropdowns.some(dropdown => dropdown.contains(event.target))) closeDropdowns();
});

burger?.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
  if (!open) closeDropdowns();
});

document.querySelectorAll('.navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('open');
    burger?.setAttribute('aria-expanded', 'false');
    closeDropdowns();
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

const form = document.querySelector('#contactForm');

if (form) {
  const subject = new URLSearchParams(location.search).get('sujet') || new URLSearchParams(location.search).get('subject');
  const subjectMap = {
    formation: 'Formation / Intégrale Academy',
    academy: 'Formation / Intégrale Academy',
    partenariat: 'Intégrale Expertises / partenariat',
    'integrale-expertises': 'Intégrale Expertises / partenariat',
    conseil: 'Conseil & accompagnement',
    webdesign: 'Développement web & outils métiers',
    saas: 'Développement web & outils métiers',
    'developpement-web': 'Développement web & outils métiers',
    'integrale-connect': 'Intégrale Connect',
    'lancement-integrale-connect': 'Intégrale Connect',
    groupe: 'Partenariat groupe',
  };

  if (subject) {
    const selected = subjectMap[subject] || subject;
    const exists = [...form.sujet.options].some(option => option.value === selected);
    if (exists) form.sujet.value = selected;
  }

  document.querySelectorAll('[data-contact-subject]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const selected = link.dataset.contactSubject;
      const exists = [...form.sujet.options].some(option => option.value === selected);
      if (exists) form.sujet.value = selected;
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.setTimeout(() => form.querySelector('input')?.focus({ preventScroll: true }), 550);
    });
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const subjectLabel = data.get('sujet');
    const body = [
      'Bonjour,',
      '',
      'Je souhaite vous contacter au sujet de : ' + subjectLabel,
      '',
      'Nom : ' + data.get('nom'),
      'Prénom : ' + data.get('prenom'),
      'Entreprise : ' + (data.get('entreprise') || 'Non renseignée'),
      'Email : ' + data.get('email'),
      'Téléphone : ' + (data.get('telephone') || 'Non renseigné'),
      '',
      'Message :',
      data.get('message'),
      '',
      'Cordialement,',
    ].join('\n');

    const status = form.querySelector('.contactFormStatus');
    if (status) status.textContent = 'Votre application de messagerie va s’ouvrir avec le message préparé.';
    location.href = 'mailto:clement@integraleacademy.com?subject=' + encodeURIComponent('[Intégrale Group] ' + subjectLabel) + '&body=' + encodeURIComponent(body);
  });
}
