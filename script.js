gsap.registerPlugin(ScrollTrigger);

// --- CONFIGURACIÓN DE ESCENA 3D ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('neural-canvas-container').appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
// Texturas basadas en tus adjuntos
const vortexTexture = loader.load('vortice_neon.png');
const astroTexture = loader.load('astronauta_solo.png');

// Vórtice de Fondo
const vGeo = new THREE.PlaneGeometry(80, 80);
const vMat = new THREE.MeshBasicMaterial({ map: vortexTexture, transparent: true, opacity: 0.8 });
const vortex = new THREE.Mesh(vGeo, vMat);
vortex.position.z = -30;
scene.add(vortex);

// Astronauta Soberano
const aGeo = new THREE.PlaneGeometry(12, 12);
const aMat = new THREE.MeshBasicMaterial({ map: astroTexture, transparent: true });
const astronaut = new THREE.Mesh(aGeo, aMat);
astronaut.position.set(2, -2, 10);
scene.add(astronaut);

camera.position.z = 20;

// --- EFECTO DE DESPLAZAMIENTO HACIA EL VÓRTICE ---
gsap.to(astronaut.position, {
    z: -25, // El astronauta entra al vórtice
    x: -1,
    y: 1,
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
    }
});

gsap.to(vortex.rotation, {
    z: Math.PI * 6,
    scrollTrigger: {
        trigger: "body",
        scrub: 1
    }
});

function animate() {
    requestAnimationFrame(animate);
    vortex.rotation.z += 0.001; // Rotación lenta constante
    renderer.render(scene, camera);
}
animate();
