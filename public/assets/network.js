async function checkSystemHealth() {
    const start = Date.now();
    try {
        const response = await fetch('/api/v1/health');
        const data = await response.json();
        document.getElementById('sync-status').textContent = data.status;
        document.getElementById('latency').textContent = (Date.now() - start) + 'ms';
    } catch (e) {
        document.getElementById('sync-status').textContent = 'OFFLINE_NODE';
        document.getElementById('sync-status').style.color = 'var(--red)';
    }
}
setInterval(checkSystemHealth, 5000);
