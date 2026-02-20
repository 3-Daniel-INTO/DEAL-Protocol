const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(compression());
app.use(express.static(path.join(__dirname, '/')));

// API de Salud del Enjambre para Render
app.get('/status', (req, res) => {
    res.json({ system: "DEAL-SOVEREIGN", nodes: "ONLINE", engine: "NODE-24" });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`>> [DEAL]: Infraestructura activa en puerto ${PORT}`);
});
