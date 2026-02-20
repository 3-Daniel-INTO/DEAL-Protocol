const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<body style="background:#000; color:#39FF14; display:flex; align-items:center; justify-content:center; height:100vh; margin:0;"><h1>DEAL CORE API OPERATIONAL</h1></body>');
});

app.get('/api/v1/health', (req, res) => {
    res.json({ 
        status: 'Operational', 
        system: 'DEAL Protocol',
        provider: 'DALabs',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`DEAL Core running on port ${PORT}`);
});
