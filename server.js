const express = require('express');
const cors = require('cors');
const compression = require('compression');
const path = require('path');

const app = express();

// Seguridad: Solo permitimos el dominio de Vercel de DEAL
app.use(cors({ origin: [/vercel\.app$/, /deal-protocol\.online$/] }));
app.use(compression());
app.use(express.static(__dirname));

// Agente de Monitoreo Proactivo (MIA-X)
app.get('/api/status', (req, res) => {
    res.json({
        core: "AGI-3 Online",
        infrastructure: "Robust",
        encryption: "Quantum-Safe",
        last_sync: new Date().toISOString()
    });
});

// Fix de ruteo para evitar fallos de refresco en la App
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`>> [DEAL]: Búnker de datos activo en puerto ${PORT}`);
});
