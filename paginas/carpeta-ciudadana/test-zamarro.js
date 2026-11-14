function confirzamarro() {
    if (confirm("¿Ya lo quieres enviar neeeene?")) {
        enviarzamarro();
    }
    else {
        return false;
    }
}

function enviarzamarro() {
    let autoperce = document.querySelector('[name="percep"]').value;
    localStorage.setItem("autoperce", autoperce);

    let total = 0;
    let maximo = 0;
    const pregun = 15;

    const pesos = [
        3.5, 1, 2, 2.5, 1, 3, 2.5, 2, 0.5, 1.25, 1, 1.5, 3.5, 0.25, 3
    ];

    const invertidas = [8, 11];

    for (let i = 1; i <= pregun; i++) {
        let respuesta = zamatest["pr" + i].selectedIndex - 1;

        if (invertidas.includes(i)) {
            respuesta = 4 - respuesta;
        }

        total += respuesta * pesos[i - 1];
        maximo += 4 * pesos[i - 1];
    }

    let porcentaje = parseInt((total / maximo) * 100);

    if (porcentaje < 0) {
        porcentaje = 0;
    }

    if (porcentaje > 95) {
        porcentaje = 100;
    }

    console.log("Tu puntuación es: " + porcentaje + "%");

    localStorage.setItem("Zamarreza", porcentaje);
}

function mostrarResultado()
{
    let zamarreza = localStorage.getItem("Zamarreza");
    let nombre = localStorage.getItem("tunombre");
    let analisis = document.getElementById("mi-analisis");
    document.getElementById("mi-porcentaje").innerHTML = '<span style="color: rgb(206, 49, 127);">' + nombre + '</span> usted es ' + '<span id="porcencolor">' + zamarreza + '%</span> zamarro';

    if (zamarreza < 5)
    {
        document.getElementById("porcencolor").style.color = "green";
        analisis.innerHTML = 'Si caaaaaro<br><span class="definicion">No te lo crees ni tú, zamarruzo y encima un MENTIROSASCO.<br>Probablemente acabarás en la cárcel o siendo político.</span>'
    }
    if ((zamarreza >= 5) && (zamarreza < 10))
    {
        document.getElementById("porcencolor").style.color = "green";
        analisis.innerHTML = 'Persona mu honrá:<br><span class="definicion">Al parecer eres una planta que se está quietecica (según tú).<br>Tu zamarreza en sangre es extremadamente baja, por lo cual es probable que: <ul><li>O no seas cifuentes</li><li>O no te enteres de na</li></ul></span>'
    }
    if ((zamarreza >= 10) && (zamarreza < 20))
    {
        document.getElementById("porcencolor").style.color = "green";
        analisis.innerHTML = 'Mu poco mu poco:<br><span class="definicion">Eres más bueno que el pan, tu zamarreza en sangre es muy baja, por lo cual es probable que: <ul><li>Los animales te quieran</li><li>Cuando te mueras to el mundo dirá que te conocía y que eras bueniiismo</li></ul></span>'
    }
    if ((zamarreza >= 20) && (zamarreza < 30))
    {
        document.getElementById("porcencolor").style.color = "rgb(70, 120, 0)";
        analisis.innerHTML = 'Un poquete zamarro:<br><span class="definicion">Eres mu güena gente pero de vez en cuando pos haces algo mal, como tol mundo.<br>Tu zamarreza en sangre es baja, por lo cual es probable que:<ul><li>De normal no te afectan los latosos, menos alguna vez.</li><li>Los primos se quieren sentar a tu lao porque casi siempre hay mu buen ambiente.</li></ul></span>'
    }
    if ((zamarreza >= 30) && (zamarreza < 40))
    {
        document.getElementById("porcencolor").style.color = "rgb(142, 158, 0)";
        analisis.innerHTML = 'Pos ya un zamarrete:<br><span class="definicion">Pos una persona más o menos normaleja, pero zamarrete, y eso no te lo quita nadie.<br>Tu zamarreza en sangre es moderada, por lo cual es probable que:<ul><li>Seas de la derechita cobarde.</li><li>En vez en cuando haces alguna trastá así suelta cuando estás con la guasa o embromao.</li></ul></span>'
    }
    if ((zamarreza >= 40) && (zamarreza < 50))
    {
        document.getElementById("porcencolor").style.color = "rgb(175, 172, 0)";
        analisis.innerHTML = 'Zamarrete de padrón:<br><span class="definicion">Unos días haces zamarrás y otros no, depende como te pille...<br>Tu zamarreza en sangre es mediole, por lo cual es probable que:<ul><li>No tengas ni frío ni calor.</li><li>Las matas callando</li><li>La gente no se lo suele esperar, pero les hacés zamarradas.</li></ul></span>'
    }
    if ((zamarreza >= 50) && (zamarreza < 60))
    {
        document.getElementById("porcencolor").style.color = "rgb(218, 178, 0)";
        analisis.innerHTML = 'Zamarro a considerar:<br><span class="definicion">Tampoco estás to el día, pero cuando puedes las sueltas bien, con 50 ya es zamarro de oficio.<br>Tu zamarreza en sangre es mediole-alta, por lo cual es probable que:<ul><li>Eres latoso solo cuando te da</li><li>Tienes algo de malicia tamién.</li></ul></span>'
    }
    if ((zamarreza >= 60) && (zamarreza < 70))
    {
        document.getElementById("porcencolor").style.color = "rgb(235, 125, 0)";
        analisis.innerHTML = 'El zamarro estándar:<br><span class="definicion">Haces zamarradas casi a diario y estás bastante pendiente de tu alrededor por si aparece alguna oportunidad clara pa hacer algo.<br>Tu zamarreza en sangre es alta, por lo cual es probable que:<ul><li>Piensas mal de la gente cuando puedes</li><li>Hagas alguna guasa así tipical zamarris.</li></ul></span>'
    }
    if ((zamarreza >= 70) && (zamarreza < 80))
    {
        document.getElementById("porcencolor").style.color = "rgb(238, 87, 0)";
        analisis.innerHTML = 'Gran zamarro<br><span class="definicion">Eres zamarro de carrera, experto en investigar nuevas guasas, hacer rabiar, y dar la lata de contino.<br>Su zamarreza en sangre es bastante alta, por lo cual es probable que:<ul><li>Te gusta darle por saco al AWELO y sacarlo de sus casillas</li><li>Tengas muchisma malicia jugando al chinchón</li><li>Critiques a tos</li></ul></span>'
    }
    if ((zamarreza >= 80) && (zamarreza < 90))
    {
        document.getElementById("porcencolor").style.color = "rgb(238, 48, 0)";
        analisis.innerHTML = 'Un zamarrusco que pa que<br><span class="definicion">Matrícula de honor en el doble sentido y en los achaques, además de dominar el uso del factor sorpresa.<br>Su zamarreza en sangre es muy alta, por lo cual es probable que:<ul><li>No des puntás sin hilo</li><li>Lo quieras to pa ti</li><li>Tengas más malicia que la casa el cerro (que se esperó a hundirse de que estaba el guarda dentro)</li></ul></span>'
    }
    if ((zamarreza >= 90) && (zamarreza < 100))
    {
        document.getElementById("porcencolor").style.color = "rgb(202, 0, 0)";
        analisis.innerHTML = 'De la élite zamarral<br><span class="definicion">Has estao apuntico de llevarte el premio gordo, tu zamarreza no tiene ningún tipo de límites, vives por y para ser zamarro, pasas por encima de lo que sea con tal de joder a tos.<br>Su zamarreza en sangre es extremadamente alta, por lo cual es probable que:<ul><li>Caín a tu lao se quede en mantillas</li><li>Te gusta ver el mundo arder a toda costa.</li><li>Seas más malo que un dolor a medianoche</li></ul></span>'
    }
    if (zamarreza > 99)
    {
        document.getElementById("porcencolor").style.color = "rgb(114, 0, 0)";
        analisis.innerHTML = 'El premio gordo<br><span class="definicion">Que barbaridad, eres la cosa más mala ka pario el mundo, seguro que tú le diste clase a cierto alemán con bigote.<br>Su sangre es literalmente zamarrería pura, no hay nada más, por lo cual es probable que:<ul><li>Si te muerdes la lengua te envenenes.</li><li>Una zamarrada tuya libera tanta energía como la que consume España en un año</li><li>Eres mala hierba y por consecuente nunca mueres</li></ul></span>'
    }
}

async function descargarZamaTest() {

    const dni = document.getElementById("tarjeta-zamarro");

    const canvas = await html2canvas(dni, {
        scale: 2,
        useCORS: true,
        backgroundColor: null
    });

    canvas.toBlob(function(blob) {

        const enlace = document.createElement("a");

        enlace.href = URL.createObjectURL(blob);
        enlace.download = "Zamarreza de " + localStorage.getItem("tunombre") + ".png";

        enlace.click();

        URL.revokeObjectURL(enlace.href);

    }, "image/png", 0.95);
}