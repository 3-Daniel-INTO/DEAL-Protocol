// Audio Biónico
const hoverSfx = new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-tech-breakdown-1102.mp3'], volume: 0.1 });
const clickSfx = new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-computer-processing-status-v2-3066.mp3'], volume: 0.3 });

// Three.js Heatmap Terrain
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('bg-canvas'), antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BufferGeometry();
const points = 25000;
const positions = new Float32Array(points * 3);
const colors = new Float32Array(points * 3);

for(let i=0; i<points; i++) {
    positions[i*3] = (Math.random() - 0.5) * 30;
    positions[i*3+1] = (Math.random() - 0.5) * 4 - 2;
    positions[i*3+2] = (Math.random() - 0.5) * 30;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const material = new THREE.PointsMaterial({ size: 0.015, color: 0xD4AF37, transparent: true, opacity: 0.6 });
const mesh = new THREE.Points(geometry, material);
scene.add(mesh);
camera.position.z = 7;

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.0001;
    const pos = geometry.attributes.position.array;
    for(let i=0; i<points; i++) {
        pos[i*3+1] = Math.sin(pos[i*3] + time*10) * 0.5 - 1.5;
    }
    geometry.attributes.position.needsUpdate = true;
    mesh.rotation.y += 0.0004;
    renderer.render(scene, camera);
}
animate();

// Sync Data from Render
async function syncDeal() {
    try {
        const response = await fetch('https://deal-protocol.onrender.com/api/v1/deal/sync');
        const data = await response.json();
        document.getElementById('vc-val').innerText = data.venture_capital;
        document.getElementById('rwa-val').innerText = data.rwa_lithium;
        document.getElementById('veritas-log').innerText = data.veritas_status;
    } catch (e) {
        console.log("Satlink Offline - Loading Cache...");
        document.getElementById('vc-val').innerText = "$450,000,000";
    }
}

// Eventos y Loader
document.querySelectorAll('.sfx-hover').forEach(el => el.addEventListener('mouseenter', () => hoverSfx.play()));
document.querySelector('.sfx-click').addEventListener('click', () => clickSfx.play());

setTimeout(() => {
    document.getElementById('satellite-loader').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('satellite-loader').style.display = 'none';
        document.querySelector('.main-terminal').style.display = 'flex';
        syncDeal();
    }, 1000);
}, 3500);
