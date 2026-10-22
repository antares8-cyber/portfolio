document.addEventListener("DOMContentLoaded", () => {

    const botonesFiltro = document.querySelectorAll(".filtro-proyecto");
    const proyectos = document.querySelectorAll(".proyecto-card");


    botonesFiltro.forEach(boton => {

        boton.addEventListener("click", () => {

            // Filtro seleccionado
            const filtro = boton.dataset.filtro;


            // Cambiar botón activo
            botonesFiltro.forEach(btn => {
                btn.classList.remove("activo");
            });

            boton.classList.add("activo");


            // Mostrar / ocultar proyectos
            proyectos.forEach(proyecto => {

                const categoria = proyecto.dataset.categoria;

                if (filtro === "todos" || categoria === filtro) {

                    proyecto.classList.remove("oculto");

                } else {

                    proyecto.classList.add("oculto");

                }

            });

        });

    });

});