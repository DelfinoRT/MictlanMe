// =========================
// HEADER HEIGHT HANDLING
// =========================
function updateHeaderHeight() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const headerHeight = header.offsetHeight;
  document.documentElement.style.setProperty('--header-height', headerHeight + 'px');
  document.body.style.paddingTop = headerHeight + 'px';
}

window.addEventListener('DOMContentLoaded', updateHeaderHeight);
window.addEventListener('resize', updateHeaderHeight);
window.addEventListener('orientationchange', updateHeaderHeight);

// =========================
// HAMBURGER MENU TOGGLE
// =========================
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  }
});
