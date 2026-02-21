const express = require('express');
const app = express();
app.use(express.static(__dirname));

app.get('/api/health', (req, res) => {
    res.json({
        status: "Sovereign Active",
        ia_core: "G-AGI x Grok Engine",
        node: "Atacama Command",
        lpi: "98.4%"
    });
});

app.listen(process.env.PORT || 3000, () => console.log(">> [DEAL]: Infraestructura robusta online."));
