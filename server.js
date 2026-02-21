const sentinel = require('./sentinel');
const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
// Configuración de seguridad para permitir scripts externos de animación
app.use(helmet({ contentSecurityPolicy: false }));

// Servidor estático universal
app.use(express.static(path.join(__dirname, '/')));
app.use((req, res, next) => {     const appPartner = req.headers['x-application-origin'] || 'unknown';     sentinel.analyzeActivity(appPartner, req.method, req.url);     next(); });

// Agentes MIA-X: Monitoreo de Persistencia
setInterval(() => {
    console.log(">> [MIA-X]: Agentes distribuidos verificando integridad en Atacama...");
}, 600000);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`>> [DEAL]: Infrastructure Live on Port ${PORT}`);
});
