const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const DEAL_ASSETS = {
    vc: "$450M",
    rwa: "$720M",
    veritas: "VERIFIED_0x777",
    node: "ATACAMA_STABLE"
};

app.get('/', (req, res) => res.status(200).send("DEAL SATELLITE NODE ONLINE"));
app.get('/api/v1/sync', (req, res) => res.json(DEAL_ASSETS));

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => console.log(`Satellite Link active on ${PORT}`));
