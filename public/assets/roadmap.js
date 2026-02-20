const RoadmapData = [
    { phase: "01", title: "GENESIS", status: "COMPLETED", detail: "Despliegue de MIA-X y Protocolo Veritas." },
    { phase: "02", title: "LIQUIDITY", status: "ACTIVE", detail: "Integración de RWA: Litio y Oro Tokenizado." },
    { phase: "03", title: "EXPANSION", status: "PENDING", detail: "Activación Nodo Miami Neo-Atlantis." },
    { phase: "04", title: "DOMINANCE", status: "PENDING", detail: "Sincronización Satelital Quantum completa." }
];

function renderRoadmap() {
    const container = document.getElementById('roadmap-container');
    if(!container) return;
    container.innerHTML = RoadmapData.map(item => `
        <div style="border-left: 2px solid ${item.status === 'COMPLETED' ? '#39FF14' : '#555'}; padding: 20px; margin-bottom: 10px; background: rgba(255,255,255,0.02);">
            <span style="font-family:'Share Tech Mono'; color:var(--gold);">[PHASE ${item.phase}]</span>
            <h4 style="margin: 5px 0;">${item.title} - <span style="font-size:0.7rem;">${item.status}</span></h4>
            <p style="font-size:0.8rem; color:#888;">${item.detail}</p>
        </div>
    `).join('');
}
