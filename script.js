// --- ESCENA 3D: VORTEX NEON ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('vortex-container').appendChild(renderer.domElement);

const points = [];
for (let i = 0; i < 5000; i++) {
    let p = new THREE.Vector3(Math.random()*100-50, Math.random()*100-50, Math.random()*100-50);
    points.push(p);
}
const geo = new THREE.BufferGeometry().setFromPoints(points);
const mat = new THREE.PointsMaterial({ color: 0x39FF14, size: 0.1 });
const cloud = new THREE.Points(geo, mat);
scene.add(cloud);
camera.position.z = 30;

function animate() {
    requestAnimationFrame(animate);
    cloud.rotation.y += 0.001;
    cloud.rotation.z += 0.001;
    renderer.render(scene, camera);
}
animate();

// --- WALLETCONNECT & AUTH ---
async function connectWallet() {
    // Simulación de WalletConnect para el flujo de DEAL
    console.log(">> [MIA-X]: Iniciando validación de identidad soberana...");
    const btn = document.getElementById('connect-btn');
    btn.innerText = "VERIFICANDO...";
    
    setTimeout(() => {
        btn.innerText = "ID: 0x88...D4A";
        document.getElementById('user-portal').classList.remove('hidden');
        gsap.from(".p-card", { opacity: 0, y: 30, stagger: 0.2 });
    }, 2000);
}

function executeVeritas() {
    alert("PROTOCOLO VERITAS ACTIVADO: Sincronizando propiedad de patentes DEAL-QBT-01...");
}
// --- RENDERIZADO DE PATENTES VERITAS ---
function loadPatentLedger() {
    const list = document.getElementById('patent-list');
    const patents = [
        { id: "DEAL-QBT-01", name: "Quantum Bridge", type: "PATENT" },
        { id: "DEAL-LIT-AT", name: "Lithium RWA", type: "COMMODITY" },
        { id: "DEAL-MIA-X", name: "Neural Engine", type: "TECH" }
    ];

    list.innerHTML = patents.map(p => `
        <div class="patent-item">
            <span>${p.name} <small>[${p.id}]</small></span>
            <span class="status-tag">CERTIFIED</span>
        </div>
    `).join('');

    // Animación de incremento de Equity
    let val = 0;
    const target = 450000; // Equity inicial de ejemplo
    const interval = setInterval(() => {
        val += 5000;
        document.getElementById('equity-val').innerText = `$${val.toLocaleString()}`;
        if(val >= target) clearInterval(interval);
    }, 20);
}

// Modificar la función de conexión para cargar el Ledger
const originalConnect = connectWallet;
connectWallet = async () => {
    await originalConnect();
    setTimeout(loadPatentLedger, 3000);
};
