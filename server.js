const express = require('express');
const ark = require('./app/core/ark_protocol');
const app = express();

app.get('/api/node-status', (req, res) => {
    res.json({
        status: "Regenerative",
        active_swarm: "MIA-X Extensions v29",
        quantum_sync: "Satelital Protected"
    });
});

// Listener de amenazas para activar niveles de apagado
app.post('/api/security/alert', (req, res) => {
    const { level } = req.body;
    ark.triggerResponse(level);
    res.send("Protocolo ARK Actualizado");
});

app.listen(process.env.PORT || 3000, () => {
    console.log(">> [DEAL]: Nodos de 5ta Generación Online. Tecnología de Enjambre Activa.");
});
