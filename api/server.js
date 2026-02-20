const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.static(__dirname));

app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    if (fs.existsSync(indexPath)) return res.sendFile(indexPath);
    res.status(500).send("DEAL_SYSTEM_OFFLINE: RECONNECTING_TO_ATACAMA_HUB");
});

app.listen(PORT, () => console.log(">> DEAL SOBERANO: NODO ACTIVO"));
