// Movimiento Interactivo Z-Axis basado en Cursor
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 50;
    const y = (e.clientY - window.innerHeight / 2) / 50;
    gsap.to("#astro", { x: x * 4, y: y * 4, duration: 1 });
});

function initMIAX() {
    alert(">> [MIA-X]: Validando Identidad Soberana...");
}
