function changeLanguage(lang) {

    document.querySelectorAll(".idioma").forEach(button => {
        button.classList.remove("activo");
    });

    document
        .querySelector(`.idioma[onclick="changeLanguage('${lang}')"]`)
        .classList.add("activo");

    // Acá  cambio de idioma
}