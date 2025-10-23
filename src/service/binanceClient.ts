import { analyzeData } from "../utils/analyzeData";
import axios from "axios";
export interface KlineData {
  openTime: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  closeTime: number;
}
export const fetchHistoryData = async (
  symbol: string,
  startTime: number,
  endTime: number,
  limit: number
): Promise<KlineData[]> => {
  try {
    const response = await axios.get(`https://api.binance.com/api/v3/klines`, {
      params: {
        symbol: symbol.toUpperCase(),
        interval: "1m",
        startTime,
        endTime,
        limit,
      },
    });
    return response.data.map((item: any) => ({
      openTime: item[0],
      open: item[1],
      high: item[2],
      low: item[3],
      close: item[4],
      volume: item[5],
      closeTime: item[6],
    }));
  } catch (error) {
    console.error((error as Error).message);
    throw new Error(
      "Failed to fetch history data: " + (error as Error).message
    );
  }
};
export const analyzeMarketData = async (klines: KlineData[]) => {
  return analyzeData(klines.map((kline: KlineData) => Number(kline.close)));
};
