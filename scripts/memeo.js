let payo = localStorage.getItem("puepasar");

if (payo === "false") {
    window.location.replace("../paginatopsecret/carcel.html");
}

function espia() {
    localStorage.setItem("puepasar", "false");
    window.location.replace("../paginatopsecret/carcel.html");
}

function perdon() {
    localStorage.setItem("puepasar", "true");
}