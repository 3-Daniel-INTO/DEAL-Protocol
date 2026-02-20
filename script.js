gsap.registerPlugin(ScrollTrigger);

// --- MOTOR NEURONAL (FLUIDO) ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('fluid-canvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.SphereGeometry(20, 64, 64);
const material = new THREE.MeshBasicMaterial({ color: 0xD4AF37, wireframe: true, transparent: true, opacity: 0.2 });
const globe = new THREE.Mesh(geometry, material);
scene.add(globe);
camera.position.z = 50;

function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.001;
    renderer.render(scene, camera);
}
animate();

// --- DASHBOARD SECRETO INTO-3 ---
document.addEventListener('keydown', (e) => {
    if (e.key === 'I' || e.key === '3') {
        const dash = document.getElementById('into-3-dashboard');
        dash.classList.toggle('hidden');
        if(!dash.classList.contains('hidden')) {
            document.getElementById('log-flow').innerHTML += `<p>> [MIA-X]: Capturando huella neuronal del inversor...</p>`;
        }
    }
});
