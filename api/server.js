const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => { 
    res.setHeader("Connection", "keep-alive"); 
    res.setHeader("Keep-Alive", "timeout=5, max=1000"); 
    next(); 
});

app.get('/', (req, res) => {
    res.status(200).send('DEAL NODE: OPERATIONAL');
});

app.get('/api/v1/health', (req, res) => {
    res.json({ status: "OPERATIONAL", node: "Atacama_Master" });
});

app.get('/api/v1/market/simulation', (req, res) => {
    res.json({ 
        timestamp: new Date().toISOString(),
        data: { market_assets: [{ name: "Lithium", price: "72k" }] } 
    });
});

// CRÍTICO: Render asigna el puerto mediante process.env.PORT
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`>> [MIA-X]: Nodo activo en puerto ${PORT}`);
});
