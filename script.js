// --- MIA-X LOG SYSTEM ---
const logs = [
    "> SYNCING WITH ATACAMA NODE...",
    "> MIA-X: VERITAS AUDIT COMPLETE.",
    "> LIQUIDITY FLOW: $450M DETECTED.",
    "> STATUS: SOVEREIGN ACCESS GRANTED."
];
let logIndex = 0;
function updateLogs() {
    const logBox = document.getElementById('transaction-log');
    if(logBox) {
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.innerText = logs[logIndex % logs.length];
        logBox.prepend(entry);
        logIndex++;
    }
}
setInterval(updateLogs, 3000);

// --- NAVEGACIÓN SPA ---
function navTo(viewId) {
    document.querySelectorAll('.view').forEach(v => {
        v.classList.remove('active');
        v.style.opacity = 0;
    });
    const next = document.getElementById(viewId);
    next.classList.add('active');
    gsap.to(next, { opacity: 1, duration: 0.8 });
}

function showSection(sectionId) {
    document.querySelectorAll('.tab-pane').forEach(s => s.classList.remove('active'));
    document.getElementById('section-' + sectionId).classList.add('active');
}

// --- AUTH FLOW ---
function triggerAuth() {
    document.getElementById('auth-modal').style.display = 'flex';
}

function verifySignature() {
    document.getElementById('auth-status').innerText = "VERIFIED BY MIA-X";
    setTimeout(() => {
        document.getElementById('auth-modal').style.display = 'none';
        document.getElementById('crowd-lock').style.display = 'none';
        document.querySelector('.project-grid').classList.remove('blur-effect');
    }, 1500);
}

// --- 3D ATACAMA ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('bg-canvas'), alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.PlaneGeometry(100, 100, 120, 120);
const material = new THREE.PointsMaterial({color: 0xD4AF37, size: 0.02});
const terrain = new THREE.Points(geometry, material);
terrain.rotation.x = -Math.PI / 2.5;
scene.add(terrain);
camera.position.z = 25;

function anim() {
    requestAnimationFrame(anim);
    terrain.rotation.z += 0.001;
    renderer.render(scene, camera);
}
anim();
