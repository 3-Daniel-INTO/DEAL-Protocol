const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000; // Render usa 10000 por defecto

app.use(express.static(path.join(__dirname, '/')));

// Endpoint de Salud para evitar que Render marque el despliegue como fallido
app.get('/healthz', (req, res) => {
    res.status(200).send('DEAL NEURAL ENGINE ONLINE');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`>> [G-AGI]: Ecosistema DEAL operando en puerto ${PORT}`);
});
