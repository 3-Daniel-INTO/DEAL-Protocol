const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde la raíz
app.use(express.static(path.join(__dirname, '../')));

// Ruta maestra: Todo lo que no sea API va al Dashboard
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`DEAL CORE DEPLOYED ON PORT ${PORT}`);
});
