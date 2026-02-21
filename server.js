const express = require('express');
const agent = require('./active_agents');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

// Endpoint para que la App reciba datos de los agentes
app.get('/api/agent/status', (req, res) => res.json(agent.healthCheck()));
app.get('/api/investment/report', (req, res) => {
    // Aquí se conecta a la nube para entregar el link del PDF generado
    res.json({ url: "https://cloud.deal.sovereign/reports/weekly_summary.pdf" });
});

app.listen(PORT, () => console.log(">> [MIA-X]: API DEAL App Sincronizada."));
