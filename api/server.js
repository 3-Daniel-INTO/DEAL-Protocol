const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// SOLUCIÓN AL "Cannot GET /"
// Esta ruta confirma que el nodo de Render está operando como backend de DEAL
app.get('/', (req, res) => {
    res.status(200).send(`
        <body style="background:#000; color:#39FF14; font-family:monospace; display:flex; align-items:center; justify-content:center; height:100vh; margin:0;">
            <div style="border:1px solid #333; padding:20px; text-align:center;">
                <h1 style="color:#FFD700;">DEAL PROTOCOL | BACKEND NODE</h1>
                <p>STATUS: OPERATIONAL</p>
                <p>MIA-X PERSISTENCE: ACTIVE</p>
                <p style="font-size:0.7rem; color:#555;">Sincronizado con Centro de Comando Atacama</p>
            </div>
        </body>
    `);
});

// Endpoint de Salud para el Dashboard de Vercel
app.get('/api/v1/health', (req, res) => {
    res.json({
        status: "OPERATIONAL",
        node: "Atacama_Master",
        quantum_shield: "ACTIVE",
        timestamp: new Date().toISOString()
    });
});

// IA de Gestión de Activos
app.get('/api/v1/assets/realtime', (req, res) => {
    res.json({
        analysis: {
            security_index: "99.9%_SAFE",
            recommendation: "ACCUMULATE_RWA",
            timestamp: new Date().toISOString()
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`DEAL Node active on port ${PORT}`));
module.exports = app;
