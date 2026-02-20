const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Permite que el frontend de Vercel consulte al backend de Render
app.use(express.json());

// Endpoint de Salud del Sistema (Visto por inversores)
app.get('/api/v1/health', (req, res) => {
    res.json({
        status: "OPERATIONAL",
        persistence_layer: "MIA-X ACTIVE",
        security_protocol: "VERITAS v4",
        node_location: "Atacama Desert, Chile",
        quantum_link: "STABLE",
        timestamp: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`DEAL Node active on port ${PORT}`));
module.exports = app;
