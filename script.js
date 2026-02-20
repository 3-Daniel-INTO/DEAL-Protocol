const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('bg-canvas'), antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BufferGeometry();
const pointsCount = 18000;
const positions = new Float32Array(pointsCount * 3);

for(let i=0; i<pointsCount; i++) {
    positions[i*3] = (Math.random() - 0.5) * 25;
    positions[i*3+1] = (Math.random() - 0.5) * 4 - 2;
    positions[i*3+2] = (Math.random() - 0.5) * 25;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const material = new THREE.PointsMaterial({color: 0xD4AF37, size: 0.012, transparent: true, opacity: 0.6});
const mesh = new THREE.Points(geometry, material);
scene.add(mesh);

camera.position.y = 1;
camera.position.z = 6;

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.0001;
    const pos = geometry.attributes.position.array;
    for(let i=0; i<pointsCount; i++) {
        const x = pos[i*3];
        const z = pos[i*3+2];
        pos[i*3+1] = Math.sin(x*0.5 + time*8) * Math.cos(z*0.5 + time*8) * 0.7 - 1.8;
    }
    geometry.attributes.position.needsUpdate = true;
    mesh.rotation.y += 0.0003;
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

animate();
