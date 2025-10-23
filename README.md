# Binance trading bot (Node.js + typescript)

Simple app that fetches data from binance API analyzes prices

## Technologies

- Node.js
- Express.js
- Axios
- Docker + Docker compose

## Local Setup

1. Clone the repository and install dependecies

```bash
git clone <REPO_URL>
cd <PROJECT_NAME>
npm install
```

2. create a .env file

- MONGO_URL = mongodb://mongo:27017/live-coding
- PORT = 3000
- BINANCE_API_KEY = <Your binance api key>
- BINANCE_SECRET_KEY = <Your binance api secret key>

3. Start aplications

### localy

```bash
npm run dev
```

### docker

1. build and start the container:

```bash
docker compose up --build
```

2. Aplication URL

- http://localhost:3000
- mongodb://localhost:27017

# Test API

- GET localhost:3000/trade/history?symbol=BTCUSDT&startTime=1698000000000&endTime=1698086400000&limit=10
  fetches recent trades for symbol and return analysis

### Example response

{
"symbol": "BTCUSDT",
"analysis": [
{
"to": 29908.8,
"delta": null,
"percentage": null
},
]
}

# Project Structure

src/
service/binanceClient.ts
controller/tradeController.ts
utils/analyzeData.ts
app.ts
server.ts
