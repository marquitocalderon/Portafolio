const navbar = document.querySelector("#menu-principal");
const botonmenu = document.querySelector("#boton-menu");

botonmenu.addEventListener("click", function () {
  navbar.classList.toggle("mostrar");
});

function redirectToPage() {
  window.location.href = "#capa2";
}

