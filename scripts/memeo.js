payo = localStorage.getItem("puepasar");

function espia()
{
    if (localStorage.getItem("puepasar") === "false")
    {
        localStorage.setItem("sinverguenza" , "lo-eres");
    }
        else
        {
        localStorage.setItem("puepasar", "false");
        }
}
function perdon()
{
    localStorage.removeItem("puepasar");
    localStorage.removeItem("sinverguenza");
}