const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Crear Terreno de Partículas (Estilo Atacama Gold)
const pointsCount = 12000;
const positions = new Float32Array(pointsCount * 3);
const geometry = new THREE.BufferGeometry();

for(let i=0; i<pointsCount; i++) {
    const x = (Math.random() - 0.5) * 15;
    const z = (Math.random() - 0.5) * 15;
    const y = (Math.sin(x * 1.5) * Math.cos(z * 1.5) * 0.5) - 1.5;
    
    positions[i*3] = x;
    positions[i*3+1] = y;
    positions[i*3+2] = z;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const material = new THREE.PointsMaterial({ color: 0xD4AF37, size: 0.015, transparent: true, opacity: 0.7 });
const points = new THREE.Points(geometry, material);
scene.add(points);

camera.position.y = 1;
camera.position.z = 4;

function animate() {
    requestAnimationFrame(animate);
    
    // Animación suave del terreno
    const time = Date.now() * 0.0001;
    const pos = geometry.attributes.position.array;
    for(let i=0; i<pointsCount; i++) {
        const x = pos[i*3];
        const z = pos[i*3+2];
        pos[i*3+1] = (Math.sin(x + time * 10) * Math.cos(z + time * 10) * 0.4) - 1.5;
    }
    geometry.attributes.position.needsUpdate = true;
    points.rotation.y += 0.001;
    
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
