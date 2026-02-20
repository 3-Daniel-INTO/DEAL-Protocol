const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// DEAL Institutional Data - Proof of Progress Protocol
const dealData = {
    venture_capital: "$450,000,000",
    rwa_lithium: "$720M",
    co2_offset: "1.5M Tons",
    veritas_status: "v74_GENESIS_CONFIRMED",
    node_status: "ATACAMA_ALPHA_STABLE",
    heat_map: "HIGH_DEMAND_LATAM_SOL"
};

// Endpoint Maestro de Sincronización
app.get('/api/v1/deal/sync', (req, res) => {
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.json(dealData);
});

// Ruta Raíz para evitar error 'Cannot GET /' en Render
app.get('/', (req, res) => res.status(200).send("DEAL MASTER CORE - MIA-X SYNCHRONIZED"));

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => console.log(`DEAL Core Active on Port ${PORT}`));
