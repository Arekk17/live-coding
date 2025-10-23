import axios from "axios";
export const fetchHistoryData = async (
  symbol: string,
  startTime: string,
  endTime: string
) => {
  try {
    const response = await axios.get(
      `${process.env.BINANCE_BASE_URL}/api/v3/klines`,
      {
        params: {
          symbol,
          interval: "1m",
          startTime,
          endTime,
        },
      }
    );
    return response.data.map((item: any) => ({
      time: item[0],
      price: parseFloat(item[4]),
    }));
  } catch (error) {
    throw new Error("Failed to fetch history data");
  }
};
