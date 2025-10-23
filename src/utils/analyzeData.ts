import { changeData } from "@/types/data";

export const analyzeData = (prices: number[]) => {
  const change: changeData[] = [];
  if (prices.length <= 1) return change;
  for (let i = 0; i < prices.length; i++) {
    const from = prices[i - 1];
    const to = prices[i];
    if (from === undefined || to === undefined) continue;
    const delta = to - from;
    const percentage = (delta / from) * 100;
    change.push({ from, to, delta, percentage });
  }
  return change;
};
