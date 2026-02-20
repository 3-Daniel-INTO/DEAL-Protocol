// Escena 3D: Estructura de Red (Plexus)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-3d'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.IcosahedronGeometry(2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0xD4AF37, wireframe: true, transparent: true, opacity: 0.1 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.002;
    renderer.render(scene, camera);
}
animate();

// Sync de Datos de Grado Institucional
async function fetchWhaleData() {
    try {
        const res = await fetch('https://srv-d6bqorvtn9qs73di0npg.onrender.com/api/v1/institutional/stats');
        const d = await res.json();
        document.getElementById('total-cap').innerText = d.sovereign_metrics.total_absorption;
        document.getElementById('vc-pipe').innerText = d.sovereign_metrics.vc_pipeline.committed;
        document.getElementById('rwa-val').innerText = d.sovereign_metrics.institutional_rwa.valuation;
        document.getElementById('co2-impact').innerText = d.sovereign_metrics.philanthropy_co2.credits_issued;
        document.getElementById('crowd-flow').innerText = d.sovereign_metrics.philanthropy_co2.donation_flow;
    } catch(e) { console.warn("Sincronizando con Nodo Atacama..."); }
}
setInterval(fetchWhaleData, 10000);
fetchWhaleData();
