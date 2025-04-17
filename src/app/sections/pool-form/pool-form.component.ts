import { Component, OnInit } from "@angular/core";

import { PoolsService } from "src/app/services/api/pools.service";

import { Pool } from "src/app/models/pool";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pool-form",
  templateUrl: "./pool-form.component.html",
  styleUrls: ["./pool-form.component.scss"],
})
export class PoolFormComponent implements OnInit {
  poolToShow: Pool;

  constructor(private poolsService: PoolsService, private activatedRoute: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    const poolId = +this.activatedRoute.snapshot.params.id;
    this.poolToShow = await this.poolsService.getPoolById(poolId);
  }
}
