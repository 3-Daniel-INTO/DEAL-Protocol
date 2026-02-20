gsap.registerPlugin(ScrollTrigger);

// --- MOTOR NEURONAL G-AGI ---
function trackInterest(segment) {
    console.log(`>> [G-AGI]: Registrando preferencia de nicho: ${segment}`);
    alert(`MIA-X: Perfilando interés en ${segment}. Datos sincronizados con DALabs.`);
}

// --- STORYTELLER ANIMADO ---
gsap.utils.toArray(".scene").forEach(scene => {
    gsap.from(scene.querySelectorAll("h1, h2, p, .node-card"), {
        scrollTrigger: {
            trigger: scene,
            start: "top center",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power4.out"
    });
});

// --- ACCESO INTO-3 ---
document.addEventListener('keydown', (e) => {
    if (e.key === 'I' || e.key === '3') {
        document.getElementById('into-3-portal').classList.toggle('hidden');
        renderNeuralLogs();
    }
});

function renderNeuralLogs() {
    const logs = [
        "> MIA-X: DETECTING BIOMETRIC TRACE...",
        "> G-AGI: CALCULATING RISK TOLERANCE: ELITE_LEVEL",
        "> DALABS: SYNCING WITH ATACAMA COMMAND CENTER",
        "> HARMONY FOUNDATION: SOVEREIGN STATUS CONFIRMED",
        "> STATUS: NEURAL PORTAL ACTIVE"
    ];
    document.getElementById('live-analytics').innerHTML = logs.map(l => `<p style="color:#D4AF37; font-size:12px;">${l}</p>`).join('');
}
