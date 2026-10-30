function ari() {
    const topSecretElement = document.getElementById('topsecret');
    
    if (topSecretElement) {
        topSecretElement.addEventListener('click', function() {
            // Evitamos duplicados comprobando si el botón ya fue creado
            if (!document.getElementById('btnsecreto')) {
                const nuevoBoton = document.createElement('button');
                nuevoBoton.id = 'btnsecreto';
                nuevoBoton.textContent = 'Acceder a pagina supersecreta';
                nuevoBoton.style.display = 'block';
                nuevoBoton.style.marginTop = '10px';
                
                nuevoBoton.addEventListener('click', function() {
                    window.location.href = 'paginatopsecret/xd.html';
                });
                
                topSecretElement.after(nuevoBoton);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', ari);