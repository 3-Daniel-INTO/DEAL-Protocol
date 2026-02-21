function authMIAX() {
    alert(">> [MIA-X]: Iniciando Escaneo de Identidad...");
    setTimeout(() => {
        document.getElementById('portal').classList.remove('hidden');
        gsap.from(".card", { opacity: 0, y: 50, stagger: 0.2, duration: 1 });
    }, 1500);
}

function closePortal() { document.getElementById('portal').classList.add('hidden'); }

// Parallax según el mouse
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    gsap.to("#astronaut", { x: x * 2, y: y * 2, duration: 1 });
    gsap.to("#vortex", { x: -x, y: -y, duration: 2 });
});
