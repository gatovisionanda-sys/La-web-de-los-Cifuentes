// Si ya hay un número guardado, úsalo; si no, empieza en 1
let seleco = Number(localStorage.getItem("tufoto")) || 1;
// NUMERO DE FOTOS DISPONIBLES:
const tope = 5;

function camnombre ()
{
        let nombre = prompt("¿Como te llamas?");
        localStorage.setItem("tunombre", nombre);
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

if (localStorage.getItem("tufoto") == 1) {
    localStorage.setItem("fotopuesta", "../recursos/fotos-de-perfil/alerta.png");
}
if (localStorage.getItem("tufoto") == 2) {
    localStorage.setItem("fotopuesta", "../recursos/fotos-de-perfil/bingus.png");
}
if (localStorage.getItem("tufoto") == 3) {
    localStorage.setItem("fotopuesta", "../recursos/fotos-de-perfil/ataqueferro.png");
}
if (localStorage.getItem("tufoto") == 4) {
    localStorage.setItem("fotopuesta", "../recursos/fotos-de-perfil/negrete.gif");
}
if (localStorage.getItem("tufoto") == 5) {
    localStorage.setItem("fotopuesta", "../recursos/fotos-de-perfil/perrete.gif");
}