// Motor de Partículas Atacama
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('bg-canvas'), alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BufferGeometry();
const pointsCount = 30000;
const pos = new Float32Array(pointsCount * 3);
for(let i=0; i<pointsCount*3; i++) pos[i] = (Math.random() - 0.5) * 40;
geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
const material = new THREE.PointsMaterial({color: 0xD4AF37, size: 0.015});
const mesh = new THREE.Points(geometry, material);
scene.add(mesh);
camera.position.z = 10;

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.0005;
    renderer.render(scene, camera);
}
animate();
