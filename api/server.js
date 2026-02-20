const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Base de Datos Simulada para Innovación Real
const simulationData = {
    market_assets: [
        { name: "Lithium RWA", price: "72,400", change: "+5.4%", trend: "UP" },
        { name: "Gold Tokenized", price: "2,045", change: "+0.2%", trend: "STABLE" },
        { name: "Bitcoin (Collateral)", price: "98,200", change: "+1.8%", trend: "UP" },
        { name: "Solana (Bridge)", price: "245", change: "+12.1%", trend: "UP" }
    ],
    infrastructure_stats: {
        active_nodes: 3, // Atacama, Miami, Space
        total_liquidity_locked: "$42.8M",
        quantum_uptime: "99.9998%",
        mia_x_memory_blocks: "1,024"
    }
};

app.get('/', (req, res) => {
    res.status(200).send('<body style="background:#000; color:#39FF14; font-family:monospace; padding:50px;"><h1>DEAL PROTOCOL | LIVE SIMULATION</h1><p>MIA-X Status: FEEDING_DATA</p></body>');
});

// Endpoint que Vercel consumirá para mostrar los datos en el Portal
app.get('/api/v1/market/simulation', (req, res) => {
    res.json({
        platform: "DEAL_ESTANDAR_ELITE",
        engine: "G-AGI_REHACE",
        timestamp: new Date().toISOString(),
        data: simulationData
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`DEAL Simulation Engine on port ${PORT}`));
module.exports = app;
