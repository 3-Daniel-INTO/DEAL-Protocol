const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static(__dirname));

// Ruteo Inteligente para SPA (Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`>> [G-AGI]: DEAL ENGINE ONLINE - Elite Standard Active`);
  // Log para Render: Mantener el servicio despierto
  setInterval(() => console.log(">> [MIA-X]: Infrastructure Heartbeat..."), 300000);
});
