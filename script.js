gsap.registerPlugin(ScrollTrigger);

// --- ENGINE 3D CINEMATOGRÁFICO ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('experience-vortex').appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
const vortexTex = loader.load('/public/vortice_neon.png');
const astroTex = loader.load('/public/astronauta_solo.png');

// Vórtice de Datos
const vGeo = new THREE.PlaneGeometry(150, 150);
const vMat = new THREE.MeshBasicMaterial({ map: vortexTex, transparent: true, opacity: 0.6 });
const vortex = new THREE.Mesh(vGeo, vMat);
vortex.position.z = -80;
scene.add(vortex);

// Astronauta (Deep Space Z-Axis)
const aGeo = new THREE.PlaneGeometry(25, 25);
const aMat = new THREE.MeshBasicMaterial({ map: astroTex, transparent: true });
const astronaut = new THREE.Mesh(aGeo, aMat);
astronaut.position.set(0, 0, 15);
scene.add(astronaut);

camera.position.z = 50;

// Animación de Profundidad DEAL
gsap.to(astronaut.position, {
    z: -60,
    x: -10,
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
    }
});

gsap.to(vortex.rotation, {
    z: Math.PI * 12,
    scrollTrigger: {
        trigger: "body",
        scrub: 1
    }
});

// --- FUNCIONALIDAD MIA-X ---
function startBiometricScan() {
    const btn = document.getElementById('biometric-trigger');
    btn.innerHTML = "ESCANEANDO LLAVES VITALES...";
    setTimeout(() => {
        btn.innerHTML = "FIRMA MIA-X VALIDADA";
        btn.style.background = "#39FF14";
        btn.style.color = "#000";
    }, 2500);
}

function animate() {
    requestAnimationFrame(animate);
    vortex.rotation.z += 0.0005;
    renderer.render(scene, camera);
}
animate();
