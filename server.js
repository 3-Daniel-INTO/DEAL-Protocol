const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();

app.use(compression());
app.use(express.static(__dirname));

// Agente de Supervisión MIA-X
app.get('/health', (req, res) => {
    res.json({
        status: "Optimal",
        persistence: "MIA-X Online",
        node: "Atacama-Sovereign-1",
        version: "20.0.0"
    });
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`>> [DEAL]: Infraestructura Blindada en puerto ${PORT}`));
