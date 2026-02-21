const express = require('express');
const cors = require('cors');
const app = express();

// Blindaje de comunicación entre portales
app.use(cors({ origin: '*' })); 
app.use(express.static(__dirname));

app.get('/api/v1/health', (req, res) => {
    res.json({ 
        status: "Online", 
        integrity: "100%", 
        nodes: "Global + Space",
        ia: "MIA-X Active" 
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`>> [DEAL CORE]: Búnker de datos operativo en puerto ${PORT}`);
});
