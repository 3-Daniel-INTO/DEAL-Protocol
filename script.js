gsap.registerPlugin(ScrollTrigger);

// --- ESCENA NEURAL 3D ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('vortex-ui-bg').appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
// Cargando texturas de astronauta y vórtice (basado en tus adjuntos)
const vortexTex = loader.load('vortice-neon.png'); 
const astroTex = loader.load('astronauta-deal.png');

// Creación del Vórtice
const vGeo = new THREE.PlaneGeometry(60, 60);
const vMat = new THREE.MeshBasicMaterial({ map: vortexTex, transparent: true, opacity: 0.9 });
const vortex = new THREE.Mesh(vGeo, vMat);
vortex.position.z = -20;
scene.add(vortex);

// Creación del Astronauta
const aGeo = new THREE.PlaneGeometry(10, 10);
const aMat = new THREE.MeshBasicMaterial({ map: astroTex, transparent: true });
const astronaut = new THREE.Mesh(aGeo, aMat);
astronaut.position.set(0, 0, 5);
scene.add(astronaut);

camera.position.z = 15;

// --- LÓGICA DE DESPLAZAMIENTO (Astronauta al Vórtice) ---
gsap.to(astronaut.position, {
    z: -15, // Se aleja hacia el fondo
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5
    }
});

gsap.to(vortex.rotation, {
    z: Math.PI * 4,
    scrollTrigger: {
        trigger: "body",
        scrub: 1
    }
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

function showRegistration() {
    alert("Iniciando registro en MIA-X para emprendedores...");
}
