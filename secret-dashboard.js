// DEAL Secret Dashboard Logic
document.addEventListener('keydown', (e) => {
    if (e.key === 'I' && event.shiftKey || e.key === '3') { // Lógica combinatoria Into-3
        window.access_count = (window.access_count || 0) + 1;
        if(window.access_count >= 2) {
            showSecretMIAXDashboard();
        }
    }
});

function showSecretMIAXDashboard() {
    const dash = document.createElement('div');
    dash.id = 'mia-x-admin';
    dash.innerHTML = `
        <div class="terminal-admin">
            <h3>MIA-X COMMAND CENTER</h3>
            <p>SATELLITE_STATUS: <span class="green">OPTIMAL</span></p>
            <p>QUANTUM_ENCRYPTION: <span class="green">ACTIVE</span></p>
            <p>NODES_ATACAMA: 124/124</p>
            <button onclick="this.parentElement.remove()">CLOSE_SESSION</button>
        </div>
    `;
    document.body.appendChild(dash);
}
