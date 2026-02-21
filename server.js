const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(__dirname));

// Routing inteligente para secciones DEAL
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`>> [G-AGI]: DEAL Portal 100% Operational on Port ${PORT}`);
});
