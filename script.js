const BACKEND_URL = 'https://deal-protocol.onrender.com/api/v1/deal/all';

// Audio SFX Biónico
const hoverSound = new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-tech-breakdown-1102.mp3'], volume: 0.1 });
const clickSound = new Howl({ src: ['https://assets.mixkit.co/sfx/preview/mixkit-computer-processing-status-v2-3066.mp3'], volume: 0.3 });

// Función para FORZAR el llenado de datos
async function forceDataHydration() {
    try {
        console.log(">> MIA-X: Intentando sincronización satelital...");
        const res = await fetch(BACKEND_URL);
        const data = await res.json();
        
        // Inyectar datos en el DOM
        document.getElementById('vc-val').innerText = data.vc.value;
        document.getElementById('rwa-val').innerText = data.rwa.value;
        document.getElementById('co2-val').innerText = data.co2.value;
        document.getElementById('veritas-status').innerText = data.veritas.status;
        
        console.log(">> MIA-X: Sincronización Exitosa.");
    } catch (error) {
        console.error(">> MIA-X Error: Satélite fuera de rango. Usando respaldo de Atacama.");
        // Valores de respaldo (Backup) para que la web NUNCA esté vacía
        document.getElementById('vc-val').innerText = "$450,000,000";
        document.getElementById('rwa-val').innerText = "$720,000,000";
    }
}

// Motor 3D Atacama (Optimizado para Carga Rápida)
const init3D = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('bg-canvas'), alpha: true, antialias: false});
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geo = new THREE.BufferGeometry();
    const count = 15000;
    const pos = new Float32Array(count * 3);
    for(let i=0; i<count*3; i++) pos[i] = (Math.random() - 0.5) * 35;
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    
    const mat = new THREE.PointsMaterial({color: 0xD4AF37, size: 0.012});
    const mesh = new THREE.Points(geo, mat);
    scene.add(mesh);
    camera.position.z = 8;

    function animate() {
        requestAnimationFrame(animate);
        mesh.rotation.y += 0.0006;
        renderer.render(scene, camera);
    }
    animate();
};

// Control de UI y Eventos
window.onload = () => {
    init3D();
    forceDataHydration();
    
    document.querySelectorAll('.hover-sfx').forEach(el => {
        el.addEventListener('mouseenter', () => hoverSound.play());
    });

    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('app').style.display = 'flex';
    }, 3000);
};
