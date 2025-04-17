import { Component, OnInit } from "@angular/core";
import { PoolsService } from "src/app/services/api/pools.service";

@Component({
  selector: "app-pools-dashboard-section",
  templateUrl: "./pools-dashboard-section.component.html",
  styleUrls: ["./pools-dashboard-section.component.scss"],
})
export class PoolsDashboardSectionComponent implements OnInit {
  pools = [];

  constructor(private poolsService: PoolsService) {}

  async ngOnInit(): Promise<void> {
    this.pools = await this.poolsService.getAll();
  }
}
