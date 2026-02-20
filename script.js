const vcDisplay = document.getElementById('vc-display');
const rwaDisplay = document.getElementById('rwa-display');
const logLines = document.querySelector('.log-lines');

// Simulación de datos en tiempo real
let currentVc = 450000000;
let currentRwa = 720000000;

function updateData() {
    currentVc += Math.floor(Math.random() * 1000000) - 500000; // Fluctuación de VC
    currentRwa += Math.floor(Math.random() * 500000) - 250000; // Fluctuación de RWA

    vcDisplay.textContent = `$${currentVc.toLocaleString()}`;
    rwaDisplay.textContent = `${(currentRwa / 1000000).toFixed(0)}M`;

    // Simulación de logs
    const newLog = document.createElement('span');
    const logs = [
        `[MIA-X] DATA_UPDATE: ${new Date().toLocaleTimeString()}`,
        `[AUDIT] VERITAS_CHECK: PASSED`,
        `[NETWORK] LATENCY: ${Math.floor(Math.random() * 50) + 10}ms`,
        `[RWA] NEW_ALLOCATION: ${Math.floor(Math.random() * 100)}K`
    ];
    newLog.textContent = logs[Math.floor(Math.random() * logs.length)];
    logLines.appendChild(newLog);
    if (logLines.children.length > 5) { // Mantener solo 5 líneas
        logLines.removeChild(logLines.firstElementChild);
    }
}

setInterval(updateData, 2000); // Actualiza cada 2 segundos
updateData(); // Llamada inicial

// Placeholder para la imagen del mapa de calor
// Asegúrate de reemplazar 'https://i.imgur.com/your-rwa-heatmap-image.png'
// con la URL real de tu imagen de mapa de calor de RWA.
// Podrías generar una imagen de mapa de calor dinámico o usar un placeholder estático por ahora.
// Para un efecto dinámico real, necesitarías una API de terceros o generar el mapa con Three.js como en Vercel.

