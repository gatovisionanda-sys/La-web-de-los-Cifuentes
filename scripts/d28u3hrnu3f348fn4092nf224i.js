let autorizado = localStorage.getItem("sesion_iniciada");

clave="zamarrete123";
admin="ferreteadmin"

if (autorizado !== "true") {
    let contra = prompt("Muchacho tamien pon la contraseña:");

    while (contra !== clave) {
        if (contra === admin)
        {
            window.close();
            window.location.href = "../index.html";
            localStorage.setItem("excelentisimo", "true");
            localStorage.setItem("sesion_iniciada", "true");
            break
        }
        if (contra === null)
        {
            window.close();
            window.location.href = "../index.html";
            break
        }

        contra = prompt("Contraseña incorrecta ZAMARRO. Inténtalo de nuevo:");
    }

    if (contra === clave) {
        localStorage.setItem("sesion_iniciada", "true");
        window.location.href = "../index.html";
    }
}
