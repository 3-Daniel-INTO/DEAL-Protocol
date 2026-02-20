const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../')));

app.get('/api/status', (req, res) => {
    res.json({
        platform: "DEAL_SOVEREIGN",
        engine: "G-AGI_NATIVE",
        persistence: "MIA-X",
        nodes: ["ATACAMA_MASTER", "QUANTUM_SPACE"],
        rwa_collateral: "ACTIVE"
    });
});

module.exports = app;
