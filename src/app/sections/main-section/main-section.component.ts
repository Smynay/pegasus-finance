import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";

import { PoolsService } from "src/app/services/api/pools.service";

@Component({
  selector: "app-main-section",
  templateUrl: "./main-section.component.html",
  styleUrls: ["./main-section.component.scss"],
})
export class MainSectionComponent implements OnInit {
  tvlToShow = "$50.7B";

  constructor(private poolsService: PoolsService) {}

  async ngOnInit(): Promise<void> {
    this.tvlToShow = await this.poolsService.getFormattedTVL();
  }
}
