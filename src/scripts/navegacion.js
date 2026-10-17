// Navegación flotante
console.log("Script de navegación cargado");
const cabecera = document.querySelector(".cabecera");
const navegacion = cabecera?.querySelector("nav");

function actualizarNavegacion() {
  if (!navegacion) return;
  navegacion.classList.toggle("nav-flotante", window.scrollY > 80);
}

window.addEventListener("scroll", actualizarNavegacion, { passive: true });
actualizarNavegacion();

// Botón de volver al inicio
const botonInicio = document.querySelector(".volver-inicio");
function actualizarBotonInicio() {
  botonInicio?.classList.toggle("visible", window.scrollY > 300);
}
window.addEventListener("scroll", actualizarBotonInicio, { passive: true });
actualizarBotonInicio();
botonInicio?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
