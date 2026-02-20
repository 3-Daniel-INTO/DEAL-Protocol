const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Agentes Enjambre: Protección y Optimización
app.use(helmet({ contentSecurityPolicy: false })); // Permite assets de DALabs
app.use(compression()); 

app.use(express.static(path.join(__dirname, '/')));

// Endpoint de Diagnóstico de Enjambre
app.get('/swarm-status', (req, res) => {
    res.json({
        portal: "DEAL_SOVEREIGN",
        nodes: ["Atacama_Alpha", "Sat_Link_01", "G_AGI_Core"],
        status: "HEALED",
        memory: "MIA-X_ACTIVE",
        engine: process.version
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`>> [DEAL ENJAMBRE]: Subnodos reconectados en puerto ${PORT}`);
});
