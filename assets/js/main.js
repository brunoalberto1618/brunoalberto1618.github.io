
// Anula o comportamento default de envio de formulário
document.getElementById("submit").addEventListener("submit", function(e) {
    e.preventDefault();
});

// Código para tornar mais suave o rolamento para as seções ao selecionar os links correspondentes
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[href^='#']");

    for (let i=0; i < links.length; i++) {
        links[i].addEventListener("click", scrollToSection);  
    }

    function scrollToSection(e) {
        e.preventDefault();

        const href = this.getAttribute("href");
        const targetElement = document.querySelector(href);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth"});
        }
    }
});