/* =========================
   SMOOTH SCROLLING
========================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* =========================
   ACTIVE NAV LINK ON SCROLL
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

/* =========================
   GOOGLE ANALYTICS EVENTS
========================= */

// CV Download Tracking
const cvDownloadBtn = document.querySelector('a[download]');
if (cvDownloadBtn) {
  cvDownloadBtn.addEventListener("click", () => {
    if (typeof gtag === "function") {
      gtag("event", "download_cv", {
        event_category: "engagement",
        event_label: "CV Download"
      });
    }
  });
}

// GitHub Click Tracking
const githubLinks = document.querySelectorAll('a[href*="github.com"]');
githubLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (typeof gtag === "function") {
      gtag("event", "github_click", {
        event_category: "engagement",
        event_label: "GitHub Profile"
      });
    }
  });
});

// Email Click Tracking
const emailLink = document.querySelector('a[href^="mailto:"]');
if (emailLink) {
  emailLink.addEventListener("click", () => {
    if (typeof gtag === "function") {
      gtag("event", "contact_click", {
        event_category: "engagement",
        event_label: "Email Click"
      });
    }
  });
});

