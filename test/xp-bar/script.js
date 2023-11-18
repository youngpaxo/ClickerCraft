// Función para obtener el valor de XP del input
function getXP() {
    var xpInput = document.getElementById('xp');
    var xp = parseInt(xpInput.value, 10);
    return xp; // No es necesario comprobar si es NaN, ya que el range siempre devuelve un número
}

// Función para actualizar la barra de progreso
function updateProgressBar(percentage) {
    if (
        typeof percentage === 'number' &&
        percentage >= 0 &&
        percentage <= 100
    ) {
        var progressBar = document.querySelector('.experience-bar-progress');
        progressBar.style.width = percentage + '%';
    } else {
        console.error('El porcentaje proporcionado no es válido:', percentage);
    }
}

// Agregar un event listener al input para actualizar la barra cuando cambie el valor
var xpInput = document.getElementById('xp');
xpInput.addEventListener('input', function () {
    var xp = getXP();
    updateProgressBar(xp);
});
