import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PoolsService } from "src/app/services/api/pools.service";

import { Pool } from "src/app/models/pool";

@Component({
  selector: "app-total-value-section",
  templateUrl: "./total-value-section.component.html",
  styleUrls: ["./total-value-section.component.scss"],
})
export class TotalValueSectionComponent implements OnInit {
  poolSymbol = "";

  constructor(private activatedRoute: ActivatedRoute, private poolsService: PoolsService) {}

  async ngOnInit(): Promise<void> {
    const poolId = this.activatedRoute.snapshot.params?.id;

    if (poolId) {
      const response = await this.poolsService.getPoolById(+poolId);

      this.poolSymbol = response.symbol;
    }
  }
}
