// Si ya hay un número guardado, úsalo; si no, empieza en 1
let seleco = Number(localStorage.getItem("tufoto")) || 1;
// NUMERO DE FOTOS DISPONIBLES:
const tope = 5;

function camnombre ()
{
        let nombre = prompt("¿Como te llamas?");
        localStorage.setItem("tunombre", nombre);
        location.reload();
        generarNumerin();
}

function generarNumerin() {
    let numero = "";

    for (let i = 0; i < 10; i++) {
        numero += Math.floor(Math.random() * 10);
    }

    localStorage.setItem("numerin", numero);
}

function cambio ()
{
        let mibio = prompt("Escriba una descripción corta sobre usted");
        localStorage.setItem("biografia", mibio);
        location.reload();
}

function fotourl()
{
    let urlfoto = prompt("Pega aqui el enlace de una foto")
    if (localStorage.getItem("tufoto"))
    {
        localStorage.removeItem("tufoto");
    }
    localStorage.setItem("fotourl" , "si");
    localStorage.setItem("fotopuesta" , urlfoto);
    location.reload();
}

function sumar() {
    seleco++;
    if (seleco > tope) {
        seleco = 1;
    }
    localStorage.setItem("tufoto", seleco);
    localStorage.removeItem("fotourl");
    location.reload();
}

function restar() {
    seleco--;
    if (seleco < 1) {
        seleco = tope;
    }
    localStorage.setItem("tufoto", seleco);
    localStorage.removeItem("fotourl");
    location.reload();
}

function clasificarNumerin() {
    let numero = Number(localStorage.getItem("numerin"));
    let resultado = "";

    if (numero >= 0 && numero <= 1999999999) {
        resultado = "-NENE";
    }
    else if (numero >= 2000000000 && numero <= 3999999999) {
        resultado = "-FACH";
    }
    else if (numero >= 4000000000 && numero <= 5999999999) {
        resultado = "-CIFU";
    }
    else if (numero >= 6000000000 && numero <= 6999999999) {
        resultado = "-ROJO";
    }
    else if (numero >= 7000000000 && numero <= 8499999999) {
        resultado = "-PODA";
    }
    else {
        resultado = "-INJE";
    }

    document.getElementById("numerin").innerHTML =
        localStorage.getItem("numerin") + resultado;
}

if (localStorage.getItem("tufoto") == 1) {
    localStorage.setItem("fotopuesta", "../../recursos/fotos-de-perfil/alerta.png");
}
if (localStorage.getItem("tufoto") == 2) {
    localStorage.setItem("fotopuesta", "../../recursos/fotos-de-perfil/bingus.png");
}
if (localStorage.getItem("tufoto") == 3) {
    localStorage.setItem("fotopuesta", "../../recursos/fotos-de-perfil/ataqueferro.png");
}
if (localStorage.getItem("tufoto") == 4) {
    localStorage.setItem("fotopuesta", "../../recursos/fotos-de-perfil/negrete.gif");
}
if (localStorage.getItem("tufoto") == 5) {
    localStorage.setItem("fotopuesta", "../../recursos/fotos-de-perfil/perrete.gif");
}








async function descargarDNI() {

    const dni = document.getElementById("perfil-page");

    const canvas = await html2canvas(dni, {

        scale: 2,
        useCORS: true,
        backgroundColor: null,

        windowWidth: 1440,
        windowHeight: 1200,

        width: 850,

        onclone: function(documento) {

            const perfil = documento.getElementById("perfil-page");
            const nombre = documento.getElementById("nombre-de-perfil-page");

            perfil.style.width = "850px";
            perfil.style.minWidth = "850px";
            perfil.style.maxWidth = "850px";
            perfil.style.boxSizing = "border-box";

            // Recuperar el diseño original del nombre
            nombre.style.fontSize = "50px";
            nombre.style.marginLeft = "5%";
            nombre.style.marginTop = "4%";

        }
    });

    canvas.toBlob(function(blob) {

        if (!blob) return;

        const enlace = document.createElement("a");

        enlace.href = URL.createObjectURL(blob);
        enlace.download = "Certificado-" + localStorage.getItem("tunombre") + ".png";

        enlace.click();

        URL.revokeObjectURL(enlace.href);

    }, "image/png");

}



