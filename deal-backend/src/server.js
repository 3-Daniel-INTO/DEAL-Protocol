const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <body style="background:#000; color:#39FF14; font-family:monospace; display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; margin:0; text-align:center;">
            <h1 style="border: 1px solid #39FF14; padding: 20px;">DEAL PROTOCOL CORE</h1>
            <p style="color:#fff; letter-spacing:5px; margin-top:20px;">DALABS SOVEREIGN INFRASTRUCTURE</p>
            <p style="font-size:0.8rem; color:#444;">Status: 200 OK | Node: Atacama-Master</p>
        </body>
    `);
});

app.get('/api/v1/health', (req, res) => {
    res.json({ 
        status: 'Operational', 
        system: 'DEAL Protocol',
        provider: 'DALabs',
        persistence: 'MÍA Rehace Active',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => console.log('DEAL CORE LIVE'));
