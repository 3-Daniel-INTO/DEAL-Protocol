const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('atacama-canvas'), antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Geometría de Montañas Atacama
const geometry = new THREE.PlaneGeometry(50, 50, 128, 128);
const material = new THREE.PointsMaterial({ color: 0xD4AF37, size: 0.02, transparent: true, opacity: 0.8 });

const positions = geometry.attributes.position.array;
for (let i = 0; i < positions.length; i += 3) {
    const x = positions[i];
    const y = positions[i + 1];
    // Simulación de relieve montañoso
    positions[i + 2] = Math.sin(x * 0.5) * Math.cos(y * 0.5) * 2 + Math.random() * 0.2;
}

const points = new THREE.Points(geometry, material);
points.rotation.x = -Math.PI / 2.5;
scene.add(points);

camera.position.z = 15;
camera.position.y = 5;

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.0005;
    points.rotation.z += 0.0005;
    
    // Deformación dinámica (viento satelital)
    const pos = geometry.attributes.position.array;
    for(let i=0; i<pos.length; i+=3) {
        pos[i+2] += Math.sin(time + pos[i]*0.1) * 0.005;
    }
    geometry.attributes.position.needsUpdate = true;
    
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
