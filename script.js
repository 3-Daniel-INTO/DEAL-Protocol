gsap.registerPlugin(ScrollTrigger);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('vortex-bg').appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();

// RUTAS ABSOLUTAS PARA RENDER Y VERCEL
const vortexTex = loader.load('./vortice_neon.png'); 
const astroTex = loader.load('./astronauta_vortice.png');

// Vórtice (Fondo Profundo)
const vGeo = new THREE.PlaneGeometry(150, 150);
const vMat = new THREE.MeshBasicMaterial({ map: vortexTex, transparent: true, opacity: 0.8 });
const vortex = new THREE.Mesh(vGeo, vMat);
vortex.position.z = -70;
scene.add(vortex);

// Astronauta (Elemento en Eje Z)
const aGeo = new THREE.PlaneGeometry(25, 25);
const aMat = new THREE.MeshBasicMaterial({ map: astroTex, transparent: true });
const astronaut = new THREE.Mesh(aGeo, aMat);
astronaut.position.set(0, 0, 10);
scene.add(astronaut);

camera.position.z = 50;

// ANIMACIÓN CINEMATOGRÁFICA DE SCROLL
gsap.to(astronaut.position, {
    z: -55, // El astronauta "viaja" hacia el fondo
    x: -8,
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
    }
});

gsap.to(vortex.rotation, {
    z: Math.PI * 15,
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

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
