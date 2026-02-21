const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '.')));

app.get('/api/status', (req, res) => {
    res.json({ system: "DEAL", status: "100% Operational", essence: "HTML Pure" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`>> [DEAL]: Infraestructura operativa en puerto ${PORT}`);
});
