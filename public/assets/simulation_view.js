async function refreshMarketData() {
    try {
        const response = await fetch('https://srv-d6bqorvtn9qs73di0npg.onrender.com/api/v1/market/simulation');
        const json = await response.json();
        const feed = document.getElementById('market-feed');
        
        feed.innerHTML = json.data.market_assets.map(asset => `
            <div style="border:1px solid #222; padding:10px;">
                <span style="color:#888;">${asset.name}</span><br>
                <b style="font-size:1.1rem;">$${asset.price}</b> 
                <span style="color:${asset.trend === 'UP' ? '#39FF14' : '#FFD700'};">${asset.change}</span>
            </div>
        `).join('');
    } catch (e) {
        console.warn(">> [MIA-X]: Nodo en modo satelital.");
    }
}
setInterval(refreshMarketData, 8000);
refreshMarketData();
