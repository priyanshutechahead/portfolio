const VIEWS = ["about", "toolkit", "contact"];

const PAGE_TITLES = {
  about: "About Me",
  toolkit: "Toolkit",
  contact: "Contact",
};

function setNavActive(view) {
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const isActive = link.dataset.nav === view;
    link.classList.toggle("font-bold", isActive);
    link.classList.toggle("font-medium", !isActive);
    link.classList.toggle("!underline", isActive);
    link.classList.toggle("underline-offset-4", isActive);
    link.classList.toggle("decoration-black", isActive);
    link.classList.toggle("dark:decoration-white", isActive);
    link.classList.toggle("opacity-100", isActive);
  });
}

function showView(view) {
  const target = VIEWS.includes(view) ? view : "about";

  VIEWS.forEach((name) => {
    const el = document.getElementById(`view-${name}`);
    if (el) el.classList.toggle("hidden", name !== target);
  });

  setNavActive(target);
  document.title = PAGE_TITLES[target] || "priy4zshu.";

  const hash = target === "about" ? "" : `#${target}`;
  if (location.hash !== hash) {
    history.replaceState(null, "", hash || location.pathname);
  }

  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu) mobileMenu.classList.add("hidden");
}

function initNavigation() {
  const fromHash = location.hash.replace("#", "");
  showView(fromHash || "about");

  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showView(link.dataset.nav);
    });
  });

  window.addEventListener("hashchange", () => {
    const view = location.hash.replace("#", "") || "about";
    showView(view);
  });
}

const menuBtn = document.getElementById("menuBtn");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    document.getElementById("mobileMenu")?.classList.toggle("hidden");
  });
}

initNavigation();
