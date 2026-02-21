const express = require('express');
const cors = require('cors');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(cors({ origin: '*' })); // Permite acceso total para la fase de estabilización
app.use(express.static(__dirname));

app.get('/api/health', (req, res) => {
    res.json({ status: "Sovereign Online", node: "Render-srv-d6bqor", ia: "G-AGI Active" });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`>> [DEAL]: Infrastructure stable on port ${PORT}`);
});
