const footerTemplate = `
  <footer class="footer">
    <div class="footer-content">
      <a href="/" class="footer-brand">teresa avendaño</a>
      <nav class="footer-links" id="footerLinks">
        <a href="/lista">todos los proyectos</a>
        <a href="/about">sobre mí</a>
        <a href="/contacto">contacto</a>
      </nav>
      <button class="menu-toggle" id="menuToggle">menú</button>
    </div>
  </footer>
`;

document.getElementById("footer-component").innerHTML = footerTemplate;

// Script de comportamiento del menú
const menuToggle = document.getElementById("menuToggle");
const footer = document.querySelector(".footer");
const footerLinks = document.getElementById("footerLinks");

menuToggle.addEventListener("click", () => {
  footer.classList.toggle("expanded");
  const isExpanded = footer.classList.contains("expanded");
  menuToggle.textContent = isExpanded ? "cerrar" : "menú";
});
