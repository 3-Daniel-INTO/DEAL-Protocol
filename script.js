const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('bg-canvas'), alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(20000 * 3);
for(let i=0; i<60000; i++) positions[i] = (Math.random() - 0.5) * 30;
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const material = new THREE.PointsMaterial({color: 0xD4AF37, size: 0.012});
const points = new THREE.Points(geometry, material);
scene.add(points);
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    points.rotation.y += 0.0005;
    renderer.render(scene, camera);
}
animate();

// Simulación de carga satelital
setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('.interface').style.display = 'flex';
}, 3500);
