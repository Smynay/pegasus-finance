import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BalanceService {
  constructor() {}

  async getAll() {
    const response = [
      {
        pool: "ETH",
        shares: 230.613,
        sharePrice: 1.05,
      },
      {
        pool: "USDC",
        shares: 616.53,
        sharePrice: 1.12,
      },
      // {
      //   pool: "WBTC",
      //   shares: 245.92,
      //   sharePrice: 1.47,
      // },
      // {
      //   pool: "DAI",
      //   shares: 342.3,
      //   sharePrice: 1.01,
      // },
      // {
      //   pool: "DAI",
      //   shares: 342.3,
      //   sharePrice: 1.01,
      // },
    ];

    return response;
  }
}
