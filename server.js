const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Configuración de Headers para Alta Disponibilidad
app.use((req, res, next) => {
    res.setHeader('X-Protocol', 'Proof of Progress');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.static(path.join(__dirname, '/')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/api/status', (req, res) => {
    res.json({ system: "DEAL", identity: "MIA-X", status: "QUANTUM_READY" });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`>> [DEAL]: Nodo operativo en puerto ${PORT}`);
});
