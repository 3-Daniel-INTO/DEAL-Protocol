const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health Check - DEAL Infrastructure
app.get('/api/v1/health', (req, res) => {
    res.status(200).json({
        status: 'Operational',
        protocol: 'DEAL-PoP-Active',
        network: 'Independent'
    });
});

app.listen(PORT, () => {
    console.log(`DEAL Backend Core running on port ${PORT}`);
});
