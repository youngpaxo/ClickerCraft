let currentLevel = 0; // Nivel inicial del jugador
let currentXP = 0; // Experiencia inicial del jugador

// Función para calcular la experiencia necesaria para alcanzar un nivel en Minecraft
function calculateMinecraftXP(level) {
    if (level <= 15) {
        return 2 * level + 7;
    } else if (level <= 30) {
        return 5 * level - 38;
    } else {
        return 9 * level - 158;
    }
}

// Función para actualizar la barra de progreso y el indicador de nivel
function updateUI(currentXP, nextLevelXP) {
    // Actualiza la barra de progreso
    const percentage = (currentXP / nextLevelXP) * 100;
    var progressBar = document.querySelector('.experience-bar-progress');
    progressBar.style.width = percentage + '%';

    // Actualiza el indicador de nivel
    document.getElementById('level-indicator').innerText = '' + currentLevel;
}

// Manejador de evento de clic para el clickerzone
document.getElementById('clickerzone').addEventListener('click', function () {
    currentXP++; // Aumenta la experiencia con cada clic
    const nextLevelXP = calculateMinecraftXP(currentLevel + 1);
    if (currentXP >= nextLevelXP) {
        currentLevel++; // Incrementa el nivel si se alcanza la XP necesaria
        currentXP = 0; // Restablece la experiencia para el nuevo nivel
    }
    updateUI(currentXP, nextLevelXP);
});

// Inicializa la UI
updateUI(0, calculateMinecraftXP(currentLevel + 1));

var clickZone = document.getElementById('clickerzone');

//animacion click

clickZone.addEventListener('mousedown', function () {
    this.classList.add('clicked'); // Añade la clase al hacer clic
});

clickZone.addEventListener('mouseup', function () {
    this.classList.remove('clicked'); // Elimina la clase al soltar el clic
});

// Opcional: eliminar la clase si el usuario mueve el cursor fuera del elemento mientras mantiene el clic
clickZone.addEventListener('mouseleave', function () {
    this.classList.remove('clicked');
});
