let sesion = localStorage.getItem("sesion_iniciada");
let rutaBase = "../../";
function cerrarSesion()
{
    let respuesta = confirm("¿Estás seguro del to del to?");

    if (respuesta)
    {
        window.location.href = rutaBase+"index.html";
        localStorage.removeItem("sesion_iniciada");
        localStorage.removeItem("excelentisimo");
    }
}

if (!localStorage.getItem("tunombre") || localStorage.getItem("tunombre") === "null" || localStorage.getItem("tunombre").trim() === "") {
    document.getElementById("tu-elemento-id")?.remove();
}

if (!localStorage.getItem("biografia") || localStorage.getItem("biografia") === "null" || localStorage.getItem("biografia").trim() === "") {
    localStorage.removeItem("biografia");
}

function iniciarDesdePagina()
{
    window.location.href = rutaBase+"paginas/dfjknhyu8u45i3rokef904u93i4oefuhu19i04o32ru3uf9i2o3uqthu43jiru1h839u2oithug34q92i2t4ini1o9u4t.html";
}

document.addEventListener("DOMContentLoaded", function() {
        // Comprobamos qué valor tiene realmente la sesión en la consola
        console.log("Valor actual de sesion_iniciada:", localStorage.getItem("sesion_iniciada"));

        if (localStorage.getItem("sesion_iniciada") !== "true") {
            console.log("Sesión no iniciada. Eliminando elementos de perfil...");
            
            document.getElementById("perfil")?.remove();
            document.getElementById("perfil-top")?.remove();
            document.getElementById("foto-de-perfil")?.remove();
            document.getElementById("nombre-de-perfil")?.remove();
        } else {
            console.log("Sesión activa. Los elementos de perfil se quedan.");
        }
    });

document.addEventListener("DOMContentLoaded", function() {
        // Comprobamos qué valor tiene realmente la sesión en la consola
        console.log("Valor actual de sesion_iniciada:", localStorage.getItem("sesion_iniciada"));

        if (localStorage.getItem("sesion_iniciada") == "true")
        {   
            if (localStorage.getItem("tufoto"))
            {
            document.getElementById("foto-de-perfil").src = localStorage.getItem("fotopuesta")
            }
            else
            {
              if (localStorage.getItem("fotourl"))
              {
                document.getElementById("foto-de-perfil").src = localStorage.getItem("fotopuesta");
              }
            }
            if (localStorage.getItem("tunombre"))
            {
            document.getElementById("nombre-de-perfil").innerHTML = localStorage.getItem("tunombre");
            }
        }
    });

        let meloinvento = localStorage.getItem("tunombre");

        if (meloinvento && meloinvento !== "null" && meloinvento.trim() !== "")
        {
            console.log("hay nombre")
        } else {
            // Si no hay nombre válido, limpiamos el elemento y aseguramos que se borre del localStorage
            document.getElementById("perfil")?.remove();
            localStorage.removeItem("tunombre");
        }