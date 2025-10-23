import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { analyzeMarketData, fetchHistoryData } from "../binanceClient";

const mock = new MockAdapter(axios);

describe("fetchHistoryData", () => {
  afterEach(() => {
    mock.reset();
  });
  it("should fetch and format klines data", async () => {
    const symbol = "BTCUSDT";
    const startTime = 1698000000000;
    const endTime = 1698086400000;

    const mockApiResponse = [
      [1698000000000, "100", "110", "98", "105", "10000", 1698000000000],
      [1698000000001, "105", "115", "103", "110", "10000", 1698000000001],
    ];

    mock.onGet(/\/api\/v3\/klines/).reply(200, mockApiResponse);

    const result = await fetchHistoryData(symbol, startTime, endTime, 100);

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      openTime: 1698000000000,
      open: "100",
      high: "110",
      low: "98",
      close: "105",
      volume: "10000",
      closeTime: 1698000000000,
    });
  });
  it("should throw error if fetch fails", async () => {
    const symbol = "BTCUSDT";
    const startTime = 1698000000000;
    const endTime = 1698086400000;

    mock
      .onGet(
        "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&startTime=1698000000000&endTime=1698086400000&limit=100"
      )
      .reply(500, { error: "Failed to fetch data" });

    await expect(
      fetchHistoryData(symbol, startTime, endTime, 100)
    ).rejects.toThrow(
      "Failed to fetch history data: Error: Request failed with status code 404"
    );
  });
  it("should calculate price changes from klines", async () => {
    const klines = [
      {
        openTime: 1698000000000,
        open: "100",
        high: "110",
        low: "98",
        close: "105",
        volume: "10000",
        closeTime: 1698000000000,
      },
      {
        openTime: 1698000000001,
        open: "105",
        high: "115",
        low: "103",
        close: "110",
        volume: "10000",
        closeTime: 1698000000001,
      },
    ];

    const result = await analyzeMarketData(klines);

    expect(result).toEqual([
      { delta: 5, from: 105, to: 110, percentage: 4.761904761904762 },
    ]);
  });
});
