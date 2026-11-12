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
        novato();
        generarNumerin2();
        window.location.href = rutaBase+"index.html";
        window.close();
        }
    }
}

function generarNumerin2() {
    let numero = "";

    for (let i = 0; i < 10; i++) {
        numero += Math.floor(Math.random() * 10);
    }

    localStorage.setItem("numerin", numero);
}

function novato()
{
    if (localStorage.getItem("novato"))
    {
        if (!localStorage.getItem("tunombre"))
        {
            let insistelepaqui = confirm("Neeeene que aun no sabemos tu nombre, hazte el certificao digitaaal.")
                if (insistelepaqui)
                {
                location.href = "../../paginas/carpeta-ciudadana/index.html#perfil-page"
                }
        }
    }
    else
    {
        let tutorial = confirm("Me paece que eres nuevo ¿Quieres hacer tu certificao digital? (O puedes hacerlo luego tocando en tu perfil)")
        localStorage.setItem("novato" , "ya no");
        if (tutorial)
        {
        location.href = "../../paginas/carpeta-ciudadana/index.html#perfil-page"
        }
    }
}