// --- CONFIGURACIÓN 3D ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('main-canvas'), alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.PlaneGeometry(80, 80, 150, 150);
const material = new THREE.PointsMaterial({color: 0xD4AF37, size: 0.015});
const points = new THREE.Points(geometry, material);
points.rotation.x = -Math.PI / 3;
scene.add(points);
camera.position.z = 20;

function animate3D() {
    requestAnimationFrame(animate3D);
    const time = Date.now() * 0.001;
    const pos = geometry.attributes.position.array;
    for(let i=0; i<pos.length; i+=3) {
        pos[i+2] = Math.sin(pos[i]*0.2 + time) * Math.cos(pos[i+1]*0.2 + time) * 1.5;
    }
    geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
}
animate3D();

// --- NAVEGACIÓN CINEMÁTICA ---
function transitionTo(viewId) {
    const current = document.querySelector('.view.active');
    const next = document.getElementById(viewId);

    gsap.to(current, { opacity: 0, y: -20, duration: 0.6, onComplete: () => {
        current.classList.remove('active');
        next.classList.add('active');
        gsap.fromTo(next, {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 0.6});
    }});
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.link').forEach(l => l.classList.remove('active'));
    document.getElementById('tab-' + tabId).classList.add('active');
    gsap.from('#tab-' + tabId, {opacity: 0, x: 10, duration: 0.4});
}

function fakeConnect() {
    gsap.to("#btn-wallet", {opacity: 0, duration: 0.3, onComplete: () => {
        document.getElementById('btn-wallet').classList.add('hidden');
        document.getElementById('biometric-trigger').classList.remove('hidden');
    }});
}
