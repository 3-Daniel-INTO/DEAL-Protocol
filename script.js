// NAVEGACIÓN ENTRE PANTALLAS
function navTo(screenId) {
    gsap.to(".screen.active", { opacity: 0, duration: 0.5, onComplete: () => {
        document.querySelector(".screen.active").classList.remove("active");
        const next = document.getElementById(screenId);
        next.classList.add("active");
        gsap.to(next, { opacity: 1, duration: 0.5 });
    }});
}

function connectWallet() {
    document.getElementById('wallet-step').style.display = 'none';
    document.getElementById('bio-step').style.display = 'block';
}

// ESCENA 3D: MONTAÑAS DE ORO
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('scene-3d'), alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.PlaneGeometry(60, 60, 100, 100);
const material = new THREE.PointsMaterial({ color: 0xD4AF37, size: 0.02 });

const pos = geometry.attributes.position.array;
for(let i=0; i<pos.length; i+=3) {
    pos[i+2] = Math.sin(pos[i] * 0.4) * Math.cos(pos[i+1] * 0.4) * 3;
}

const mountains = new THREE.Points(geometry, material);
mountains.rotation.x = -Math.PI / 2.5;
scene.add(mountains);
camera.position.z = 15;

function animate() {
    requestAnimationFrame(animate);
    mountains.rotation.z += 0.001;
    renderer.render(scene, camera);
}
animate();
