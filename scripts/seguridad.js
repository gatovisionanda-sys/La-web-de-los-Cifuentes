document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }

    if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        return false;
    }

    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        return false;
    }

    // Ctrl+S (Guardar página) - Opcional, por si acaso
    if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        return false;
    }
});