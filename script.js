const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('bg-canvas'), alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BufferGeometry();
const count = 15000;
const positions = new Float32Array(count * 3);
for(let i=0; i<count*3; i++) positions[i] = (Math.random() - 0.5) * 20;
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({color: 0xD4AF37, size: 0.015});
const mesh = new THREE.Points(geometry, material);
scene.add(mesh);
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.0001;
    const pos = geometry.attributes.position.array;
    for(let i=0; i<count; i++) {
        pos[i*3+1] = Math.sin(pos[i*3] + time*10) * 0.5 - 1.5;
    }
    geometry.attributes.position.needsUpdate = true;
    mesh.rotation.y += 0.001;
    renderer.render(scene, camera);
}
animate();

// Fetch de Datos Reales de Render
async function loadData() {
    try {
        const res = await fetch('https://deal-protocol.onrender.com/api/v1/deal/all');
        const data = await res.json();
        document.getElementById('vc-val').innerText = data.vc;
        document.getElementById('veritas-log').innerText = `ID: ${data.veritas}\nSTATUS: AUDITED`;
    } catch(e) { console.log("Offline sync..."); }
}
loadData();
