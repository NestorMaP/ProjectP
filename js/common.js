export function initCommonUI() {
  // Año en footer
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Marcar link activo automáticamente
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav] a.nav__link").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === current) a.classList.add("is-active");
    else a.classList.remove("is-active");
  });

  // Menú hamburguesa
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    const closeMenu = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
    };

    const openMenu = () => {
      nav.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Cerrar menú");
    };

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.contains("is-open");
      if (isOpen) closeMenu();
      else openMenu();
    });

    // Cerrar al hacer click en un enlace (móvil)
    nav.addEventListener("click", (e) => {
      const target = e.target;
      if (target instanceof HTMLAnchorElement) closeMenu();
    });

    // Cerrar con ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Si se hace resize a escritorio, cerramos para evitar estados raros
    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 721px)").matches) closeMenu();
    });
  }
}
