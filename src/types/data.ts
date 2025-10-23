export interface KlineData {
  openTime: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  closeTime: number;
}
export interface changeData {
  from: number;
  to: number;
  delta: number;
  percentage: number;
}
