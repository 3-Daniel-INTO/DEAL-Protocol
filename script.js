function initWallet() {
    alert(">> [MIA-X]: Sincronizando Huella Digital en la Red de Persistencia...");
}

// Parallax Interactivo
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 40;
    const y = (e.clientY - window.innerHeight / 2) / 40;
    gsap.to("#astro", { x: x * 2, y: y * 2, duration: 1.5 });
    gsap.to("#vortex", { x: -x, y: -y, duration: 2.5 });
});

// Animación de Entrada de Herramientas
gsap.from(".tool-card", { 
    scrollTrigger: ".tools-grid",
    opacity: 0, 
    y: 50, 
    stagger: 0.2, 
    duration: 1 
});
