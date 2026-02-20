gsap.registerPlugin(ScrollTrigger);

// --- ESCENA 3D: MONTAÑAS DE ATACAMA ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('render-canvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geo = new THREE.PlaneGeometry(120, 120, 100, 100);
const mat = new THREE.PointsMaterial({ color: 0xD4AF37, size: 0.025 });
const terrain = new THREE.Points(geo, mat);
terrain.rotation.x = -Math.PI / 2.5;
scene.add(terrain);
camera.position.z = 45;

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.0006;
    const pos = geo.attributes.position.array;
    for(let i=0; i<pos.length; i+=3) {
        pos[i+2] = Math.sin(pos[i]*0.15 + time) * Math.cos(pos[i+1]*0.15 + time) * 3;
    }
    geo.attributes.position.needsUpdate = true;
    terrain.rotation.z += 0.0002;
    renderer.render(scene, camera);
}
animate();

// --- LOGS DINÁMICOS VERITAS ---
const logs = [
    "> MIA-X PERSISTENCE: 99.9%",
    "> AUDITING VERITAS NODES...",
    "> LITHIUM RWA: CUSTODY_OK",
    "> ATACAMA HUB: SYNC_COMPLETE",
    "> G-AGI ENGINE: INDEPENDENT",
    "> OMNICHAIN V2: MONITORING",
    "> QUANTUM PROTECTION: ON"
];
let logIdx = 0;
function updateMonitor() {
    const stream = document.getElementById('live-stream');
    const p = document.createElement('div');
    p.innerText = logs[logIdx % logs.length];
    p.style.opacity = "0";
    stream.prepend(p);
    gsap.to(p, { opacity: 1, x: 5, duration: 0.5 });
    if(stream.children.length > 20) stream.lastChild.remove();
    logIdx++;
}
setInterval(updateMonitor, 2000);

// --- ANIMACIONES DE SCROLL ---
gsap.utils.toArray(".content-box").forEach(box => {
    gsap.to(box, {
        scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "expo.out"
    });
});
