const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(compression());
app.use(express.static(__dirname + '/'));

app.get('/api/health', (req, res) => {
    res.json({ status: "SOVEREIGN", nodes: "ATACAMA_ACTIVE", engine: "G-AGI" });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`>> [DEAL]: Swarm Online on Port ${PORT}`);
});
