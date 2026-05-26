const themeBtn = document.getElementById("themeToggleBtn");
const currentThemeIcon = document.getElementById("currentThemeIcon");

let currentTheme = localStorage.getItem("theme") || "light";

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    if (currentThemeIcon) currentThemeIcon.textContent = "dark_mode";
  } else {
    document.documentElement.classList.remove("dark");
    if (currentThemeIcon) currentThemeIcon.textContent = "light_mode";
  }
}

applyTheme(currentTheme);

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
    applyTheme(currentTheme);
  });
}
