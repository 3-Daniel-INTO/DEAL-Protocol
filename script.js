gsap.registerPlugin(ScrollTrigger);

// --- RENDER 3D: TERRENO DINÁMICO ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('main-canvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geo = new THREE.PlaneGeometry(100, 100, 100, 100);
const mat = new THREE.PointsMaterial({ color: 0xD4AF37, size: 0.03 });
const terrain = new THREE.Points(geo, mat);
terrain.rotation.x = -Math.PI / 2.5;
scene.add(terrain);
camera.position.z = 35;

function animate3D() {
    requestAnimationFrame(animate3D);
    const time = Date.now() * 0.0005;
    const pos = geo.attributes.position.array;
    for(let i=0; i<pos.length; i+=3) {
        pos[i+2] = Math.sin(pos[i]*0.1 + time) * 2;
    }
    geo.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
}
animate3D();

// --- SCROLLYTELLING LÓGICA ---
gsap.utils.toArray(".panel").forEach((panel, i) => {
    gsap.from(panel.querySelectorAll("h1, h2, p, .kpi-card, .btn-action"), {
        scrollTrigger: {
            trigger: panel,
            start: "top 70%",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
    });
});

function triggerAuth() {
    gsap.to(".modal", { display: 'flex', opacity: 1, duration: 0.5 });
}
