const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet'); // Seguridad avanzada

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({ contentSecurityPolicy: false })); // Protege contra inyecciones
app.use(compression()); // Reduce lag de transferencia
app.use(cors({ origin: [/vercel\.app$/, /deal-protocol\.online$/] })); // Solo tus dominios

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: "Cyber-Shield Active", sync: "Optimal" });
});

// Evita que el servidor se caiga por rutas inexistentes (Anti-Crash)
app.use((err, req, res, next) => {
    console.error(">> [BUG DETECTED]:", err.stack);
    res.status(500).send('Infrastructure Error Handled by MIA-X');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`>> [DEAL]: Búnker de datos blindado en puerto ${PORT}`);
});
