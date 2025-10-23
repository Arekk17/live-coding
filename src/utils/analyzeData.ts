export interface changeData {
  from: number;
  to: number;
  delta: number;
  percentage: number;
}
export const analyzeData = (prices: number[]) => {
  const change: changeData[] = [];
  for (let i = 0; i < prices.length; i++) {
    const from = prices[i - 1];
    const to = prices[i];
    const delta = to - from;
    const percentage = (delta / from) * 100;
    change.push({ from, to, delta, percentage });
  }
  return change;
};
