/* ============================================
   NAV — scroll effect
============================================ */
window.addEventListener('scroll', () => {
  document.querySelector('.nav')?.classList.toggle('scrolled', window.scrollY > 20);
});

/* ============================================
   HAMBURGER / DRAWER
============================================ */
function toggleDrawer() {
  document.getElementById('drawer')?.classList.toggle('open');
}

/* ============================================
   ACTIVE NAV LINK — match current page
============================================ */
(function setActiveLink() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a, .drawer a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === path) a.classList.add('active');
    else a.classList.remove('active');
  });

  // Bottom nav
  document.querySelectorAll('.bnav-item[data-href]').forEach(item => {
    const href = item.dataset.href.replace(/\/$/, '') || '/';
    const active = href === path || (path === '' && href === '/');
    item.classList.toggle('active', active);
    const dot = item.querySelector('.bnav-dot');
    if (dot) dot.style.display = active ? 'block' : 'none';
  });
})();

/* ============================================
   SMOOTH PAGE TRANSITIONS (optional fade)
============================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity .25s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});

document.querySelectorAll('a[href^="/"]').forEach(link => {
  link.addEventListener('click', e => {
    if (link.target === '_blank') return;
    e.preventDefault();
    const href = link.getAttribute('href');
    document.body.style.opacity = '0';
    setTimeout(() => window.location.href = href, 220);
  });
});
