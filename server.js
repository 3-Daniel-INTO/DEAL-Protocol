const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Datos de Infraestructura DEAL para Inversores
app.get('/api/v1/stats', (req, res) => {
    res.json({
        tvl: "1,250,400.00",
        active_deals: 12,
        pop_validation_rate: "99.8%",
        token_burn: "450,000 DEAL",
        status: "OPERATIONAL",
        node: "Atacama-Master-01",
        provider: "DALabs"
    });
});

// Ruta raíz profesional para evitar "Cannot GET /"
app.get('/', (req, res) => {
    res.status(200).send(`
        <body style="background:#000;color:#39FF14;font-family:monospace;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;margin:0;">
            <h1>DEAL PROTOCOL CORE</h1>
            <p style="color:#fff;">Sovereign Infrastructure by DALabs</p>
            <div style="border:1px solid #39FF14;padding:10px;margin-top:20px;">NODE STATUS: ONLINE</div>
        </body>
    `);
});

app.listen(PORT, () => console.log('DEAL Core Live'));
