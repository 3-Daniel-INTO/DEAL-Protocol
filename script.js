gsap.registerPlugin(ScrollTrigger);

// Interacción Parallax
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 30;
    const y = (e.clientY - window.innerHeight / 2) / 30;
    gsap.to("#astro", { x: x * 2, y: y * 2, duration: 1.2 });
    gsap.to("#vortex", { x: -x, y: -y, rotation: x * 0.1, duration: 2 });
});

// Animación de entrada de elementos
gsap.from(".card", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 1.5,
    ease: "power4.out"
});

function initMIAX() {
    alert(">> [MIA-X]: Identity Authenticated. Welcome to Workspace 33.333.");
}
