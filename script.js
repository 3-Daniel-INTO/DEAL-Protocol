// --- ESCENA 3D: MONTAÑAS DINÁMICAS ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-3d'), alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.PlaneGeometry(100, 100, 150, 150);
const material = new THREE.PointsMaterial({ color: 0xD4AF37, size: 0.02 });

const pos = geometry.attributes.position.array;
function updateTerrain(time) {
    for (let i = 0; i < pos.length; i += 3) {
        const x = pos[i];
        const y = pos[i + 1];
        pos[i + 2] = Math.sin(x * 0.2 + time) * Math.cos(y * 0.2 + time) * 2.5 + 
                     Math.sin(x * 0.5 + time) * 0.5;
    }
    geometry.attributes.position.needsUpdate = true;
}

const mountains = new THREE.Points(geometry, material);
mountains.rotation.x = -Math.PI / 2.5;
scene.add(mountains);
camera.position.z = 25;

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.0008;
    updateTerrain(time);
    mountains.rotation.z += 0.0002;
    renderer.render(scene, camera);
}
animate();

// --- LÓGICA DE NAVEGACIÓN ---
function triggerConnect() {
    document.getElementById('signature-overlay').classList.remove('hidden');
    gsap.from(".sign-box", { scale: 0.8, opacity: 0, duration: 0.5 });
}

function finalizeAuth() {
    gsap.to(".sign-box", { scale: 1.2, opacity: 0, duration: 0.4, onComplete: () => {
        document.getElementById('signature-overlay').classList.add('hidden');
        navTo('view-terminal');
    }});
}

function navTo(id) {
    const current = document.querySelector('.view.active');
    const next = document.getElementById(id);
    gsap.to(current, { opacity: 0, duration: 0.5, onComplete: () => {
        current.classList.remove('active');
        next.classList.add('active');
        gsap.to(next, { opacity: 1, duration: 0.5 });
    }});
}

function showTool(toolId) {
    document.querySelectorAll('.tool-view').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const target = document.getElementById('tool-' + toolId);
    target.classList.add('active');
    event.target.classList.add('active');
    gsap.from(target, { x: 30, opacity: 0, duration: 0.5 });
}
