import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HoldingsService {
  constructor() {}

  async getUserHoldings() {
    const response = [
      {
        symbol: "ADA",
        address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        percentage: 10.52,
        userholdings: 12521,
      },
      {
        symbol: "WBTC",
        address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        percentage: 16.47,
        userholdings: 0.2136734,
      },
      {
        symbol: "LINK",
        address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        percentage: 73.01,
        userholdings: 152.2315,
      },
    ];

    return response;
  }
}
