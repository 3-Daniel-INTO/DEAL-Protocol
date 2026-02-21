gsap.registerPlugin(ScrollTrigger);

// --- WALLET CONNECT API ---
async function connectSovereignWallet() {
    alert(">> [MIA-X]: Iniciando WalletConnect... Sincronizando Perfil Soberano.");
}

// --- ANIMACIÓN DE ENTRADA ---
gsap.from(".hero-content h1", { opacity: 0, y: 100, duration: 1.5, ease: "power4.out" });

// --- PARALLAX EJE Z (MOUSE) ---
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 30;
    const y = (e.clientY - window.innerHeight / 2) / 30;
    gsap.to("#astronaut", { x: x, y: y, duration: 1 });
    gsap.to("#vortex", { x: -x/2, y: -y/2, duration: 2 });
});
