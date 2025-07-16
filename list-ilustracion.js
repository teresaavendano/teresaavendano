// ---------------- Config ----------------
const proyectos = [
 
  
  { titulo: "Ilustración / Pasteles",                año: "2024",       color: "#FDA88A", url: "#" },
  { titulo: "Ilustración / Exposición",                año: "2024",       color: "#C1F7FF", url: "#" },
  { titulo: "Ilustración / Acrílicos",                año: "2024",       color: "#FFF9AD", url: "#" }

];

// ---------------- Helpers ----------------
function getEspaciado() {
  // 90 px en desktop, 60 px en móvil
  return window.innerWidth <= 768 ? 90 : 90;
}

function renderTarjetas() {
  const contenedor = document.getElementById("contenedor-proyectos");
  contenedor.innerHTML = "";                     // limpia antes de pintar
  const alturaTarjeta = getEspaciado();

  proyectos.forEach((proyecto, i) => {
    const link = document.createElement("a");
    link.className = "tarjeta";
    link.href = proyecto.url;
    link.style.top = `${i * alturaTarjeta}px`;
    link.style.backgroundColor = proyecto.color;
    link.style.zIndex = i + 1;

    link.innerHTML = `
      <span>${proyecto.titulo}</span>
      <span class="año">${proyecto.año}</span>
    `;
    contenedor.appendChild(link);
  });

  ajustarUltimaTarjeta(alturaTarjeta);
}

function ajustarUltimaTarjeta(alturaTarjeta) {
  const tarjetas = document.querySelectorAll(".tarjeta");
  const ultima   = tarjetas[tarjetas.length - 1];
  const espacioOcupado = tarjetas.length * alturaTarjeta;
  const EXTRA = 0;  // modifica aquí si necesitas que la última tarjeta se extienda (valores como 500, 1000...)
  const viewport       = window.innerHeight - 160 + EXTRA;    // header + footer

  if (espacioOcupado < viewport) {
    ultima.classList.add("expandida");
    ultima.style.top    = `${espacioOcupado - alturaTarjeta}px`;
    ultima.style.height = `${viewport - (espacioOcupado - alturaTarjeta)}px`;
  } else {
    ultima.classList.remove("expandida");
    ultima.style.height = ""; // limpia, por si pasa de móvil a desktop
  }
}

// ---------------- Init & listeners ----------------
window.addEventListener("load", renderTarjetas);
window.addEventListener("resize", renderTarjetas);   // reajusta al rotar o cambiar tamaño
