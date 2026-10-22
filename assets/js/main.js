(() => {
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem("cba-theme");
    if (saved === "dark" || saved === "light") root.dataset.theme = saved;
    else if (matchMedia("(prefers-color-scheme: dark)").matches)
      root.dataset.theme = "dark";
  } catch {}
  const toggle = document.querySelector("[data-theme-toggle]");
  function updateToggle() {
    if (!toggle) return;
    const dark = root.dataset.theme === "dark";
    toggle.textContent = dark ? "☀" : "☾";
    toggle.setAttribute(
      "aria-label",
      dark ? "Switch to light theme" : "Switch to dark theme",
    );
    toggle.setAttribute(
      "title",
      dark ? "Switch to light theme" : "Switch to dark theme",
    );
  }
  updateToggle();
  toggle?.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("cba-theme", root.dataset.theme);
    } catch {}
    updateToggle();
  });
  const menuButton = document.querySelector("[data-menu-toggle]"),
    nav = document.querySelector("[data-site-nav]");
  menuButton?.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    nav?.classList.toggle("is-open", open);
  });
  nav?.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
    }),
  );
  const current = location.pathname.split("/").pop() || "index.html";
  nav?.querySelectorAll("a").forEach((link) => {
    if (link.getAttribute("href") === current)
      link.setAttribute("aria-current", "page");
  });
  document
    .querySelectorAll("[data-year]")
    .forEach((el) => (el.textContent = new Date().getFullYear()));
})();
