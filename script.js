window.onload = () => {
    gsap.to("#loader", { opacity: 0, duration: 1, onComplete: () => document.getElementById('loader').remove() });

    // Animación Circular del Vórtice
    gsap.to("#vortex", {
        rotation: 360,
        duration: 180,
        repeat: -1,
        ease: "none"
    });

    // Movimiento envolvente Eje Z del Astronauta
    gsap.to(".astro-inner", {
        z: 850,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Parallax Interactivo (MIA-X Agent Influence)
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX - window.innerWidth / 2) / 40;
        const y = (e.clientY - window.innerHeight / 2) / 40;
        
        gsap.to(".astro-inner", { 
            rotationY: x * 0.5, 
            rotationX: -y * 0.5, 
            x: x * 3, 
            y: y * 3, 
            duration: 1.5 
        });
        
        gsap.to("#vortex", { 
            x: -x * 2, 
            y: -y * 2, 
            duration: 2.5 
        });
    });
};

function initMIAX() {
    console.log(">> [MIA-X]: Sincronizando Perfil Soberano...");
}
