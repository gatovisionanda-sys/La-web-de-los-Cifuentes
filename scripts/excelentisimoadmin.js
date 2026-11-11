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
            <a href="${rutaBase}paginas/partido.html">
                <button class="botonadmin">Administrar</button>
            </a>
            <a href="${rutaBase}index.html#criticando">
                <button class="botonadmin">Tirar bomba que explota to</button>
            </a>
                <button class="botonadmin" onclick="adminout()">Salir del admin</button>
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
function adminout()
{
    let confsalir = confirm("¿Está usted seguro mi excelentísimo?")
    if (confsalir)
    {
    localStorage.removeItem("excelentisimo");
    location.reload();
    }
}