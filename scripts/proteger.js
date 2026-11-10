let autorizado = localStorage.getItem("sesion_iniciada");

clave="zamarrete123";

if (autorizado !== "true") {
    let contra = prompt("Muchacho tamien pon la contraseña:");

    while (contra !== clave) {
        if (contra === null) {
            window.close();
            window.location.href = "../index.html";
            break;
        }
        contra = prompt("Contraseña incorrecta ZAMARRO. Inténtalo de nuevo:");
    }

    if (contra === clave) {
        localStorage.setItem("sesion_iniciada", "true");
        if (localStorage.getItem("tunombre"))
        {
            console.log("yata")
        }
        else
        {
        let nombre = prompt("¿Como te llamas?");
        localStorage.setItem("tunombre", nombre);
        }
    }
}
