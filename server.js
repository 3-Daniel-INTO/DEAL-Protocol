const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos directamente desde la raíz
app.use(express.static(__dirname));

// Punto de entrada único para evitar fallos en Vercel/Render
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`>> [G-AGI]: DEAL Portal Operational | Accessing DALabs Infrastructure`);
});
