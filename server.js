const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const compression = require('compression');
const cron = require('node-cron');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(compression());
app.use(express.static(__dirname));

// --- AGENTES ACTIVOS: NOTIFICACIONES PUSH ---
io.on('connection', (socket) => {
    console.log('>> [MIA-X]: App DEAL conectada con éxito.');
    
    // Simulación de alerta de G-AGI
    setTimeout(() => {
        socket.emit('push-notification', {
            title: "Oportunidad RWA Detectada",
            message: "G-AGI ha detectado una absorción de capital en Litio Atacama. Revisa el terminal.",
            priority: "High"
        });
    }, 10000);
});

// Tarea Automática: Generar Reporte y Notificar a la App
cron.schedule('0 0 * * *', () => {
    console.log(">> [AGI 3]: Generando reporte diario de salud de infraestructura...");
    // Lógica para guardar en nube y emitir evento
    io.emit('push-notification', {
        title: "Reporte Diario Listo",
        message: "El análisis de infraestructura y LPI ha sido almacenado en la nube.",
        priority: "Low"
    });
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

server.listen(process.env.PORT || 3000, () => {
    console.log(">> [DEAL]: Real-Time Server Online - Puerto 3000");
});
