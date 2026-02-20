const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('.'));

// Base de datos de red DEAL
const WHALE_VAULT = {
    wallets: {
        btc: "bc1qdeal...master",
        eth: "0x777...foundation",
        sol: "DEAL...atacama"
    },
    stats: {
        vc: "$450,000,000",
        rwa: "$720,000,000",
        global_impact: "Militar Grade Secured"
    }
};

app.get('/api/v1/vault', (req, res) => res.json(WHALE_VAULT));

// Manejo de rutas para Single Page Application
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../dashboard.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => console.log(`Whale Crypto-Engine ON ${PORT}`));
