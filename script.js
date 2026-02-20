// --- SIMULACIÓN DE EXCEDENTES G-AGI ---
setTimeout(() => {
    document.getElementById('prediction-alert').classList.remove('hidden');
    console.log(">> [G-AGI]: Alerta de capital sugerida basándose en ROI real.");
}, 5000);

function executeImpactContribution() {
    alert("MIA-X: Procesando donación filantrópica a DALabs. Su identidad soberana ha sido acreditada.");
    document.getElementById('prediction-alert').style.display = 'none';
}

// SECRETO INTO-3
document.addEventListener('keydown', (e) => {
    if (e.key === 'I' && event.altKey || e.key === '3') {
        const dash = document.getElementById('secret-dashboard');
        dash.classList.toggle('hidden');
        renderPredictionLogs();
    }
});

function renderPredictionLogs() {
    const logs = [
        "> ANALYZING ATACAMA LITHIUM YIELD...",
        "> SURPLUS DETECTED: +3.4% ABOVE PROJECTION",
        "> SYNCING WITH DALABS PHILANTHROPY POOL",
        "> MIA-X: RECORDING HUMAN IMPACT DATA",
        "> INFRASTRUCTURE: UNBREAKABLE STATUS"
    ];
    document.getElementById('prediction-logs').innerHTML = logs.map(l => `<p style="color:#D4AF37; font-size:12px;">${l}</p>`).join('');
}
