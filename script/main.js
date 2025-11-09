const menuHamburguesa = document.getElementById("menu-hamburguesa");
const menuOverlay = document.getElementById("menu-overlay");
const cerrarMenu = document.getElementById("cerrar-menu");
const overlayLinks = document.querySelectorAll(".menu-overlay a");

// Abrir menú
menuHamburguesa.addEventListener("click", () => {
  menuOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

// Cerrar menú con la X
cerrarMenu.addEventListener("click", () => {
  menuOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Cerrar menú al hacer clic en un enlace
overlayLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});
