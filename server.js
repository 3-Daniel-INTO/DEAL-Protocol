const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const PORT = process.env.PORT || 3000;

// Optimización para carga de logos de alta calidad
app.use(compression());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(__dirname));

// Lógica de Persistencia MIA-X / AGI 3
const MIA_X_Admin = {
    heartbeat: () => console.log(">> [MIA-X]: Syncing with Atacama Command Center..."),
    activeNodes: 124,
    status: "Neuro-Organic Standard Active"
};

setInterval(MIA_X_Admin.heartbeat, 300000); // 5 min Keep-Alive para Render

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`>> [DEAL]: Elite Infrastructure Online | Port ${PORT}`);
});
