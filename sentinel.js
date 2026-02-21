const crypto = require('crypto');

class DealSentinel {
    constructor() {
        this.baseline = {}; // Almacena el comportamiento normal aprendido
        this.threatScore = 0;
        this.trustedApps = ['vercel-deploy', 'render-internal', 'github-actions'];
    }

    // Analiza la petición de la App de terceros
    analyzeActivity(appName, action, metadata) {
        const timestamp = Date.now();
        
        // APRENDIZAJE: Si es una app nueva o acción inusual, eleva el Score
        if (!this.trustedApps.includes(appName)) {
            this.threatScore += 20;
            console.warn(`>> [ALERT]: App no identificada intentando acceso: ${appName}`);
        }

        // PREDICCIÓN: Patrones de acceso masivo en poco tiempo (Posible Espionaje/Hack)
        if (this.baseline[appName] && (timestamp - this.baseline[appName].lastSeen < 100)) {
            this.threatScore += 50;
            this.triggerLockdown(appName);
        }

        this.baseline[appName] = { lastSeen: timestamp, lastAction: action };
    }

    triggerLockdown(appName) {
        console.error(`>> [CRITICAL]: Amenaza detectada en ${appName}. Bloqueando túneles de datos...`);
        // Lógica de desconexión de emergencia
    }
}

module.exports = new DealSentinel();
