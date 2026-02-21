const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(__dirname));

app.get('/api/health', (req, res) => {
    res.json({ status: "Green", system: "DEAL-MIA-X", safety: "Quantum-Protected" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`>> [DEAL]: Nodo activo en puerto ${PORT}`);
});
