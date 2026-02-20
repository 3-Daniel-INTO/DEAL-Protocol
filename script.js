// Three.js: Atacama Particle Relief
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-3d'), alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);
const material = new THREE.PointsMaterial({ color: 0xD4AF37, size: 1.5 });
const mountain = new THREE.Points(geometry, material);
mountain.rotation.x = -Math.PI / 2;
scene.add(mountain);

camera.position.y = 100;
camera.position.z = 400;

function animate() {
    requestAnimationFrame(animate);
    const positions = mountain.geometry.attributes.position.array;
    for(let i=2; i<positions.length; i+=3) {
        positions[i] = Math.sin(i + Date.now()*0.001) * 20; 
    }
    mountain.geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
}
animate();

// Sync con Render
async function updateWhaleData() {
    try {
        const stats = await (await fetch('https://srv-d6bqorvtn9qs73di0npg.onrender.com/api/v1/stats')).json();
        const impact = await (await fetch('https://srv-d6bqorvtn9qs73di0npg.onrender.com/api/v1/impact-report')).json();
        document.getElementById('tvl-value').innerText = stats.tvl;
        document.getElementById('impact-score').innerText = impact.civilization_score;
    } catch(e) { console.log(">> [MIA-X]: Nodo Atacama en modo offline."); }
}
setInterval(updateWhaleData, 10000);
updateWhaleData();
async function refreshSynergy() {
    try {
        const res = await fetch('https://srv-d6bqorvtn9qs73di0npg.onrender.com/api/v1/synergy');
        const data = await res.json();
        const view = document.getElementById('synergy-view');
        
        view.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                <span>CO2 OFFSET: <b style="color:var(--neon);">${data.impact_metrics.co2_reduction_target}</b></span>
                <span>INFRA: <b style="color:white;">${data.impact_metrics.energy_infrastructure}</b></span>
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:10px;">
                <div style="border:1px solid #333; padding:5px;">BTC: ${data.crypto_appreciation.btc_impact}</div>
                <div style="border:1px solid #333; padding:5px;">ETH: ${data.crypto_appreciation.eth_impact}</div>
                <div style="border:1px solid #333; padding:5px;">SOL: ${data.crypto_appreciation.sol_impact}</div>
            </div>
        `;
    } catch(e) { console.log(">> [MIA-X]: Nodo Atacama sincronizando..."); }
}
setInterval(refreshSynergy, 9000);
refreshSynergy();
