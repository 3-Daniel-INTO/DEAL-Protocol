const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Configuración de Seguridad Soberana
app.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'MIA-X Neural Network');
    res.setHeader('X-Infrastructure', 'DALabs-Atacama');
    next();
});

app.use(express.static(path.join(__dirname, '/')));

app.get('/healthz', (req, res) => {
    res.status(200).json({ status: "ONLINE", engine: "G-AGI", node_version: process.version });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`>> [DEAL]: Infraestructura activa en Node ${process.version} - Puerto ${PORT}`);
});
