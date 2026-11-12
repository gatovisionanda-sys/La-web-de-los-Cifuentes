let autorizado = localStorage.getItem("sesion_iniciada");
let rutaBase1 = "../../";
clave="zamarrete123";

if (autorizado !== "true") {
    let contra = prompt("Pero zamarruzo, que pa entrar aqui tienes que poner la CONTRASEÑA:");

    while (contra !== clave) {
        if (contra === null) {
            window.close();
            window.location.href = rutaBase1+"index.html";
            break;
        }
        contra = prompt("Contraseña incorrecta ZAMARRO. Inténtalo de nuevo:");
    }

    if (contra === clave) {
        localStorage.setItem("sesion_iniciada", "true");
        if (localStorage.getItem("tunombre"))
        {
            console.log("ya ta inisiao achoo")
        }
        else
        {
        novato2();
        generarNumerin3();
        }
    }
}

function generarNumerin3() {
    let numero = "";

    for (let i = 0; i < 10; i++) {
        numero += Math.floor(Math.random() * 10);
    }

    localStorage.setItem("numerin", numero);
}

function novato2()
{
    if (localStorage.getItem("novato"))
    {
        if (!localStorage.getItem("tunombre"))
        {
            let insistelepaqui = confirm("Neeeene que aun no sabemos como te llamas, dinoslooo.")
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