const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../')));

app.get('/api/whale-metrics', (req, res) => {
    res.json({
        total_liquidity_absorption: "850M USD",
        active_venture_pools: 12,
        rwa_collateral_status: "VERIFIED",
        system_nodes: ["ATACAMA-01", "QUANTUM-SPACE-01"]
    });
});

module.exports = app;
