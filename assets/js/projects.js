(() => {
  const out = document.querySelector("[data-project-list]");
  if (!out) return;
  const search = document.querySelector("[data-project-search]"),
    filters = document.querySelector("[data-project-filters]");
  const esc = (s) =>
    String(s ?? "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  let data = [],
    active = "All";
  async function init() {
    try {
      const response = await fetch("data/projects.json");
      if (!response.ok) throw new Error("Could not load project data");
      data = await response.json();
    } catch {
      out.innerHTML =
        '<p class="empty-state">Project data could not load. Run the site using a local web server or GitHub Pages.</p>';
      return;
    }
    const categories = [
      "All",
      ...new Set(data.map((p) => p.category).filter(Boolean)),
    ];
    filters.innerHTML = categories
      .map(
        (c, i) =>
          `<button type="button" class="filter-btn" data-filter="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}</button>`,
      )
      .join("");
    render();
  }
  function render() {
    const q = (search?.value || "").trim().toLowerCase();
    const matches = data.filter(
      (p) =>
        (active === "All" || p.category === active) &&
        [p.title, p.shortDescription, p.category, ...(p.technologies || [])]
          .join(" ")
          .toLowerCase()
          .includes(q),
    );
    out.innerHTML = matches.length
      ? matches
          .map(
            (p) =>
              `<article class="card"><img class="project-image" src="${esc(p.image || "assets/images/project-placeholder.svg")}" alt="Placeholder or preview image for ${esc(p.title)}" loading="lazy"><span class="badge">${esc(p.category || "Project")}</span><h2>${esc(p.title)}</h2><p>${esc(p.shortDescription)}</p><div class="tag-list">${(p.technologies || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div><div class="button-row">${p.repositoryUrl ? `<a class="btn" href="${esc(p.repositoryUrl)}" target="_blank" rel="noopener noreferrer">Repository ↗</a>` : ""}${p.liveDemoUrl ? `<a class="btn btn-primary" href="${esc(p.liveDemoUrl)}" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>` : ""}${!p.repositoryUrl && !p.liveDemoUrl ? `<a class="btn btn-primary" href="mailto:codesbyabhay@gmail.com?subject=${encodeURIComponent("Project enquiry: " + p.title)}">Ask about this project ↗</a>` : ""}</div><p class="privacy-note">${esc(p.status || "Manually maintained project details.")}</p></article>`,
          )
          .join("")
      : '<p class="empty-state">No projects match your search. Try another keyword or category.</p>';
  }
  filters?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    active = button.dataset.filter;
    filters
      .querySelectorAll("button")
      .forEach((item) =>
        item.setAttribute("aria-pressed", String(item === button)),
      );
    render();
  });
  search?.addEventListener("input", render);
  init();
})();
