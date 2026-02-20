gsap.registerPlugin(ScrollTrigger);

// --- MOTOR 3D OPTIMIZADO PARA PC/MOBILE ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
const vortexTex = loader.load('vortice_animado.png');
const astroTex = loader.load('astronauta_vortice.png');

// Vórtice
const vGeo = new THREE.PlaneGeometry(window.innerWidth > 768 ? 120 : 80, window.innerWidth > 768 ? 120 : 80);
const vMat = new THREE.MeshBasicMaterial({ map: vortexTex, transparent: true, opacity: 0.7 });
const vortex = new THREE.Mesh(vGeo, vMat);
vortex.position.z = -50;
scene.add(vortex);

// Astronauta
const aGeo = new THREE.PlaneGeometry(15, 15);
const aMat = new THREE.MeshBasicMaterial({ map: astroTex, transparent: true });
const astronaut = new THREE.Mesh(aGeo, aMat);
astronaut.position.set(5, -2, 10);
scene.add(astronaut);

camera.position.z = 30;

// Scroll Animation: El astronauta entra al vórtice
gsap.to(astronaut.position, {
    z: -40, x: -5, y: 5,
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5
    }
});

// Firma Biométrica MIA-X
function triggerMIAAuth() {
    const status = document.getElementById('auth-box');
    status.innerHTML = "ESCANEANDO BIOMETRÍA...";
    setTimeout(() => {
        status.innerHTML = "VINCULANDO WALLET SOL/BTC...";
        setTimeout(() => {
            status.innerHTML = "SISTEMA MIA-X VALIDADO";
            status.style.background = "#39FF14";
            status.style.color = "#000";
        }, 2000);
    }, 2000);
}

function animate() {
    requestAnimationFrame(animate);
    vortex.rotation.z += 0.002;
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
