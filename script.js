/* ============================================================
   Deze code hoef je niet aan te passen.
   - Op de homepage: bouwt de projecttegels op uit projects.js
   - Op elke pagina: regelt het mobiele menu
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Mobiel menu (werkt op elke pagina) ----
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => mainNav.classList.remove("open"));
    });
  }

  // ---- Projectoverzicht (alleen op de homepage aanwezig) ----
  const grid = document.getElementById("projectGrid");
  const filtersEl = document.getElementById("filters");
  if (!grid || typeof projects === "undefined") return;

  const categories = ["Alles", ...new Set(projects.map(p => p.category))];
  let activeCategory = "Alles";

  function renderFilters() {
    filtersEl.innerHTML = "";
    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "filter-btn" + (cat === activeCategory ? " active" : "");
      btn.textContent = cat;
      btn.addEventListener("click", () => {
        activeCategory = cat;
        renderFilters();
        renderProjects();
      });
      filtersEl.appendChild(btn);
    });
  }

  function renderProjects() {
    grid.innerHTML = "";
    const filtered = activeCategory === "Alles"
      ? projects
      : projects.filter(p => p.category === activeCategory);

    filtered.forEach(project => {
      const card = document.createElement("a");
      card.className = "project-card";
      card.href = project.page;
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-card-body">
          <span class="project-card-category">${project.category}</span>
          <h3>${project.title}</h3>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  renderFilters();
  renderProjects();
});
