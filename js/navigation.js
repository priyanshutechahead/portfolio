const SECTIONS = ["about", "toolkit", "projects", "contact"];

function setNavActive(sectionId) {
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const isActive = link.dataset.nav === sectionId;
    link.classList.toggle("font-bold", isActive);
    link.classList.toggle("font-medium", !isActive);
    link.classList.toggle("!underline", isActive);
    link.classList.toggle("underline-offset-4", isActive);
    link.classList.toggle("decoration-black", isActive);
    link.classList.toggle("dark:decoration-white", isActive);
    link.classList.toggle("opacity-100", isActive);
  });
}

function scrollToSection(id, { updateHash = true } = {}) {
  if (!SECTIONS.includes(id)) return;

  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (updateHash) {
      history.pushState(null, "", `#${id}`);
    }
    setNavActive(id);
  }

  document.getElementById("mobileMenu")?.classList.add("hidden");
}

document.querySelectorAll("[data-nav]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection(link.dataset.nav);
  });
});

const menuBtn = document.getElementById("menuBtn");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    document.getElementById("mobileMenu")?.classList.toggle("hidden");
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible?.target?.id) {
      setNavActive(visible.target.id);
    }
  },
  { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
);

SECTIONS.forEach((id) => {
  const section = document.getElementById(id);
  if (section) observer.observe(section);
});

const initialHash = location.hash.replace("#", "");
if (SECTIONS.includes(initialHash)) {
  requestAnimationFrame(() => scrollToSection(initialHash, { updateHash: false }));
} else {
  setNavActive("about");
}

window.addEventListener("hashchange", () => {
  const id = location.hash.replace("#", "");
  if (SECTIONS.includes(id)) scrollToSection(id, { updateHash: false });
});
