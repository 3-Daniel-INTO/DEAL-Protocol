gsap.registerPlugin(ScrollTrigger);

// --- FONDO DE REALIDAD AUMENTADA (3D NEURAL) ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('ar-mockup-bg'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.IcosahedronGeometry(20, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xD4AF37, wireframe: true, transparent: true, opacity: 0.15 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
camera.position.z = 50;

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.002;
    mesh.rotation.x += 0.001;
    renderer.render(scene, camera);
}
animate();

// --- STORYTELLING ANIMATION ---
gsap.utils.toArray(".panel").forEach((panel, i) => {
    gsap.from(panel.children, {
        scrollTrigger: {
            trigger: panel,
            start: "top center",
            toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2
    });
});

function runBiometricScan() {
    alert("MIA-X: Escaneando huella digital... Identidad Soberana Certificada.");
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
