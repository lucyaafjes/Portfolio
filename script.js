/* ============================================================
   Deze code hoef je niet aan te passen.
   Gebaseerd op de router/animatie-code van het "Lumen Eighty" template
   (templatemo.com), aangepast voor het portfolio van Lucy Aafjes:
   - Regelt het wisselen tussen de "pagina's" Home / Werk / Over mij / Contact
     (dit is één HTML-bestand, maar het voelt als losse pagina's aan)
   - Regelt het mobiele menu en de uitklap-menu's
   - Bouwt de projecttegels op de Werk-pagina op uit projects.js
   - Regelt het "verschijn"-animatie-effect tijdens het scrollen
   ============================================================ */

(function () {
  'use strict';

  var pages = document.querySelectorAll('.page');
  var routeLinks = document.querySelectorAll('[data-route]');
  var navLinks = document.querySelectorAll('.main-nav .nav-link, .mobile-nav .m-link[data-route]');
  var validRoutes = ['home', 'werk', 'over-mij', 'contact'];
  var currentRoute = null;
  var transitioning = false;

  function updateHash(route) {
    try {
      history.replaceState(null, '', '#' + route);
    } catch (err) {
      try { location.hash = route; } catch (err2) { /* alleen in-memory routing */ }
    }
  }

  function setActiveNav(route) {
    navLinks.forEach(function (link) {
      link.classList.toggle('is-active', link.getAttribute('data-route') === route);
    });
  }

  function showPage(route, anchor) {
    var target = document.getElementById('page-' + route);
    if (!target) return;
    pages.forEach(function (p) { p.classList.remove('active'); });
    target.classList.add('active');
    setActiveNav(route);
    currentRoute = route;
    observeReveals(target);
    if (anchor) {
      var el = document.getElementById(anchor);
      if (el) {
        var top = el.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top: top, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function navigate(route, anchor, pushHash) {
    if (validRoutes.indexOf(route) === -1) route = 'home';
    if (transitioning) return;
    if (route === currentRoute) {
      if (anchor) {
        var el = document.getElementById(anchor);
        if (el) {
          var top = el.getBoundingClientRect().top + window.pageYOffset - 90;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      }
      if (pushHash !== false) updateHash(route);
      return;
    }
    var current = document.getElementById('page-' + currentRoute);
    if (pushHash !== false) updateHash(route);
    if (current) {
      transitioning = true;
      current.style.transition = 'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
      current.style.opacity = '0';
      current.style.transform = 'translateY(-16px)';
      setTimeout(function () {
        current.style.transition = '';
        current.style.opacity = '';
        current.style.transform = '';
        transitioning = false;
        showPage(route, anchor);
      }, 300);
    } else {
      showPage(route, anchor);
    }
  }

  routeLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var route = link.getAttribute('data-route');
      var anchor = link.getAttribute('data-anchor');
      closeMobileNav();
      navigate(route, anchor);
    });
  });

  window.addEventListener('hashchange', function () {
    var route = location.hash.replace('#', '') || 'home';
    if (route !== currentRoute) navigate(route, null, false);
  });

  /* ============ VERSCHIJN-ANIMATIE TIJDENS SCROLLEN ============ */
  var observer = null;
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  }

  function observeReveals(scope) {
    var items = (scope || document).querySelectorAll('.reveal:not(.visible)');
    items.forEach(function (item) {
      if (observer) { observer.observe(item); } else { item.classList.add('visible'); }
    });
  }

  setTimeout(function () {
    document.querySelectorAll('.page.active .reveal:not(.visible)').forEach(function (item) {
      item.classList.add('visible');
    });
  }, 3000);

  /* ============ MOBIEL MENU ============ */
  var menuToggle = document.getElementById('menuToggle');
  var mobileNav = document.getElementById('mobileNav');

  function closeMobileNav() {
    if (!menuToggle || !mobileNav) return;
    menuToggle.classList.remove('open');
    mobileNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  document.querySelectorAll('.m-sub-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var sub = btn.closest('li').querySelector('.m-sub');
      var isOpen = sub.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
      btn.querySelector('.caret').style.transform = isOpen ? 'rotate(225deg)' : 'rotate(45deg)';
    });
  });

  document.querySelectorAll('.has-drop').forEach(function (item) {
    var trigger = item.querySelector('.nav-link');
    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        item.classList.add('drop-open');
        var first = item.querySelector('.dropdown a');
        if (first) first.focus();
      }
      if (e.key === 'Escape') item.classList.remove('drop-open');
    });
    item.addEventListener('focusout', function () {
      setTimeout(function () {
        if (!item.contains(document.activeElement)) item.classList.remove('drop-open');
      }, 10);
    });
  });

  /* ============ PROJECTOVERZICHT (uit projects.js) ============ */
  function buildProductCard(project) {
    var article = document.createElement('article');
    article.className = 'product-card reveal visible';
    var inner = project.page ? document.createElement('a') : document.createElement('div');
    if (project.page) {
      inner.className = 'card-link';
      inner.href = project.page;
    }
    inner.innerHTML =
      '<div class="frame"><img src="' + project.image + '" alt="' + project.title + '" loading="lazy"></div>' +
      '<div class="product-info">' +
      '<div><h3 class="product-name">' + project.title + '</h3><p class="product-cat">' + project.category + '</p></div>' +
      '</div>';
    article.appendChild(inner);
    return article;
  }

  if (typeof projects !== 'undefined') {
    // Uitgelicht werk op de homepage (eerste 3 projecten)
    var featuredGrid = document.getElementById('featuredGrid');
    if (featuredGrid) {
      projects.slice(0, 3).forEach(function (p) {
        featuredGrid.appendChild(buildProductCard(p));
      });
    }

    // Volledig overzicht + filters op de Werk-pagina
    var werkGrid = document.getElementById('werkGrid');
    var filtersEl = document.getElementById('filters');
    if (werkGrid && filtersEl) {
      var categories = ['Alles'].concat(projects.map(function (p) { return p.category; }).filter(function (cat, i, arr) { return arr.indexOf(cat) === i; }));
      var activeCategory = 'Alles';

      function renderFilters() {
        filtersEl.innerHTML = '';
        categories.forEach(function (cat) {
          var btn = document.createElement('button');
          btn.className = 'filter-btn' + (cat === activeCategory ? ' active' : '');
          btn.textContent = cat;
          btn.addEventListener('click', function () {
            activeCategory = cat;
            renderFilters();
            renderWerkGrid();
          });
          filtersEl.appendChild(btn);
        });
      }

      function renderWerkGrid() {
        werkGrid.innerHTML = '';
        var filtered = activeCategory === 'Alles' ? projects : projects.filter(function (p) { return p.category === activeCategory; });
        filtered.forEach(function (p) { werkGrid.appendChild(buildProductCard(p)); });
      }

      renderFilters();
      renderWerkGrid();
    }
  }

  /* ============ INIT ============ */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (pages.length) {
    var initial = location.hash.replace('#', '');
    if (validRoutes.indexOf(initial) === -1) initial = 'home';
    showPage(initial, null);
  }
})();
