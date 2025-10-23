import { fetchHistoryData } from "@/service/binanceClient";
import { Request, Response } from "express";
import { analyzeData } from "@/utils/analyzeData";

export const getPriceChanges = async (req: Request, res: Response) => {
  try {
    const { symbol, startTime, endTime } = req.query;
    if (!symbol || !startTime || !endTime) {
      return res.status(400).json({ error: "Missing required parameters" });
    }
    const data = await fetchHistoryData(
      symbol as string,
      startTime as string,
      endTime as string
    );
    const analysis = analyzeData(data);
    res.json(analysis);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
