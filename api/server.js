const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const DEAL_REALTIME = {
    vc: "$450,000,000",
    rwa_lithium: "$720M",
    nodes_active: 124,
    global_heat: "HIGH_DEMAND_LATAM"
};

app.get('/', (req, res) => res.status(200).send("DEAL CORE ACTIVE"));
app.get('/api/v1/data', (req, res) => res.json(DEAL_REALTIME));

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => console.log(`Core running on ${PORT}`));
