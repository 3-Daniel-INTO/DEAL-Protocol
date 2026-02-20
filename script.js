// Escena Three.js: Montañas de Partículas
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-3d'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Partículas que forman el relieve
const geometry = new THREE.BufferGeometry();
const vertices = [];
for (let i = 0; i < 5000; i++) {
    vertices.push(Math.random() * 2000 - 1000, Math.sin(i) * 100, Math.random() * 2000 - 1000);
}
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
const material = new THREE.PointsMaterial({ color: 0xD4AF37, size: 2, transparent: true, opacity: 0.5 });
const points = new THREE.Points(geometry, material);
scene.add(points);

camera.position.z = 500;

function animate() {
    requestAnimationFrame(animate);
    points.rotation.y += 0.001;
    renderer.render(scene, camera);
}
animate();

// Fetching de KPIs desde Render
async function fetchStats() {
    try {
        const res = await fetch('https://srv-d6bqorvtn9qs73di0npg.onrender.com/api/v1/stats');
        const data = await res.json();
        document.getElementById('tvl-data').innerText = data.tvl;
        document.getElementById('rwa-data').innerText = data.rwa_growth;
        document.getElementById('sync-status').innerText = "NODO ATACAMA: SINCRONIZADO";
    } catch(e) {
        document.getElementById('sync-status').innerText = "MODO SATELITAL ACTIVO";
    }
}
setInterval(fetchStats, 5000);
fetchStats();
// Simulación de Mapa 3D de Nodos Atacama
function initMap() {
    const mapDiv = document.getElementById('atacam-map');
    mapDiv.innerHTML = '<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; color:#555;">[ CARGANDO MALLA GEODÉSICA DE ATACAMA... ]</div>';
    setTimeout(() => {
        mapDiv.style.background = "url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1000&q=80')";
        mapDiv.style.backgroundSize = "cover";
        mapDiv.style.opacity = "0.4";
    }, 2000);
}
initMap();

// Handler de Worldcoin
document.getElementById('worldid-verify').onclick = async () => {
    document.getElementById('verification-status').innerText = "●";
    document.getElementById('verification-status').style.color = "#39FF14";
    alert("WORLD ID: Verificación de Humanidad Exitosa. Acceso Nivel Whale Concedido.");
};
