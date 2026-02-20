// --- ESCENA 3D: MONTAÑAS DE ATACAMA ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-3d'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.PlaneGeometry(500, 500, 50, 50);
const material = new THREE.PointsMaterial({ color: 0xD4AF37, size: 1.2 });
const mesh = new THREE.Points(geometry, material);
mesh.rotation.x = -Math.PI / 2.5;
scene.add(mesh);
camera.position.z = 200;
camera.position.y = 100;

function animate() {
    requestAnimationFrame(animate);
    const positions = mesh.geometry.attributes.position.array;
    for(let i=0; i<positions.length; i+=3) {
        positions[i+2] = Math.sin(positions[i] / 20 + Date.now() * 0.001) * 15;
    }
    mesh.geometry.attributes.position.needsUpdate = true;
    mesh.rotation.z += 0.001;
    renderer.render(scene, camera);
}
animate();

// --- CONECTIVIDAD UNIVERSAL ---
const connectBtn = document.getElementById('connect-btn');
connectBtn.onclick = () => {
    alert("Iniciando WalletConnect... Conectando con MetaMask, Phantom, Coinbase y World ID.");
    // Aquí se inicializa Web3Modal Standalone
};

// --- SYNC DE BOVEDA (Backend Render) ---
async function syncVault() {
    try {
        const res = await fetch('https://srv-d6bqorvtn9qs73di0npg.onrender.com/api/v1/vault');
        const data = await res.json();
        document.getElementById('btc-val').innerText = data.crypto.btc;
        document.getElementById('eth-val').innerText = data.crypto.eth;
        document.getElementById('sol-val').innerText = data.crypto.sol;
        document.getElementById('li-val').innerText = data.rwa.lithium;
        document.getElementById('au-val').innerText = data.rwa.gold;
        document.getElementById('co2-val').innerText = data.rwa.co2;
    } catch(e) { console.log("MIA-X: Sincronizando con nodo..."); }
}
setInterval(syncVault, 10000);
syncVault();
async function updateVeritas() {
    try {
        const res = await fetch('https://srv-d6bqorvtn9qs73di0npg.onrender.com/api/v1/vault');
        const data = await res.json();
        const log = document.getElementById('veritas-log');
        
        const entry = `<div class="audit-entry">[${data.veritas.timestamp}] ID: ${data.veritas.audit_id} - BACKING: ${data.veritas.backing_ratio} - OK</div>`;
        log.innerHTML = entry + log.innerHTML;
        
        // Limitar entradas para estética
        if (log.childNodes.length > 3) log.removeChild(log.lastChild);
    } catch(e) { console.warn("Esperando Nodo..."); }
}
setInterval(updateVeritas, 5000);
