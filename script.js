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
// --- ESCUDO SATELITAL (Efecto Láser) ---
function activateSatelliteShield() {
    const scanner = document.createElement('div');
    scanner.className = 'satellite-scanner';
    document.body.appendChild(scanner);

    setInterval(() => {
        gsap.fromTo(scanner, { top: "-5%" }, { 
            top: "105%", duration: 3, ease: "power2.inOut",
            onComplete: () => { console.log(">> [MIA-X]: Sector Escaneado y Protegido."); }
        });
    }, 15000); // Escaneo cada 15 segundos
}

// --- PANEL DE CONTROL EMPRENDEDORES ---
function showRegistration() {
    const modal = document.createElement('div');
    modal.style = "position:fixed; inset:0; background:rgba(0,0,0,0.9); z-index:10000; display:flex; align-items:center; justify-content:center;";
    modal.innerHTML = `
        <div class="glass-morph" style="max-width:500px; text-align:center;">
            <h2 style="color:var(--neon-green)">REGISTRO STARTUP MIA-X</h2>
            <p>Tu proyecto será auditado por el enjambre G-AGI para determinar viabilidad institucional.</p>
            <input type="text" placeholder="Nombre del Proyecto" style="width:100%; padding:10px; margin:10px 0; background:#111; border:1px solid var(--neon-green); color:#fff;">
            <button class="action-btn" onclick="this.parentElement.innerHTML='<h3>SINCRONIZANDO CON ATACAMA...</h3>'; setTimeout(()=>location.reload(), 2000)">ENVIAR A LA RED</button>
        </div>
    `;
    document.body.appendChild(modal);
}

activateSatelliteShield();
