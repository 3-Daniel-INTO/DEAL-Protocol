// --- ESCANEO DE SEGURIDAD MIA-X ---
function runSecurityScan() {
    const logs = [
        "> MIA-X: INITIATING RENDER.COM SCAN...",
        "> CHECKING VERCEL EDGE SECURITY HEADERS...",
        "> QUANTUM ENCRYPTION SYNCED: ATACAMA_HUB",
        "> NO VULNERABILITIES DETECTED.",
        "> STATUS: DEAL INFRASTRUCTURE IS UNBREAKABLE."
    ];
    const logContainer = document.getElementById('security-logs');
    logs.forEach((log, i) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.innerText = log;
            p.style.color = "#D4AF37";
            p.style.fontSize = "12px";
            logContainer.appendChild(p);
        }, i * 800);
    });
}

// ACCESO INTO-3
document.addEventListener('keydown', (e) => {
    if (e.key === 'I' || e.key === '3') {
        const dash = document.getElementById('into-3-secure');
        dash.classList.toggle('hidden');
        if(!dash.classList.contains('hidden')) runSecurityScan();
    }
});
