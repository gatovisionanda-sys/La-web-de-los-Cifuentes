function adrianasaltee() {
    const topSecretElement = document.getElementById('topsecret');
    
    if (topSecretElement) {
        topSecretElement.addEventListener('click', function() {

            if (!document.getElementById('btnsecreto')) {
                const nuevoBoton = document.createElement('button');
                nuevoBoton.id = 'btnsecreto';
                nuevoBoton.textContent = 'Acceder a pagina supersecreta';
                nuevoBoton.style.display = 'block';
                nuevoBoton.style.marginTop = '10px';
                nuevoBoton.style.marginBottom = '20px';
                nuevoBoton.addEventListener('click', function() {
                    window.location.href = 'paginatopsecret/identifiquese.html';
                });
                
                topSecretElement.after(nuevoBoton);
                document.getElementById("topsecret").remove();
            }
            
        });
    }
}

document.addEventListener('DOMContentLoaded', adrianasaltee);