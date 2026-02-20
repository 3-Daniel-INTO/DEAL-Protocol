const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('bg-canvas'), antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BufferGeometry();
const pointsCount = 15000;
const positions = new Float32Array(pointsCount * 3);

for(let i=0; i<pointsCount; i++) {
    positions[i*3] = (Math.random() - 0.5) * 20;
    positions[i*3+1] = (Math.random() - 0.5) * 5 - 2;
    positions[i*3+2] = (Math.random() - 0.5) * 20;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const material = new THREE.PointsMaterial({color: 0xD4AF37, size: 0.015, transparent: true, opacity: 0.8});
const mesh = new THREE.Points(geometry, material);
scene.add(mesh);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.0001;
    const pos = geometry.attributes.position.array;
    for(let i=0; i<pointsCount; i++) {
        const x = pos[i*3];
        const z = pos[i*3+2];
        pos[i*3+1] = Math.sin(x + time*10) * Math.cos(z + time*10) * 0.5 - 1.5;
    }
    geometry.attributes.position.needsUpdate = true;
    mesh.rotation.y += 0.0005;
    renderer.render(scene, camera);
}
animate();
