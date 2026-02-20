const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(helmet({ contentSecurityPolicy: false })); // Swarm-Friendly CSP
app.use(compression());
app.use(express.static(path.join(__dirname, '/')));

// API de Monitoreo de Enjambre y RWA
app.get('/api/v6/status', (req, res) => {
    res.json({
        network: "DEAL-Sovereign-Swarm",
        nodes: ["Atacama-Backbone", "RWA-Oracle-SOL", "VC-Engine"],
        status: "OPTIMIZED",
        visuals: "GL-ACCELERATED"
    });
});

app.get('*', (req, res) => { res.sendFile(path.join(__dirname, 'index.html')); });

app.listen(PORT, '0.0.0.0', () => {
    console.log(`>> [DEAL]: Red Neuronal activa en puerto ${PORT} (Node 24)`);
});
