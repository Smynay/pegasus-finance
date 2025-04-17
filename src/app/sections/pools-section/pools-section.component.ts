import { Component, OnInit } from "@angular/core";

import { PoolsService } from "src/app/services/api/pools.service";

import { Pool } from "src/app/models/pool";

@Component({
  selector: "app-pools-section",
  templateUrl: "./pools-section.component.html",
  styleUrls: ["./pools-section.component.scss"],
})
export class PoolsSectionComponent implements OnInit {
  customDecoreImg = "assets/images/decore/3.svg";
  pools: Pool[];

  constructor(private poolsService: PoolsService) {}

  async ngOnInit(): Promise<void> {
    this.pools = await this.poolsService.getAll();
  }
}
