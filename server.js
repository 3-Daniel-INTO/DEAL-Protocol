const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(__dirname));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`>> [AGI 3]: DEAL Portal Online - Elite Standard`);
});
