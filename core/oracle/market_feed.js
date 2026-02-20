const axios = require('axios');

async function getMarketData() {
    try {
        // En producción, aquí se usaría tu API Key institucional
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,solana,ethereum&vs_currencies=usd');
        return response.data;
    } catch (error) {
        console.error(">> [ORACLE ERROR]: Atacama Sync Fail. Using Cached Data.");
        return { bitcoin: { usd: 105000 }, solana: { usd: 245 }, ethereum: { usd: 4200 } };
    }
}
module.exports = { getMarketData };
