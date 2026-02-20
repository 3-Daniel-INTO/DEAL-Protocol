const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/v1/vault', (req, res) => {
    res.json({
        crypto: { btc: "1.24 BTC", eth: "15.8 ETH", sol: "450.2 SOL" },
        rwa: { lithium: "4.5 Tons", gold: "150 Oz", co2: "-120 Tons" },
        status: "SECURED_BY_VERITAS"
    });
});

app.get('/', (req, res) => res.send('DEAL MASTER NODE: MULTI-CHAIN VAULT ACTIVE'));

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server on ${PORT}`));
