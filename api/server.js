const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('.'));

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../dashboard.html'));
});

app.get('/api/v1/sync', (req, res) => {
    res.json({ vc: "$450,000,000", rwa: "$720,000,000", status: "SYNCED" });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Whale Engine ON ${PORT}`));
