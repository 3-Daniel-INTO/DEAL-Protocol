const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const DEAL_ASSETS = {
    vc: "$450,000,000",
    rwa: "$720,000,000",
    nodes: "124 ACTIVE",
    veritas: "GENESIS_VERIFIED_0x777",
    ai_engine: "MIA-X (G-AGI Hybrid)"
};

app.get('/api/v1/sync', (req, res) => res.json(DEAL_ASSETS));
app.get('/', (req, res) => res.send("DEAL MASTER CORE ONLINE"));

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => console.log(`Core ON ${PORT}`));
