const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/v1/health', (req, res) => {
    res.json({ status: 'Operational', system: 'DEAL Protocol' });
});

app.listen(PORT, () => {
    console.log(`DEAL Core running on port ${PORT}`);
});
