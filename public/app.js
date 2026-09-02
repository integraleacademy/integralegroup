const header = document.querySelector('.siteHeader');
const burger = document.querySelector('.burger');
const navDropdowns = [...document.querySelectorAll('.navDropdown')];
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const setDropdownOpen = (dropdown, open, source = 'programmatic') => {
  dropdown.classList.toggle('is-open', open);
  dropdown.querySelector('.navDropdownToggle')?.setAttribute('aria-expanded', String(open));
  if (open) dropdown.dataset.dropdownSource = source;
  else delete dropdown.dataset.dropdownSource;
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
    const wasOpenedByClick = dropdown.classList.contains('is-open') && dropdown.dataset.dropdownSource === 'click';
    closeDropdowns(dropdown);
    setDropdownOpen(dropdown, !wasOpenedByClick, 'click');
    dropdown.classList.toggle('ignore-hover', wasOpenedByClick);
  });

  if (canHover) {
    dropdown.addEventListener('mouseenter', () => {
      if (!dropdown.classList.contains('ignore-hover')) setDropdownOpen(dropdown, true, 'hover');
    });
    dropdown.addEventListener('mouseleave', () => {
      dropdown.classList.remove('ignore-hover');
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

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('[data-product-gallery]').forEach(gallery => {
  const tabs = [...gallery.querySelectorAll('[data-product-tab]')];
  const panels = [...gallery.querySelectorAll('[data-product-panel]')];
  const interval = Number(gallery.dataset.galleryInterval) || 5600;
  let activeIndex = Math.max(0, tabs.findIndex(tab => tab.getAttribute('aria-selected') === 'true'));
  let rotationTimer;
  let galleryIsVisible = false;
  let interactionPaused = false;

  const activateProductPanel = (nextIndex, moveFocus = false) => {
    activeIndex = (nextIndex + tabs.length) % tabs.length;
    tabs.forEach((tab, index) => {
      const isActive = index === activeIndex;
      tab.setAttribute('aria-selected', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
      tab.classList.toggle('is-active', isActive);
      if (isActive && moveFocus) tab.focus();
    });
    panels.forEach((panel, index) => {
      const isActive = index === activeIndex;
      panel.classList.toggle('is-active', isActive);
      panel.setAttribute('aria-hidden', String(!isActive));
    });
  };

  const stopRotation = () => {
    window.clearInterval(rotationTimer);
    rotationTimer = undefined;
  };

  const startRotation = () => {
    if (reducedMotion || !galleryIsVisible || interactionPaused || rotationTimer || tabs.length < 2) return;
    rotationTimer = window.setInterval(() => activateProductPanel(activeIndex + 1), interval);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      activateProductPanel(index);
      stopRotation();
      startRotation();
    });
    tab.addEventListener('keydown', event => {
      const keyMap = { ArrowRight: activeIndex + 1, ArrowLeft: activeIndex - 1, Home: 0, End: tabs.length - 1 };
      if (!(event.key in keyMap)) return;
      event.preventDefault();
      activateProductPanel(keyMap[event.key], true);
      stopRotation();
    });
  });

  gallery.addEventListener('mouseenter', () => {
    interactionPaused = true;
    stopRotation();
  });
  gallery.addEventListener('mouseleave', () => {
    interactionPaused = false;
    startRotation();
  });
  gallery.addEventListener('focusin', () => {
    interactionPaused = true;
    stopRotation();
  });
  gallery.addEventListener('focusout', event => {
    if (gallery.contains(event.relatedTarget)) return;
    interactionPaused = false;
    startRotation();
  });

  const galleryObserver = new IntersectionObserver(entries => {
    galleryIsVisible = entries.some(entry => entry.isIntersecting);
    if (galleryIsVisible) startRotation();
    else stopRotation();
  }, { threshold: .22 });
  galleryObserver.observe(gallery);
  activateProductPanel(activeIndex);
});

if (reducedMotion) {
  document.querySelectorAll('.productVideoStage video[autoplay]').forEach(video => video.pause());
}

const productStickyCta = document.querySelector('[data-product-sticky]');
if (productStickyCta) {
  let frameRequested = false;
  const updateProductStickyCta = () => {
    const finalCard = document.querySelector('.connectPlusFinalSection, .crmFinalSection');
    const finalCardVisible = finalCard && finalCard.getBoundingClientRect().top < window.innerHeight * .82;
    productStickyCta.classList.toggle('is-visible', window.scrollY > window.innerHeight * .72 && !finalCardVisible);
    frameRequested = false;
  };
  const requestProductStickyUpdate = () => {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(updateProductStickyCta);
  };
  window.addEventListener('scroll', requestProductStickyUpdate, { passive: true });
  window.addEventListener('resize', requestProductStickyUpdate);
  updateProductStickyCta();
}

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
    'integrale-connect-plus': 'Intégrale Connect+',
    'integrale-connect-crm': 'Intégrale Connect CRM',
    'outils-metiers': 'Développement web & outils métiers',
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
