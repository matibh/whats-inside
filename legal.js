(() => {
  const requested = new URLSearchParams(window.location.search).get("lang");
  const lang = requested === "en" ? "en" : "es";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-lang]").forEach((node) => {
    node.hidden = node.dataset.lang !== lang;
  });
  document.querySelectorAll("[data-language-link]").forEach((node) => {
    node.href = window.location.pathname + "?lang=" + node.dataset.languageLink;
    if (node.dataset.languageLink === lang) node.setAttribute("aria-current", "page");
  });
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
