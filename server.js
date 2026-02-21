const express = require('express');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());
app.use(cors({ origin: [/vercel\.app$/, /deal-protocol\.online$/] }));

// HUB DE INVERSIÓN GLOBAL (Endpoints de alta disponibilidad)
const DEAL_CHANNELS = ["VC", "CROWDFUNDING", "INSTITUTIONAL", "RWA", "PHILANTHROPY"];

app.get('/api/v1/market-data', (req, res) => {
    res.json({
        coverage: "195 Countries + Orbit",
        status: "Sovereign Active",
        nodes: ["Atacama-Terra", "Quantum-Ark-Satellite"],
        lpi_global: "99.8%"
    });
});

app.get('*', (req, res) => {
    res.sendFile(require('path').join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`>> [DEAL]: Neuro-Hub Online en todos los continentes.`);
});
