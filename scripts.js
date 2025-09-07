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

function copyToClipboard(text, event) {
  navigator.clipboard.writeText(text);

  const btn = event.currentTarget;
  const rect = btn.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 12; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // random color
    particle.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;

    // random direction
    const angle = Math.random() * 2 * Math.PI;
    const distance = 40 + Math.random() * 30;
    particle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);

    particle.style.left = centerX + "px";
    particle.style.top = centerY + "px";
    particle.style.position = "fixed";
    document.body.appendChild(particle);

    // cleanup
    setTimeout(() => particle.remove(), 600);
  }
}

// back to top
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
