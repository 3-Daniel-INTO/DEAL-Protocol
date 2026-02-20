const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../')));

// Forzar que la raíz cargue el Dashboard de Lujo directamente en Render
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dashboard.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => console.log(`Whale Command Center Active on ${PORT}`));
