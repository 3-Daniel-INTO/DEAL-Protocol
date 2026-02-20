const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../')));

// Endpoint para el Dashboard Whale (Métricas en tiempo real)
app.get('/api/v1/metrics', (req, res) => {
    res.json({
        liquidity_pool: "$1.2B",
        rwa_assets: ["Gold", "Lithium", "BTC", "SOL"],
        active_ventures: 42,
        sync_status: "ATACAMA_COMMAND_ACTIVE"
    });
});

module.exports = app;
