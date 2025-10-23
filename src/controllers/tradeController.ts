import { analyzeMarketData, fetchHistoryData } from "../service/binanceClient";
import { Request, Response } from "express";
export const getPriceChanges = async (req: Request, res: Response) => {
  try {
    const { symbol, startTime, endTime, limit } = req.query;
    if (!symbol || !startTime || !endTime) {
      return res.status(400).json({ error: "Missing required parameters" });
    }
    const klines = await fetchHistoryData(
      symbol as string,
      Number(startTime),
      Number(endTime),
      Number(limit) || 100
    );
    if (klines.length === 0) {
      return res
        .status(404)
        .json({ error: "No data found for the given symbol and time range" });
    }
    const analysis = await analyzeMarketData(klines);
    return res.status(200).json({ symbol, analysis });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to analyze market data" });
  }
};
