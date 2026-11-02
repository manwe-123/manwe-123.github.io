/* Progressive enhancements for the portfolio. Content and media remain usable without JS. */
(() => {
  'use strict';
  const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clean = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const toast = message => {
    const el = document.querySelector('[data-toast]');
    if (!el) return;
    el.textContent = message;
    el.classList.add('visible');
    clearTimeout(toast.timeout);
    toast.timeout = setTimeout(() => el.classList.remove('visible'), 2600);
  };
  async function copyText(value) {
    if (navigator.clipboard && window.isSecureContext) {
      try { await navigator.clipboard.writeText(value); return true; } catch (_) { /* fallback below */ }
    }
    const input = document.createElement('textarea');
    input.value = value;
    input.style.cssText = 'position:fixed;top:0;left:-9999px';
    document.body.appendChild(input);
    input.select();
    let copied = false;
    try { copied = document.execCommand('copy'); } catch (_) { copied = false; }
    input.remove();
    return copied;
  }

  function setupNavigation() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (!toggle || !menu) return;
    const setOpen = open => {
      menu.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      toggle.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', event => { if (event.target.closest('a')) setOpen(false); });
    document.addEventListener('click', event => {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false); toggle.focus();
      }
    });
    window.matchMedia('(min-width: 768px)').addEventListener('change', () => setOpen(false));
  }

  function setupProjectBrowser(browser) {
    const grid = browser.querySelector('[data-project-grid]');
    const cards = [...grid.querySelectorAll('.project-card')];
    const search = browser.querySelector('[data-project-search]');
    const sort = browser.querySelector('[data-project-sort]');
    const buttons = [...browser.querySelectorAll('[data-filter]')];
    const views = [...browser.querySelectorAll('[data-project-view]')];
    const empty = browser.querySelector('[data-project-empty]');
    const status = browser.querySelector('[data-project-count]');
    const params = new URLSearchParams(location.search);
    const validCategories = buttons.map(button => button.dataset.filter);
    let category = validCategories.includes(params.get('category')) ? params.get('category') : 'all';
    let storedView;
    try { storedView = localStorage.getItem('portfolio-project-view'); } catch (_) { /* optional preference */ }
    let view = params.get('view') === 'list' || storedView === 'list' ? 'list' : 'grid';
    if (params.get('view') === 'grid') view = 'grid';
    search.value = params.get('q') || '';
    if (['newest', 'oldest', 'title'].includes(params.get('sort'))) sort.value = params.get('sort');

    function render(updateURL = true) {
      const terms = clean(search.value.trim()).split(/\s+/).filter(Boolean);
      const ordered = [...cards].sort((a, b) => {
        if (sort.value === 'title') return a.dataset.title.localeCompare(b.dataset.title);
        const difference = Number(a.dataset.date) - Number(b.dataset.date);
        return sort.value === 'oldest' ? difference : -difference;
      });
      let count = 0;
      const fragment = document.createDocumentFragment();
      ordered.forEach(card => {
        const matches = (category === 'all' || card.dataset.category === category) && terms.every(term => clean(card.dataset.search + ' ' + card.dataset.title).includes(term));
        card.hidden = !matches;
        if (matches) count += 1;
        fragment.appendChild(card);
      });
      grid.appendChild(fragment);
      grid.dataset.view = view;
      buttons.forEach(button => {
        const selected = button.dataset.filter === category;
        button.classList.toggle('active', selected);
        button.setAttribute('aria-pressed', String(selected));
      });
      views.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.projectView === view)));
      status.textContent = `${count} of ${cards.length} project${cards.length === 1 ? '' : 's'}${search.value.trim() ? ` matching “${search.value.trim()}”` : ''}`;
      empty.hidden = count !== 0;
      grid.hidden = count === 0;
      if (updateURL) {
        const url = new URL(location.href);
        const values = { q: search.value.trim(), category: category === 'all' ? '' : category, sort: sort.value === 'newest' ? '' : sort.value, view: view === 'grid' ? '' : view };
        Object.entries(values).forEach(([key, value]) => value ? url.searchParams.set(key, value) : url.searchParams.delete(key));
        history.replaceState(null, '', url);
      }
    }
    search.addEventListener('input', () => render());
    sort.addEventListener('change', () => render());
    buttons.forEach(button => button.addEventListener('click', () => { category = button.dataset.filter; render(); }));
    views.forEach(button => button.addEventListener('click', () => {
      view = button.dataset.projectView;
      try { localStorage.setItem('portfolio-project-view', view); } catch (_) { /* optional preference */ }
      render();
    }));
    browser.querySelector('[data-project-reset]').addEventListener('click', () => { search.value = ''; category = 'all'; render(); search.focus(); });
    document.addEventListener('keydown', event => {
      if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest?.('input, textarea, select, [contenteditable="true"]')) {
        event.preventDefault(); search.focus();
      }
    });
    render(false);
  }

  function setupAboutFilters() {
    document.querySelectorAll('.filter-container').forEach(container => {
      if (container.closest('[data-project-browser]')) return;
      const browser = container.closest('[data-about-browser]');
      const scope = browser || container.closest('.content-section') || container.closest('section');
      if (!scope) return;
      const cards = [...scope.querySelectorAll('.project-card[data-category]')];
      const buttons = [...container.querySelectorAll('[data-filter]')];
      const status = scope.querySelector('[data-about-count]');
      const groups = [...scope.querySelectorAll('[data-about-group]')];
      const requested = browser ? new URLSearchParams(location.search).get('section') : null;
      let selected = buttons.some(button => button.dataset.filter === requested) ? requested : 'all';
      function render(updateURL = false) {
        buttons.forEach(button => {
          const active = button.dataset.filter === selected;
          button.classList.toggle('active', active);
          button.setAttribute('aria-pressed', String(active));
        });
        cards.forEach(card => { card.hidden = selected !== 'all' && card.dataset.category !== selected; });
        groups.forEach(group => { group.hidden = ![...group.querySelectorAll('.project-card')].some(card => !card.hidden); });
        const professional = scope.querySelector('[data-about-group="professional"]');
        const hobbies = scope.querySelector('[data-about-group="hobbies"]');
        if (hobbies) hobbies.classList.toggle('is-first', professional && professional.hidden);
        if (status) status.textContent = `Showing ${cards.filter(card => !card.hidden).length} of ${cards.length} entries`;
        if (browser && updateURL) {
          const url = new URL(location.href);
          if (selected === 'all') url.searchParams.delete('section'); else url.searchParams.set('section', selected);
          history.replaceState(null, '', url);
        }
      }
      buttons.forEach(button => button.addEventListener('click', () => { selected = button.dataset.filter; render(true); }));
      render();
    });
  }

  function setupCaseStudy(study) {
    const article = study.querySelector('.case-study-content');
    const index = study.querySelector('[data-case-index]');
    const nav = study.querySelector('[data-section-nav]');
    const headings = [...article.querySelectorAll('h2')];
    if (!headings.length) return;
    const existingIDs = new Set([...document.querySelectorAll('[id]')].map(element => element.id));
    headings.forEach((heading, i) => {
      const text = heading.textContent.trim();
      if (!heading.id) {
        const slug = clean(text).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
        let id = slug;
        let suffix = 2;
        while (existingIDs.has(id)) { id = `${slug}-${suffix++}`; }
        heading.id = id; existingIDs.add(id);
      }
      heading.dataset.sectionNumber = String(i + 1).padStart(2, '0');
      heading.tabIndex = -1;
      const link = document.createElement('a');
      link.href = '#' + encodeURIComponent(heading.id);
      link.textContent = text;
      nav.appendChild(link);
    });
    index.hidden = false;
    const details = index.querySelector('details');
    const desktop = window.matchMedia('(min-width: 1120px)');
    const setDetails = () => { details.open = desktop.matches; };
    desktop.addEventListener('change', setDetails); setDetails();
    const links = [...nav.querySelectorAll('a')];
    nav.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (!link) return;
      const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
      if (!target) return;
      event.preventDefault();
      if (!desktop.matches) details.open = false;
      target.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
      target.focus({ preventScroll: true });
      history.replaceState(null, '', link.hash);
    });
    const words = article.innerText.trim().split(/\s+/).length;
    const reading = document.querySelector('[data-reading-time]');
    if (reading) reading.textContent = `${Math.max(1, Math.ceil(words / 220))} min read`;
    const progress = document.querySelector('[data-reading-progress]');
    const position = index.querySelector('[data-reading-position]');
    let pending = false;
    function update() {
      const headerHeight = document.querySelector('.site-header').getBoundingClientRect().height;
      let active = 0;
      headings.forEach((heading, i) => { if (heading.getBoundingClientRect().top <= headerHeight + 110) active = i; });
      links.forEach((link, i) => i === active ? link.setAttribute('aria-current', 'location') : link.removeAttribute('aria-current'));
      position.textContent = `${String(active + 1).padStart(2, '0')} / ${headings.length}`;
      if (progress) {
        const rect = article.getBoundingClientRect();
        const fraction = Math.max(0, Math.min(1, (headerHeight - rect.top) / Math.max(1, rect.height - window.innerHeight + headerHeight)));
        progress.style.transform = `scaleX(${fraction})`;
      }
      pending = false;
    }
    window.addEventListener('scroll', () => { if (!pending) { pending = true; requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('resize', update); update();
    article.querySelectorAll('table').forEach(table => {
      if (table.closest('.table-wrapper, .table-responsive, .robotics-table-scroll, .circuits-table-scroll, .table-scroll')) return;
      const wrapper = document.createElement('div');
      wrapper.className = 'table-scroll'; wrapper.tabIndex = 0;
      wrapper.setAttribute('role', 'region'); wrapper.setAttribute('aria-label', table.caption ? table.caption.textContent.trim() : 'Scrollable project data table');
      table.parentNode.insertBefore(wrapper, table); wrapper.appendChild(table);
    });
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
    }
  }

  function setupImageViewer() {
    const dialog = document.getElementById('image-viewer');
    if (!dialog || typeof dialog.showModal !== 'function') return;
    const image = dialog.querySelector('#viewer-image');
    const caption = dialog.querySelector('.viewer-caption');
    const count = dialog.querySelector('[data-viewer-count]');
    const zoom = dialog.querySelector('[data-viewer-zoom]');
    const original = dialog.querySelector('[data-viewer-original]');
    const entries = [];
    let current = 0;
    let returnFocus;
    const setZoom = value => {
      dialog.classList.toggle('is-zoomed', value);
      zoom.setAttribute('aria-pressed', String(value)); zoom.textContent = value ? 'Fit image −' : 'Zoom +';
    };
    function show(index, opener) {
      current = (index + entries.length) % entries.length;
      const entry = entries[current];
      image.src = entry.src; image.alt = entry.alt; caption.textContent = entry.caption || entry.alt;
      original.href = entry.src;
      count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(entries.length).padStart(2, '0')}`;
      dialog.querySelector('[data-viewer-prev]').disabled = entries.length < 2;
      dialog.querySelector('[data-viewer-next]').disabled = entries.length < 2;
      setZoom(false);
      if (!dialog.open) { returnFocus = opener || document.activeElement; dialog.showModal(); document.body.style.overflow = 'hidden'; }
    }
    document.querySelectorAll('main figure img, main .photo-grid img, main .textile-gallery img').forEach(img => {
      if (img.closest('.project-card') || !img.getAttribute('src')) return;
      let link = img.closest('a');
      if (link && !/\.(png|jpe?g|webp|gif|svg)(\?|$)/i.test(link.href)) return;
      const src = link ? link.href : img.src;
      const figure = img.closest('figure');
      const text = figure && figure.querySelector('figcaption');
      let description = img.alt;
      if (text) { const clone = text.cloneNode(true); clone.querySelectorAll('a,button').forEach(el => el.remove()); description = clone.textContent.trim(); }
      let index = entries.findIndex(entry => entry.src === src);
      if (index < 0) { index = entries.length; entries.push({ src, alt: img.alt, caption: description }); }
      if (!link) { link = document.createElement('a'); link.href = src; img.parentNode.insertBefore(link, img); link.appendChild(img); }
      link.classList.add('image-zoom-link');
      link.setAttribute('aria-label', `Enlarge image: ${img.alt || 'Project image'}`);
      link.addEventListener('click', event => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault(); show(index, link);
      });
    });
    function finishClose() {
      if (dialog.open) return;
      document.body.style.overflow = '';
      setZoom(false);
      const opener = returnFocus;
      returnFocus = null;
      if (opener && opener.isConnected) opener.focus({ preventScroll: true });
    }
    function closeViewer() {
      if (dialog.open) dialog.close();
      finishClose();
    }
    dialog.querySelector('[data-viewer-close]').addEventListener('click', closeViewer);
    dialog.addEventListener('cancel', event => { event.preventDefault(); closeViewer(); });
    dialog.querySelector('[data-viewer-prev]').addEventListener('click', () => show(current - 1));
    dialog.querySelector('[data-viewer-next]').addEventListener('click', () => show(current + 1));
    zoom.addEventListener('click', () => setZoom(!dialog.classList.contains('is-zoomed')));
    image.addEventListener('dblclick', () => setZoom(!dialog.classList.contains('is-zoomed')));
    dialog.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeViewer();
    });
    dialog.addEventListener('close', finishClose);
    window.openLightbox = (src, description) => {
      const absolute = new URL(src, location.href).href;
      let index = entries.findIndex(entry => entry.src === absolute);
      if (index < 0) { index = entries.length; entries.push({ src: absolute, alt: description || 'Project image', caption: description }); }
      show(index);
    };
    window.closeLightbox = closeViewer;
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.classList.add('js');
    setupNavigation();
    document.querySelectorAll('[data-project-browser]').forEach(setupProjectBrowser);
    setupAboutFilters();
    document.querySelectorAll('[data-case-study]').forEach(setupCaseStudy);
    setupImageViewer();
    document.querySelectorAll('[data-copy-link], [data-copy-email]').forEach(button => button.addEventListener('click', async () => {
      const value = button.hasAttribute('data-copy-email') ? button.dataset.copyEmail : location.origin + location.pathname;
      const success = await copyText(value);
      button.focus({ preventScroll: true });
      toast(success ? (button.hasAttribute('data-copy-email') ? 'Email address copied.' : 'Project link copied.') : 'Copy unavailable. Select the address to copy it.');
    }));
    document.querySelectorAll('.animate-on-scroll').forEach(element => element.classList.add('visible'));
  });
})();
