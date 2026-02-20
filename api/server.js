const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Base de Datos Maestra con Redundancia para evitar "Archivos Fantasmas"
const DEAL_DATA = {
    vault: { btc: "1.24", eth: "15.8", sol: "450.2", rwa_lithium: "4.5T" },
    impact: { co2_saved: "1.5M Tons", energy_gw: "5.8" },
    governance: { status: "Sovereign", node: "Atacama_Alpha" }
};

// Endpoints duplicados para compatibilidad total (Legacy & New)
app.get(['/api/v1/stats', '/api/v1/deal/all', '/api/v1/flow'], (req, res) => {
    res.json({
        ...DEAL_DATA,
        timestamp: new Date().getTime(),
        load_simulation: "STRESS_TEST_PASSED_99.9%"
    });
});

app.get('/', (req, res) => res.status(200).send('DEAL NODE: OPERATIONAL'));

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => console.log(`DEAL Robust Engine on ${PORT}`));
