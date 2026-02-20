const NetworkMonitor = {
    checkNode: async () => {
        const start = Date.now();
        try {
            const response = await fetch('https://srv-d6bqorvtn9qs73di0npg.onrender.com/api/v1/health');
            const data = await response.json();
            const latency = Date.now() - start;
            
            document.getElementById('sync-status').innerHTML = `
                <span style="color:#39FF14;">ONLINE</span> 
                <span style="font-size:0.6rem; color:#555;">(${latency}ms)</span>
            `;
            console.log(">> [VERITAS]: Nodo Atacama sincronizado.");
        } catch (e) {
            document.getElementById('sync-status').innerHTML = `<span style="color:#FFD700;">SATELLITE_RELAY</span>`;
            console.warn(">> [MIA-X]: Error 502/504 detectado. Activando redundancia...");
        }
    }
};
setInterval(NetworkMonitor.checkNode, 10000);
NetworkMonitor.checkNode();
