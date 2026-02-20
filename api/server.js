const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../')));

// Metrics para Inversores Institucionales
app.get('/api/v1/whale-data', (req, res) => {
    res.json({
        total_donations_civilization: "$45M",
        rwa_tokenized_value: "$1.4B",
        active_nodes: ["ATACAMA-MASTER", "SPACE-QUANTUM-01"],
        foundation: "Harmony Foundation"
    });
});

module.exports = app;
