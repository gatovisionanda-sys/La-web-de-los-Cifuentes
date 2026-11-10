if (localStorage.getItem("excelentisimo") === "true")
{
    document.addEventListener("DOMContentLoaded", function() {
    // Detectamos si estamos dentro de la carpeta "paginas" para ajustar las rutas relativas
    let enCarpetaPaginas = window.location.pathname.includes("/paginas/");
    let rutaBase = enCarpetaPaginas ? "../" : "";

    // Creamos un contenedor o inyectamos directamente el HTML al principio del body
    let menuADMIN = `
        <hr>
        <div id="adminpanel">
            <a href="${rutaBase}index.html#criticando">
                <button  class="botonadmin">Borrarlo to</button>
            </a>
            <a href="${rutaBase}paginas/partido.html">
                <button class="botonadmin">Administrar</button>
            </a>
        <p id="textadmin">Panel admin</p>
        </div>
        <hr>
    `;

    // Insertamos todo el bloque al comienzo del body
    document.body.insertAdjacentHTML("afterbegin", menuADMIN);

});
}
if (localStorage.getItem("excelentisimo") === "true")
{
    document.getElementById("webver").innerHTML = "webZamarros (ADMIN)";
}