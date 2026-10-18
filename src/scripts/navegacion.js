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

// Franja de tecnologías: cinta continua sin cortes
const franja = document.querySelector(".franja-tecnologias");
const pista = document.querySelector(".pista-tecnologias");
const grupo = pista?.querySelector(".grupo-tecnologias-franja");

if (franja && pista && grupo) {
  const prepararFranja = () => {
    // Conservar un único grupo original.
    pista.querySelectorAll(".grupo-tecnologias-franja").forEach((elemento, indice) => {
      if (indice > 0) elemento.remove();
    });

    const anchoGrupo = grupo.getBoundingClientRect().width;

    if (!anchoGrupo) return;

    // Repetir el contenido hasta cubrir holgadamente la zona visible.
    while (pista.scrollWidth < franja.clientWidth + anchoGrupo * 2) {
      const copia = grupo.cloneNode(true);
      copia.setAttribute("aria-hidden", "true");
      pista.appendChild(copia);
    }

    // El reinicio coincide exactamente con el comienzo del siguiente grupo.
    pista.style.setProperty("--recorrido-tecnologias", `-${anchoGrupo}px`);
  };

  prepararFranja();
  window.addEventListener("resize", prepararFranja);

  if (document.fonts?.ready) {
    document.fonts.ready.then(prepararFranja);
  }
}