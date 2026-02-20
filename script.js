import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createConfig } from '@wagmi/core'
import { mainnet, polygon, bsc, arbitrum } from '@wagmi/core/chains'

// 1. Configurar Cadenas (BTC-Bridge, ETH, SOL, etc.)
const chains = [mainnet, polygon, bsc, arbitrum]
const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID' // Reemplazar con ID de cloud.walletconnect.com

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)
const web3Modal = new Web3Modal({ projectId }, ethereumClient)

// Background Animado: Partículas de Montaña
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas-3d'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const particles = new THREE.BufferGeometry();
const pCount = 8000;
const posArray = new Float32Array(pCount * 3);
for(let i=0; i < pCount * 3; i++) { posArray[i] = (Math.random() - 0.5) * 10; }
particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const pMaterial = new THREE.PointsMaterial({ size: 0.005, color: 0xD4AF37, transparent: true });
const pMesh = new THREE.Points(particles, pMaterial);
scene.add(pMesh);
camera.position.z = 3;

function animate() {
    requestAnimationFrame(animate);
    pMesh.rotation.y += 0.001;
    renderer.render(scene, camera);
}
animate();
