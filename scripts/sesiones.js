let sesion = localStorage.getItem("sesion_iniciada");

function cerrarSesion()
{
    let respuesta = confirm("¿Estás seguro del to del to?");

    if (respuesta)
    {
        window.location.href = "../index.html";
        localStorage.removeItem("sesion_iniciada");
        localStorage.removeItem("excelentisimo");
    }
}

function iniciarDesdePagina()
{
    window.location.href = "paginas/dfjknhyu8u45i3rokef904u93i4oefuhu19i04o32ru3uf9i2o3uqthu43jiru1h839u2oithug34q92i2t4ini1o9u4t.html";
}