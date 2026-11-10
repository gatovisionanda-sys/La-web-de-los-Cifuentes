document.addEventListener("DOMContentLoaded", function() {
    // Detectamos si estamos dentro de la carpeta "paginas" para ajustar las rutas relativas
    let enCarpetaPaginas = window.location.pathname.includes("/paginas/");
    let rutaBase = enCarpetaPaginas ? "../" : "";

    // Creamos un contenedor o inyectamos directamente el HTML al principio del body
    let menuHTML = `
    
      <div>
        <h1>LOS CIFUENTES
          <section id="perfil-top">
          <!-- CHATGPT: Separador adicional visible únicamente en móvil, entre el título principal y el bloque de perfil. -->
          <hr class="perfil-separador-responsive">
          <a href="../paginas/tuperfil.html">
            <p id="nombre-de-perfil">Tu perfil</p>
            <img id="foto-de-perfil" src="../recursos/fotos-de-perfil/editar.png">
        </a>
        
          </section>
        </h1>

        <a href="${rutaBase}index.html">
            <button class="boton">Inicio</button>
        </a>
        <a href="${rutaBase}index.html#criticando">
            <button class="boton" style="color:rgb(255, 0, 0)">Himno 24/7 ⦿</button>
        </a>
        <a href="${rutaBase}paginas/partido.html">
            <button class="boton" style="color:rgb(255, 188, 19)">Registrar Partido</button>
        </a>
        <a href="${rutaBase}paginas/diccionario.html">
            <button class="boton">Diccionario C.I.F.U.</button>
        </a>
        <a href="${rutaBase}paginas/opinion.html">
            <button class="boton">Opinión ciudadana</button>
        </a>
        <a href="${rutaBase}paginas/certificado.html">
            <button class="boton">Certificado de poda</button>
        </a>
        <a href="${rutaBase}paginas/derechos.html">
            <button class="boton">Sus derechos</button>
        </a>
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
            zamarrete.innerHTML = "Cerrar sesión";
            zamarrete.onclick = cerrarSesion;
        } else {
            zamarrete.innerHTML = "Iniciar sesion";
            zamarrete.onclick = iniciarDesdePagina;
            zamarrete.style.color = "lime";
        }
    }
});