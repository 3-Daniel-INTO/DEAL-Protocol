gsap.registerPlugin(ScrollTrigger);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('vortex-canvas-container').appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();
// Texturas vinculadas a los archivos adjuntos del usuario
const vortexTex = loader.load('vortice_neon.png');
const astroTex = loader.load('astronauta_solo.png');

// Creación del Vórtice
const vGeo = new THREE.PlaneGeometry(100, 100);
const vMat = new THREE.MeshBasicMaterial({ map: vortexTex, transparent: true, opacity: 0.8 });
const vortex = new THREE.Mesh(vGeo, vMat);
vortex.position.z = -40;
scene.add(vortex);

// Creación del Astronauta
const aGeo = new THREE.PlaneGeometry(15, 15);
const aMat = new THREE.MeshBasicMaterial({ map: astroTex, transparent: true });
const astronaut = new THREE.Mesh(aGeo, aMat);
astronaut.position.set(5, -5, 10);
scene.add(astronaut);

camera.position.z = 30;

// ANIMACIÓN DE DESPLAZAMIENTO PROFUNDO
gsap.to(astronaut.position, {
    z: -30, x: -2, y: 2,
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
    }
});

gsap.to(vortex.rotation, {
    z: Math.PI * 8,
    scrollTrigger: {
        trigger: "body",
        scrub: 1
    }
});

function animate() {
    requestAnimationFrame(animate);
    vortex.rotation.z += 0.002;
    renderer.render(scene, camera);
}
animate();
