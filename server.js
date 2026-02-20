const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos con caché optimizada
app.use(express.static(path.join(__dirname, '/'), {
  maxAge: '1d',
  setHeaders: (res, path) => {
    res.setHeader('X-Sovereign-Platform', 'DEAL-DALabs');
  }
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`>> [G-AGI]: DEAL Neural Engine Active on Port ${PORT}`);
});
