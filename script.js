// SFX Pre-load
const hoverSfx = new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-tech-breakdown-1102.mp3'], volume: 0.1 });
const activateSfx = new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-computer-processing-status-v2-3066.mp3'], volume: 0.3 });

// Engine 3D
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('bg-canvas'), antialias: true, alpha: true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BufferGeometry();
const pointsCount = 22000;
const positions = new Float32Array(pointsCount * 3);
const colors = new Float32Array(pointsCount * 3);

for(let i=0; i<pointsCount; i++) {
    positions[i*3] = (Math.random() - 0.5) * 25;
    positions[i*3+1] = (Math.random() - 0.5) * 5 - 2;
    positions[i*3+2] = (Math.random() - 0.5) * 25;
    
    // Color inicial Dorado
    colors[i*3] = 0.83; colors[i*3+1] = 0.68; colors[i*3+2] = 0.21;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({ size: 0.015, vertexColors: true, transparent: true, opacity: 0.7 });
const mesh = new THREE.Points(geometry, material);
scene.add(mesh);

camera.position.z = 6;

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.0002;
    const pos = geometry.attributes.position.array;
    const col = geometry.attributes.color.array;

    for(let i=0; i<pointsCount; i++) {
        const x = pos[i*3];
        const z = pos[i*3+2];
        pos[i*3+1] = Math.sin(x*0.5 + time*5) * Math.cos(z*0.5 + time*5) * 0.6 - 1.5;
        
        // Simulación de Heatmap: Si la partícula está alta, se vuelve Cian
        if(pos[i*3+1] > -1.2) {
            col[i*3] = 0; col[i*3+1] = 0.95; col[i*3+2] = 1;
        } else {
            col[i*3] = 0.83; col[i*3+1] = 0.68; col[i*3+2] = 0.21;
        }
    }
    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.color.needsUpdate = true;
    mesh.rotation.y += 0.0005;
    renderer.render(scene, camera);
}
animate();

// Eventos
document.querySelectorAll('.hover-sfx').forEach(el => {
    el.addEventListener('mouseenter', () => hoverSfx.play());
});
document.getElementById('cta-btn').addEventListener('click', () => activateSfx.play());

// UI Switch
setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('.interface').style.display = 'flex';
}, 3500);

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
