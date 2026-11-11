document.addEventListener("DOMContentLoaded", function() {
    // Detectamos si estamos dentro de la carpeta "paginas" para ajustar las rutas relativas
    let enCarpetaPaginas = window.location.pathname.includes("/paginas/");
    let rutaBase = enCarpetaPaginas ? "../../" : "";

    // Creamos un contenedor o inyectamos directamente el HTML al principio del body
    let menuHTML = `
    
      <div>
        <h1>LOS CIFUENTES
          <section id="perfil-top">
          <hr class="perfil-separador-responsive">
          <a href="${rutaBase}paginas/carpeta-ciudadana/index.html#foto-de-perfil-page">
            <p id="nombre-de-perfil">Tu perfil</p>
            <img id="foto-de-perfil" src="${rutaBase}recursos/fotos-de-perfil/editar.png">
        </a>
        
          </section>
        </h1>


        <button class="boton" id="boton-menu" onclick="ocultar()">☰</button>

        <a href="${rutaBase}index.html">
            <button class="boton">🏠︎ Inicio</button>
        </a>
        
        <span id="menu-opt">
        <a href="${rutaBase}index.html#criticando">
            <button class="boton" style="color:rgb(255, 0, 0)">⦿ Himno 24/7</button>
        </a>
        <a href="${rutaBase}paginas/partido.html">
            <button class="boton" style="color:rgb(255, 188, 19)">✎ Registrar Partido</button>
        </a>
        <a href="${rutaBase}paginas/diccionario.html">
            <button class="boton">🕮 Diccionario C.I.F.U.</button>
        </a>
        <a href="${rutaBase}paginas/carpeta-ciudadana">
            <button class="boton">🗁 Carpeta ciudadana</button>
        </a>
        </span>
            <button class="boton" id="pozu">a</button>
        <hr>
    </div>
    `;

    // Insertamos todo el bloque al comienzo del body
    document.body.insertAdjacentHTML("afterbegin", menuHTML);

    // Configuramos el comportamiento dinámico del botón "pozu"
    let putita = localStorage.getItem("sesion_iniciada");
    let zamarrete = document.getElementById("pozu");

    if (zamarrete) {
        if (putita === "true") {
            zamarrete.innerHTML = "⏻ Cerrar sesión";
            zamarrete.onclick = cerrarSesion;
        } else {
            zamarrete.innerHTML = "⏻ Iniciar sesion";
            zamarrete.onclick = iniciarDesdePagina;
            zamarrete.style.color = "lime";
        }
    }
});

localStorage.setItem("menu", "ocultar");

function ocultar() {
    let ver = localStorage.getItem("menu");
    // Use .bind(localStorage) to preserve the correct 'this' context
    let cam = localStorage.setItem.bind(localStorage);

    if (ver === "ocultar") {
        document.getElementById("menu-opt").style.display = "inline";
        document.getElementById("boton-menu").innerHTML = "✖";
        cam("menu", "mostrar");
    } else if (ver === "mostrar") {
        document.getElementById("menu-opt").style.display = "none";
        document.getElementById("boton-menu").innerHTML = "☰";
        cam("menu", "ocultar");
    }
}