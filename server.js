const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(compression());
app.use(express.static(path.join(__dirname, '/')));

// API G-AGI: Status de Red y Oráculos RWA
app.get('/api/v1/swarm', (req, res) => {
    res.json({
        network: "DEAL-SOVEREIGN",
        AUM: "$2.5B",
        active_startups: 124,
        node_location: "Atacama",
        status: "OPTIMIZED"
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`>> [DEAL]: Swarm Infrastructure Active on Node ${process.version}`);
});
