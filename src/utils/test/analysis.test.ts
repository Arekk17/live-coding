import { analyzeData } from "../analyzeData";

describe("analyzeData", () => {
  it("should return empty array if prices is empty", () => {
    expect(analyzeData([])).toEqual([]);
    expect(analyzeData([100])).toEqual([]);
  });
  it("should calculate delta and percentage for increasing price", () => {
    const prices = [100, 110, 120];
    const result = analyzeData(prices);
    expect(result).toEqual([
      { from: 100, to: 110, delta: 10, percentage: 10 },
      { from: 110, to: 120, delta: 10, percentage: 9.090909090909092 },
    ]);
  });
  it("should calculate delta and percentage for decreasing price", () => {
    const prices = [120, 110, 100];
    const result = analyzeData(prices);
    expect(result).toEqual([
      { from: 120, to: 110, delta: -10, percentage: -8.333333333333332 },
      { from: 110, to: 100, delta: -10, percentage: -9.090909090909092 },
    ]);
  });
});
