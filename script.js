gsap.registerPlugin(ScrollTrigger);

// Autenticación MIA-X
function initMIAX() {
    alert(">> [MIA-X]: Sincronizando Perfil Billionaire... Identidad Soberana Validada.");
}

// Parallax Progresivo
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 30;
    const y = (e.clientY - window.innerHeight / 2) / 30;
    gsap.to("#astro", { x: x * 2.5, y: y * 2.5, duration: 1 });
    gsap.to("#vortex", { x: -x, y: -y, duration: 2 });
});

// Animación de Paneles al hacer Scroll
gsap.from(".e-card", {
    scrollTrigger: ".elite-grid",
    opacity: 0,
    y: 100,
    stagger: 0.3,
    duration: 1.2
});
