function activateMIAX() {
    console.log(">> [MIA-X]: Validando Identidad Soberana...");
    const portal = document.getElementById('main-portal');
    portal.classList.remove('hidden');
    gsap.from(".card", { opacity: 0, scale: 0.8, duration: 1, stagger: 0.2 });
}

// Interacción con mouse para Parallax
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) / 40;
    const moveY = (e.clientY - window.innerHeight / 2) / 40;
    gsap.to("#astro", { x: moveX, y: moveY, duration: 1 });
});
