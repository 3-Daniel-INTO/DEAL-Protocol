const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Datos de Inversión Soberana
const DEAL_STATS = {
    vc: "$450M",
    co2: "1.5M Tons",
    veritas: "v74_GENESIS_CONFIRMED",
    rwa: { lithium: "$720M", energy: "5.8 GW" }
};

// Ruta raíz para Render (evita el error de pantalla blanca)
app.get('/', (req, res) => res.status(200).send("DEAL MASTER NODE: ACTIVE"));

// API Unificada para Vercel
app.get('/api/v1/deal/all', (req, res) => res.json(DEAL_STATS));

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => console.log(`Engine ON port ${PORT}`));
