// ============================================================
// Scroll-based Fade-Up Animations (Intersection Observer)
// ============================================================
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".js-fade-up").forEach((el) => observer.observe(el));
}

// ============================================================
// Header: transparent → frosted glass on scroll
// ============================================================
function initHeaderScroll() {
  const header = document.querySelector(".l-header");
  if (!header) return;

  function update() {
    header.classList.toggle("is-active", window.scrollY > 10);
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

// ============================================================
// Smooth Scroll for anchor links (with header offset)
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const headerH = parseInt(
        getComputedStyle(document.documentElement)
          .getPropertyValue("--header-h-sm")
          .trim() || "64"
      );
      const top = target.getBoundingClientRect().top + window.scrollY - headerH;

      window.scrollTo({ top, behavior: "smooth" });

      // Close mobile menu if open
      closeMobileMenu();
    });
  });
}

// ============================================================
// Mobile Hamburger Menu
// ============================================================
function closeMobileMenu() {
  const btnMenu = document.querySelector(".js-btn-menu");
  const globalNav = document.querySelector(".p-global-nav");
  if (!btnMenu || !globalNav) return;
  btnMenu.classList.remove("is-active");
  globalNav.classList.remove("is-show");
}

function initMobileMenu() {
  const btnMenu = document.querySelector(".js-btn-menu");
  const globalNav = document.querySelector(".p-global-nav");
  if (!btnMenu || !globalNav) return;

  btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("is-active");
    globalNav.classList.toggle("is-show");
  });
}

// ============================================================
// Page Top Button
// ============================================================
function initPageTop() {
  const pageTop = document.querySelector(".js-page-top");
  if (!pageTop) return;

  window.addEventListener(
    "scroll",
    () => {
      pageTop.style.display = window.scrollY > 320 ? "block" : "none";
    },
    { passive: true }
  );
}

// ============================================================
// Init
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initHeaderScroll();
  initSmoothScroll();
  initMobileMenu();
  initPageTop();
});
