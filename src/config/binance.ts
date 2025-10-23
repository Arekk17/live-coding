export const binanceConfig = {
  apiKey: process.env.BINANCE_API_KEY,
  secretKey: process.env.BINANCE_SECRET_KEY,
  baseUrl: process.env.BINANCE_BASE_URL || "https://api.binance.com",
};

export default binanceConfig;
