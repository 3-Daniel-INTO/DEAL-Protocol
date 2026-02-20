// --- GENERACIÓN DE HUELLA DIGITAL ---
function generateDigitalFingerprint() {
    console.log(">> [MIA-X]: Capturando parámetros biométricos del inversor...");
    const authScreen = document.getElementById('auth-screen');
    const dashboard = document.getElementById('dashboard');
    
    // Simulación de sincronización con Render y Vercel
    setTimeout(() => {
        authScreen.classList.remove('active');
        dashboard.classList.add('active');
        animateBalance();
    }, 2500);
}

function animateBalance() {
    let count = 0;
    const target = 1170000000;
    const timer = setInterval(() => {
        count += target / 50;
        document.getElementById('main-balance').innerText = `$${Math.floor(count).toLocaleString()}`;
        if (count >= target) {
            document.getElementById('main-balance').innerText = `$${target.toLocaleString()}`;
            clearInterval(timer);
        }
    }, 30);
}

// --- BACKGROUND NEURONAL (Always Learning) ---
const canvas = document.getElementById('neural-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }
    draw() {
        ctx.fillStyle = 'rgba(212, 175, 55, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 100; i++) particles.push(new Particle());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}
init(); animate();
