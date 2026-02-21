gsap.registerPlugin(ScrollTrigger);

// --- 3D ENGINE ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('vortex-bg').appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
const vortexTex = loader.load('vortice_neon.png'); 
const astroTex = loader.load('astronauta_vortice.png');

// Background Vortex
const vGeo = new THREE.PlaneGeometry(120, 120);
const vMat = new THREE.MeshBasicMaterial({ map: vortexTex, transparent: true, opacity: 0.6 });
const vortex = new THREE.Mesh(vGeo, vMat);
vortex.position.z = -60;
scene.add(vortex);

// Astronauta (Movimiento en Eje Z)
const aGeo = new THREE.PlaneGeometry(20, 20);
const aMat = new THREE.MeshBasicMaterial({ map: astroTex, transparent: true });
const astronaut = new THREE.Mesh(aGeo, aMat);
astronaut.position.set(0, 0, 10);
scene.add(astronaut);

camera.position.z = 40;

// Scroll Animation: Cinematic Depth
gsap.to(astronaut.position, {
    z: -50,
    x: -5,
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
    }
});

gsap.to(vortex.rotation, {
    z: Math.PI * 10,
    scrollTrigger: {
        trigger: "body",
        scrub: 1
    }
});

function animate() {
    requestAnimationFrame(animate);
    vortex.rotation.z += 0.001;
    renderer.render(scene, camera);
}
animate();

// --- FUNCIONES DEAL ---
function connectSovereign() {
    alert("VINCULANDO WALLET CONNECT... ESPERANDO FIRMA MIA-X");
}

function startBiometric() {
    const box = document.querySelector('.biometric-box');
    box.innerHTML = "ESCANEANDO... ACCESO CONCEDIDO";
    box.style.borderColor = "#39FF14";
}
