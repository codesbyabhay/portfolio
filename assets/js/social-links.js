
(() => {
  const out = document.querySelector("[data-social-list]");
  if (!out) return;

  const search = document.querySelector("[data-social-search]");
  const filters = document.querySelector("[data-social-filters]");
  const count = document.querySelector("[data-social-count]");

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[c]);

  // Platform-specific Simple Icons CDN logos.
  const icons = {
    github: ["github", "#181717"],
    linkedin: ["linkedin", "#0A66C2"],
    instagram: ["instagram", "#E4405F"],
    youtube: ["youtube", "#FF0033"],
    facebook: ["facebook", "#0866FF"],
    x: ["x", "#000000"],
    twitter: ["x", "#000000"],
    pinterest: ["pinterest", "#BD081C"],
    reddit: ["reddit", "#FF4500"],
    discord: ["discord", "#5865F2"],
    telegram: ["telegram", "#26A5E4"],
    whatsapp: ["whatsapp", "#25D366"],
    tiktok: ["tiktok", "#000000"],
    snapchat: ["snapchat", "#F5C400"],
    spotify: ["spotify", "#1DB954"],
    medium: ["medium", "#000000"],
    devto: ["devdotto", "#0A0A0A"],
    stackoverflow: ["stackoverflow", "#F58025"],
    codepen: ["codepen", "#000000"],
    gitlab: ["gitlab", "#FC6D26"],
    npm: ["npm", "#CB3837"],
    behance: ["behance", "#1769FF"],
    dribbble: ["dribbble", "#EA4C89"],
    twitch: ["twitch", "#9146FF"],
    google: ["google", "#4285F4"],
    wordpress: ["wordpress", "#21759B"],
    medium: ["medium", "#000000"],
    website: ["googlechrome", "#4285F4"]
  };

  // Match common icon names and platform names.

  function getIcon(item) {

    const onlineSvgIcons = {
      "codepen":
        "https://img.icons8.com/ios-filled/100/000000/codepen.png",

      "linkedin":
        "https://img.icons8.com/fluency/100/linkedin.png",

      "slack":
        "https://img.icons8.com/color/100/slack-new.png",

      "katyayani institute of computer education":
        "https://img.icons8.com/fluency/100/linkedin.png",

      "indian institute of computer science":
        "https://img.icons8.com/fluency/100/linkedin.png"
    };

    const key = String(item.name || "").toLowerCase().trim();
    const onlineSvg = onlineSvgIcons[key];

    if (onlineSvg) {
      return {
        html: `
      <img
        src="${onlineSvg}"
        class="social-platform-icon"
        alt=""
        aria-hidden="true"
        loading="lazy"
        onerror="this.hidden=true"
      >
    `,
        color: "#64748b"
      };
    }

    // Keep your existing Simple Icons logic below this point.


    const platforms = {
      "codesbyabhay": ["googlechrome", "#4285F4"],
      "personal portfolio": ["googlechrome", "#4285F4"],
      "bluesky": ["bluesky", "#0085FF"],
      "codecademy": ["codecademy", "#1F4056"],
      "codepen": ["codepen", "#000000"],
      "commudle": ["users", "#6366F1"],
      "dev community": ["devdotto", "#0A0A0A"],
      "docker hub": ["docker", "#2496ED"],
      "geeksforgeeks": ["geeksforgeeks", "#2F8D46"],
      "github": ["github", "#181717"],
      "gitlab": ["gitlab", "#FC6D26"],
      "leetcode": ["leetcode", "#FFA116"],
      "npm": ["npm", "#CB3837"],
      "pypi": ["pypi", "#3775A9"],
      "replit": ["replit", "#F26207"],
      "dailymotion": ["dailymotion", "#0D0D0D"],
      "facebook": ["facebook", "#0866FF"],
      "fiverr": ["fiverr", "#1DBF73"],
      "freelancer": ["freelancer", "#29B2FE"],
      "gravatar": ["gravatar", "#1E8CBE"],
      "instagram": ["instagram", "#E4405F"],
      "linkedin": ["linkedin", "#0A66C2"],
      "pinterest business": ["pinterest", "#BD081C"],
      "reddit": ["reddit", "#FF4500"],
      "rubygems": ["rubygems", "#E9573F"],
      "snapchat": ["snapchat", "#F5C400"],
      "telegram": ["telegram", "#26A5E4"],
      "threads": ["threads", "#000000"],
      "tiktok": ["tiktok", "#000000"],
      "vimeo": ["vimeo", "#1AB7EA"],
      "slack": ["slack", "#4A154B"],
      "x": ["x", "#000000"],
      "youtube": ["youtube", "#FF0033"],
      "katyayani institute of computer education": ["linkedin", "#0A66C2"],
      "indian institute of computer science": ["linkedin", "#0A66C2"]
    };

    const entry = platforms[key];

    if (!entry) {
      return {
        html: '<span class="social-icon-fallback" aria-hidden="true">↗</span>',
        color: "#64748b"
      };
    }

    const [slug, color] = entry;

    // These two profiles do not have a confirmed Simple Icons slug.
    if (slug === "users") {
      return {
        html: '<span class="social-icon-fallback" aria-hidden="true">♧</span>',
        color
      };
    }

    return {
      html: `<img
      src="https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}"
      class="social-platform-icon"
      alt=""
      aria-hidden="true"
      loading="lazy"
      onerror="this.hidden=true"
    >`,
      color
    };
  }


  let data = [];
  let active = "All";

  function render() {
    const q = (search?.value || "").trim().toLowerCase();

    const matches = data.filter((item) =>
      (active === "All" || item.category === active) &&
      [
        item.name,
        item.username,
        item.description,
        item.category
      ].join(" ").toLowerCase().includes(q)
    );

    count.textContent = `Showing ${matches.length} of ${data.length} platforms`;

    if (!matches.length) {
      out.innerHTML =
        '<p class="empty-state">No platforms match your search. Try another name or category.</p>';
      return;
    }

    const categories = [...new Set(matches.map((item) => item.category))];

    out.innerHTML = categories.map((category) => {
      const categoryId = `cat-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

      return `
        <section class="social-category" aria-labelledby="${esc(categoryId)}">
          <h2 class="category-title" id="${esc(categoryId)}">${esc(category)}</h2>
          <div class="grid">
            ${matches.filter((item) => item.category === category).map((item) => {
        const icon = getIcon(item);

        return `
                <article class="card social-card">
                  <div class="social-card-top">
                    <div
  class="card-icon social-card-icon"
  style="--platform-color:${icon.color}"
  aria-hidden="true"
>
  ${icon.html}
</div>
                    <span class="social-platform-type">${esc(item.featured ? "Featured" : "Profile")}</span>
                  </div>
                  <h3>${esc(item.name)}</h3>
                  <div class="social-handle">${esc(item.username)}</div>
                  <p>${esc(item.description)}</p>
                  <a class="btn" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">
                    Visit Profile ↗ <span class="sr-only">(opens in a new tab)</span>
                  </a>
                </article>`;
      }).join("")}
          </div>
        </section>`;
    }).join("");
  }

  async function init() {
    try {
      const response = await fetch("data/social-links.json");
      if (!response.ok) throw new Error("Could not load links");

      data = await response.json();

      const categories = [
        "All",
        ...new Set(data.map((item) => item.category).filter(Boolean))
      ];

      filters.innerHTML = categories.map((category, i) => `
        <button type="button"
          class="filter-btn"
          data-social-filter="${esc(category)}"
          aria-pressed="${i === 0}">
          ${esc(category)}
        </button>`).join("");

      filters.addEventListener("click", (event) => {
        const button = event.target.closest("[data-social-filter]");
        if (!button) return;

        active = button.dataset.socialFilter;

        filters.querySelectorAll("[data-social-filter]").forEach((item) => {
          item.setAttribute("aria-pressed", String(item === button));
        });

        render();
      });

      search?.addEventListener("input", render);
      render();
    } catch (error) {
      console.error(error);
      out.innerHTML =
        '<p class="empty-state">Social links could not load. Check data/social-links.json and run the site using a local web server or GitHub Pages.</p>';

      if (count) count.textContent = "Social profiles unavailable";
    }
  }

  init();
})();
