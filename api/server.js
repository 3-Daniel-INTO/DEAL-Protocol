const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Datos Maestros DEAL (Inversión, Infraestructura y RWA)
const DEAL_CORE_DATA = {
    institutional: { vc_committed: "$450M", rwa_lithium: "$720M", co2_offset: "1.5M Tons" },
    tools: { wallet_connect: "ACTIVE", veritas_audit: "LIVE", heatmap: "SYNCED" },
    sovereign_kpi: { energy_yield: "5.8 GW", node_status: "ATACAMA_ONLINE" }
};

// Reparación de ruta raíz para evitar "Cannot GET /"
app.get('/', (req, res) => {
    res.status(200).json({ message: "DEAL MASTER NODE OPERATIONAL", version: "75.0" });
});

// Endpoint unificado para la App de Vercel
app.get('/api/v1/deal/all', (req, res) => {
    res.json(DEAL_CORE_DATA);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => console.log(`DEAL Engine on ${PORT}`));
