import { Injectable } from "@angular/core";
import { Pool } from "src/app/models/pool";

@Injectable({
  providedIn: "root",
})
export class PoolsService {
  _serviceData = {
    pools: [
      {
        id: 0,
        apy: 12.96,
        "apy-30d": 10.5,
        symbol: "WBTC",
        asset: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        tvl: 786,
        icon: "assets/images/tokens/WBTC.svg",
      },
      {
        id: 1,
        apy: 37.96,
        "apy-30d": 40.5,
        symbol: "USDC",
        asset: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        tvl: 815000,
        icon: "assets/images/tokens/USDC.svg",
      },
    ],
  };

  billion = 1000000000;
  million = 1000000;
  thousand = 1000;

  constructor() {}

  async getAll() {
    return this._serviceData.pools as Pool[];
  }

  async getPoolById(id: number) {
    return this._serviceData.pools.find((pool) => pool.id === id) as Pool;
  }

  async getTVL() {
    return this._serviceData.pools.reduce((acc, pool) => acc + pool.tvl, 0);
  }

  async getTVLById(poolId: number) {
    return this._serviceData.pools[poolId].tvl;
  }

  async getFormattedTVL(poolId?: number): Promise<string> {
    let response;

    if (poolId != null) {
      response = await this.getTVLById(poolId);
    } else {
      response = await this.getTVL();
    }

    let newTVL = "$";

    if (response / this.billion > 0.1) {
      return (newTVL += (response / this.billion).toFixed(1) + "B");
    }

    if (response / this.million > 0.1) {
      return (newTVL += (response / this.million).toFixed(1) + "M");
    }

    if (response / this.thousand > 0.1) {
      return (newTVL += (response / this.thousand).toFixed(1) + "T");
    }

    return (newTVL += response.toFixed(1));
  }
}
