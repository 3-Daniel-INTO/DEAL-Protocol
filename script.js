// 3D Background: Partículas de Atacama
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-3d'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const particles = new THREE.BufferGeometry();
const count = 10000;
const pos = new Float32Array(count * 3);
for(let i=0; i<count*3; i++) pos[i] = (Math.random() - 0.5) * 10;
particles.setAttribute('position', new THREE.BufferAttribute(pos, 3));
const material = new THREE.PointsMaterial({ size: 0.005, color: 0xD4AF37 });
const mesh = new THREE.Points(particles, material);
scene.add(mesh);
camera.position.z = 3;

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.0005;
    renderer.render(scene, camera);
}
animate();

// Sync de Datos con Render
async function syncDEAL() {
    try {
        const res = await fetch('https://srv-d6bqorvtn9qs73di0npg.onrender.com/api/v1/deal/all');
        const data = await res.json();
        document.getElementById('total-val').innerText = data.stats.absorption_total;
        document.getElementById('co2-val').innerText = data.stats.channels.philanthropy.co2_offset;
        document.getElementById('audit-log').innerHTML = `ID: ${data.veritas.proof_hash}<br>STATUS: ${data.veritas.status}`;
    } catch(e) { console.log("Sincronizando con Nodo Maestro..."); }
}
setInterval(syncDEAL, 10000);
syncDEAL();
