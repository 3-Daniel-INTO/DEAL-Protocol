async function checkHealth() {
    try {
        const response = await fetch('/api/v1/health');
        const data = await response.json();
        document.getElementById('sync-status').textContent = data.status;
        document.getElementById('sync-status').style.color = '#39FF14';
    } catch (e) {
        document.getElementById('sync-status').textContent = 'SATELLITE_MODE';
        document.getElementById('sync-status').style.color = '#FFD700';
    }
}
setInterval(checkHealth, 5000);
