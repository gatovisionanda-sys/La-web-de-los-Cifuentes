let autorizado = localStorage.getItem("sesion_iniciada");
let clave = "zamarrete123";
let admin = "ferreteadmin";

if (autorizado !== "true") {
    let contra = prompt("Muchacho tamien pon la contraseña:");

    while (contra !== clave) {
        if (contra === admin) {
            localStorage.setItem("excelentisimo", "true");
            localStorage.setItem("sesion_iniciada", "true");
            window.location.href = rutaBase+"index.html";
            window.close();
            break;
        }
        if (contra === null) {
            window.location.href = rutaBase+"index.html";
            window.close();
            break;
        }

        contra = prompt("Contraseña incorrecta ZAMARRO. Inténtalo de nuevo:");
    }

    if (contra === clave) {
        localStorage.setItem("sesion_iniciada", "true");
        if (localStorage.getItem("tunombre"))
        {
        window.location.href = rutaBase+"index.html";
        window.close();
        }
        else
        {
        let nombre = prompt("¿Como te llamas?");
        localStorage.setItem("tunombre", nombre);
        window.location.href = rutaBase+"index.html";
        window.close();
        }
    }
}
