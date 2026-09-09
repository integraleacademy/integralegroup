(() => {
  const root = document.querySelector('.connectCrmPage');
  if (!root) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window) {
    if (!reducedMotion) {
      const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      }, { threshold: 0.08 });
      root.querySelectorAll('.crmTourReveal').forEach(item => revealObserver.observe(item));
      root.classList.add('crmTourReady');
    }
  }

  const header = root.querySelector('.siteHeader');
  if (header && 'ResizeObserver' in window) {
    new ResizeObserver(() => {
      root.style.setProperty('--crm-header-height', `${header.getBoundingClientRect().height}px`);
    }).observe(header);
  }

  const links = [...root.querySelectorAll('[data-crm-chapter-link]')];
  const chapters = links.map(link => document.getElementById(link.hash.slice(1)));
  let scheduled = false;
  const updateChapter = () => {
    const offset = (header?.getBoundingClientRect().height || 76) + 180;
    let active = -1;
    chapters.forEach((chapter, index) => {
      const rect = chapter.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom > offset) active = index;
    });
    links.forEach((link, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  };
  const requestChapterUpdate = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateChapter);
  };
  window.addEventListener('scroll', requestChapterUpdate, { passive: true });
  window.addEventListener('resize', requestChapterUpdate);
  updateChapter();
})();
