async function updateAIAnalysis() {
    try {
        const response = await fetch('api/v1/assets/realtime');
        const data = await response.json();
        const statusDiv = document.getElementById('ai-status');
        statusDiv.innerHTML = `
            PROYECCIÓN: <span style="color:var(--green);">${data.analysis.security_index}</span><br>
            RECOMENDACIÓN: ${data.analysis.recommendation}<br>
            TIMESTAMP: ${data.analysis.timestamp}
        `;
    } catch (e) {
        console.log(">> [MIA-X]: Esperando conexión con el Nodo Render...");
    }
}
setInterval(updateAIAnalysis, 10000);
