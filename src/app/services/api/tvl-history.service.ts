import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TvlHistoryService {
  _serviceStore = {
    WBTC: [
      {
        timestamp: 1619388000,
        tvl: 700000,
      },
      {
        timestamp: 1619344800,
        tvl: 500000,
      },
      {
        timestamp: 1619301600,
        tvl: 500000,
      },
      {
        timestamp: 1619258400,
        tvl: 700000,
      },
      {
        timestamp: 1619215200,
        tvl: 800000,
      },
      {
        timestamp: 1619172000,
        tvl: 700000,
      },
      {
        timestamp: 1619128800,
        tvl: 870000,
      },
      {
        timestamp: 1619085600,
        tvl: 870000,
      },
      {
        timestamp: 1619042400,
        tvl: 870000,
      },
      {
        timestamp: 1618999200,
        tvl: 900000,
      },
      {
        timestamp: 1618956000,
        tvl: 870000,
      },
    ],
    USDC: [
      {
        timestamp: 1619388000,
        tvl: 700000,
      },
      {
        timestamp: 1619344800,
        tvl: 500000,
      },
      {
        timestamp: 1619301600,
        tvl: 500000,
      },
      {
        timestamp: 1619258400,
        tvl: 700000,
      },
      {
        timestamp: 1619215200,
        tvl: 800000,
      },
      {
        timestamp: 1619172000,
        tvl: 700000,
      },
      {
        timestamp: 1619128800,
        tvl: 870000,
      },
      {
        timestamp: 1619085600,
        tvl: 870000,
      },
      {
        timestamp: 1619042400,
        tvl: 870000,
      },
      {
        timestamp: 1618999200,
        tvl: 900000,
      },
      {
        timestamp: 1618956000,
        tvl: 870000,
      },
    ]
  };

  async getHistory() {
    return { ...this._serviceStore };
  }

  async getHistoryBySymbol(tokenSymbol: string) {
    return { [tokenSymbol]: this._serviceStore[tokenSymbol] };
  }
}
