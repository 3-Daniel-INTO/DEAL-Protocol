const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const DEAL_ASSETS = {
    vc_committed: "$450,000,000",
    impact: "1.5M Tons CO2",
    node: "ATACAMA_ALPHA_STABLE",
    veritas: "0x777_GENESIS_VERIFIED"
};

app.get('/', (req, res) => res.send("DEAL SATELLITE NODE ONLINE"));
app.get('/api/v1/sync', (req, res) => res.json(DEAL_ASSETS));

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => console.log(`Satellite Link active on ${PORT}`));
