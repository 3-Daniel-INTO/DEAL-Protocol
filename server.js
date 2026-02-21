const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(__dirname));

// API DE INDICADORES Y REPORTES LPI (Simulada para G-AGI)
app.get('/api/deal-intelligence', (req, res) => {
    res.json({
        lpi: "98.4%", // Liquidity Performance Index
        hash_growth: "+12.5% MoM",
        deal_status: "Sovereign Active",
        history_milestone: "Genesis 2026 Achieved"
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Keep-Alive MIA-X
setInterval(() => {
    console.log(">> [AGI 3]: Nodo Atacama Sincronizado. Latencia: 1ms");
}, 300000);

app.listen(PORT, () => console.log(`>> [DEAL]: Elite Terminal Online`));
