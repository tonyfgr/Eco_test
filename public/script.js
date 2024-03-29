// script.js

// Función para mostrar un mensaje de confirmación al enviar el formulario de contacto
function mostrarConfirmacion() {
    alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo muy pronto.');
}

// Asignar la función 'mostrarConfirmacion' al evento 'submit' del formulario de contacto
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    mostrarConfirmacion();
});
