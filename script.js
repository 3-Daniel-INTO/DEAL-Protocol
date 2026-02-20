const hoverSfx = new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-tech-breakdown-1102.mp3'], volume: 0.1 });

// Engine 3D: Atacama Gold Terrain
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('bg-canvas'), alpha: true, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BufferGeometry();
const count = 25000;
const pos = new Float32Array(count * 3);
for(let i=0; i<count*3; i++) pos[i] = (Math.random() - 0.5) * 35;
geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
const material = new THREE.PointsMaterial({color: 0xD4AF37, size: 0.015, transparent: true, opacity: 0.6});
const mesh = new THREE.Points(geometry, material);
scene.add(mesh);
camera.position.z = 8;

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.0006;
    renderer.render(scene, camera);
}
animate();

// Sincronización con Render
async function loadData() {
    try {
        const res = await fetch('https://deal-protocol.onrender.com/api/v1/sync');
        const data = await res.json();
        document.getElementById('vc-val').innerText = data.vc;
        document.getElementById('rwa-val').innerText = data.rwa;
    } catch(e) {
        console.log("Offline mode - Using persistence cache.");
    }
}

document.querySelectorAll('.hover-sfx').forEach(el => el.addEventListener('mouseenter', () => hoverSfx.play()));

setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('.interface').style.display = 'flex';
    loadData();
}, 4000);
