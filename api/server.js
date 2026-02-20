const express = require('express');
const cors = require('cors');
const { analyzeAssets } = require('./ai_engine');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/v1/assets/realtime', (req, res) => {
    const mockData = { market_volatility: 0.12, asset_liquidity: 0.95 };
    const analysis = analyzeAssets(mockData);
    res.json({
        platform: "DEAL_PROTOCOL",
        engine: "G-AGI_REHACE",
        analysis: analysis,
        nodes: ["Atacama_Master", "Miami_Neo-Atlantis_Ready"]
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`DEAL AI Node active on ${PORT}`));
module.exports = app;
