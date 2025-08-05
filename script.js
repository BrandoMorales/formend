const inputs = document.querySelectorAll('#miFormulario input, #miFormulario select, #miFormulario textarea');
const progreso = document.getElementById('progreso');
const porcentajeTexto = document.getElementById('porcentaje');

     const emailInput = document.getElementById('email');
const errorEmail = document.getElementById('errorEmail');

emailInput.addEventListener('input', function() {
    const valor = emailInput.value.trim();
    if (!validarEmail(valor)) {
        errorEmail.textContent = 'Correo no válido. Debe ser formato ejemplo@correo.com';
        emailInput.setCustomValidity('Correo inválido');
    } else {
        errorEmail.textContent = '';
        emailInput.setCustomValidity('');
    }
});

function validarEmail(email) {
    // Expresión regular básica para validar email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
 


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("miFormulario");

    form.addEventListener("submit", function(event) {
        let valid = true;
        let mensajes = [];

        // Validar primer select
        const optionSelect = document.getElementById("optionSelect");
        if (optionSelect.value === "Selecciona una opcion") {
            valid = false;
            mensajes.push("Debes escoger una opción en el primer campo.");
        }

        // Validar SI INICIA TORNEO
        const radiosBuyCar = document.querySelectorAll('input[name="buyCar"]');
        const seleccionado = Array.from(radiosBuyCar).some(r => r.checked);
        if (!seleccionado) {
            valid = false;
            mensajes.push("Debes escojer si planeas iniciar un torneo.");
        }

        // Validar marca deportiva
        const carBrand = document.getElementById("carBrand");
        if (carBrand.value === "Selecciona una opcion") {
            valid = false;
            mensajes.push("Debes escoger una marca deportiva.");
        }

        // Validar deporte practicado
        const cardBrand = document.querySelectorAll('input[name="carBrand"]:checked');
        if (carBrand.value === 0) {
            valid = false;
            mensajes.push("Debes seleccionar al menos un deporte que practiques.");
        }

        // Si hay errores, cancelar envío
        if (!valid) {
            event.preventDefault();
            alert(mensajes.join("\n"));
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("miFormulario");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // evita el envío automático
    alert("El formulario fue enviado correctamente");
    formulario.reset(); // limpia el formulario si lo deseas
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("miFormulario");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // evita el envío automático
    alert("El formulario fue enviado correctamente");
    formulario.reset(); // limpia el formulario si lo deseas
  });
});
