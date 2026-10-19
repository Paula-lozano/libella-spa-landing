// ======================================================
// LIBELLA SPA - JAVASCRIPT
// ======================================================


// ------------------------------------------------------
// 1. MENÚ PARA DISPOSITIVOS MÓVILES
// ------------------------------------------------------

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {

    nav.classList.toggle("active");

});


// Cerramos el menú cuando el usuario selecciona una opción.

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});


// ------------------------------------------------------
// 2. PREGUNTAS FRECUENTES
// ------------------------------------------------------

const preguntas = document.querySelectorAll(".faq-question");

preguntas.forEach(function (pregunta) {

    pregunta.addEventListener("click", function () {

        const faqItem = pregunta.parentElement;

        faqItem.classList.toggle("active");


        // Más adelante GTM podrá utilizar esta información
        // para registrar el evento de apertura de FAQ.

        if (faqItem.classList.contains("active")) {

            const nombrePregunta =
                pregunta.getAttribute("data-question");

            console.log(
                "FAQ abierta:",
                nombrePregunta
            );

        }

    });

});


// ------------------------------------------------------
// 3. FORMULARIO
// ------------------------------------------------------

const formulario =
    document.getElementById("contact-form");

const mensajeFormulario =
    document.getElementById("form-message");


formulario.addEventListener("submit", function (event) {

    // Evitamos que la página se recargue.
    event.preventDefault();


    const nombre =
        document.getElementById("nombre").value.trim();

    const correo =
        document.getElementById("correo").value.trim();

    const telefono =
        document.getElementById("telefono").value.trim();

    const servicio =
        document.getElementById("servicio").value;


    // Validación sencilla.

    if (
        nombre === "" ||
        correo === "" ||
        telefono === "" ||
        servicio === ""
    ) {

        mensajeFormulario.textContent =
            "Por favor completa todos los campos.";

        return;
    }


    // Mensaje temporal.
    // Posteriormente este formulario será reemplazado
    // o conectado con HubSpot.

    mensajeFormulario.textContent =
        "¡Gracias, " + nombre +
        "! Recibimos tu información correctamente.";


    // Evento que posteriormente podremos utilizar
    // para Google Tag Manager.

    console.log(
        "Formulario enviado:",
        servicio
    );


    // Limpiamos los campos.

    formulario.reset();

});


// ------------------------------------------------------
// 4. CLIC EN BOTONES DE RESERVA
// ------------------------------------------------------

const botonesReserva =
    document.querySelectorAll("[data-event]");


botonesReserva.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const evento =
            boton.getAttribute("data-event");

        console.log(
            "Interacción:",
            evento
        );

    });

});


// ------------------------------------------------------
// 5. CLIC EN REDES SOCIALES
// ------------------------------------------------------

const redes =
    document.querySelectorAll(".social-link");


redes.forEach(function (red) {

    red.addEventListener("click", function (event) {

        // Temporalmente los enlaces utilizan #,
        // por eso evitamos que la página salte arriba.

        if (red.getAttribute("href") === "#") {
            event.preventDefault();
        }


        const redSocial =
            red.getAttribute("data-social");


        console.log(
            "Clic en red social:",
            redSocial
        );

    });

});


// ------------------------------------------------------
// 6. BOTÓN VOLVER ARRIBA
// ------------------------------------------------------

const botonArriba =
    document.getElementById("back-to-top");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        botonArriba.classList.add("show");

    } else {

        botonArriba.classList.remove("show");

    }

});


botonArriba.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ------------------------------------------------------
// 7. AÑO AUTOMÁTICO DEL FOOTER
// ------------------------------------------------------

const year =
    document.getElementById("year");

year.textContent =
    new Date().getFullYear();