gsap.registerPlugin(ScrollTrigger);

// Configuración de la Escena 3D
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('experience-container').appendChild(renderer.domElement);

// Carga de texturas (Usando tus imágenes)
const loader = new THREE.TextureLoader();
const vortexTex = loader.load('vortice_animado.png');
const astroTex = loader.load('astronauta_vortice.png');

// Creación del Vórtice (Plano al fondo)
const vortexGeo = new THREE.PlaneGeometry(100, 100);
const vortexMat = new THREE.MeshBasicMaterial({ map: vortexTex, transparent: true, opacity: 0.8 });
const vortex = new THREE.Mesh(vortexGeo, vortexMat);
vortex.position.z = -50;
scene.add(vortex);

// Creación del Astronauta (Sprite o Plano que se desplaza)
const astroGeo = new THREE.PlaneGeometry(15, 15);
const astroMat = new THREE.MeshBasicMaterial({ map: astroTex, transparent: true });
const astronaut = new THREE.Mesh(astroGeo, astroMat);
astronaut.position.set(0, 0, 10);
scene.add(astronaut);

camera.position.z = 30;

// Animación de Enjambre al Scroll
gsap.to(astronaut.position, {
    z: -40, // Se aleja hacia el vórtice
    x: 2,
    scrollTrigger: {
        trigger: "#scroll-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
    }
});

gsap.to(vortex.rotation, {
    z: Math.PI * 2,
    scrollTrigger: {
        trigger: "#scroll-wrapper",
        scrub: 1
    }
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
