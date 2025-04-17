import { AfterViewInit, Component, OnInit } from "@angular/core";

import { MenuService } from "src/app/services/menu.service";

import { Pool } from "src/app/models/pool";

@Component({
  selector: "app-pool",
  templateUrl: "./pool.component.html",
  styleUrls: ["./pool.component.scss"],
})
export class PoolComponent implements OnInit, AfterViewInit {
  poolId: number;
  poolToShow: Pool;
  tvlToShow: Promise<any> = null;

  constructor(public menuService: MenuService) {}

  async ngOnInit(): Promise<void> {}

  ngAfterViewInit(): void {
    document.querySelector("#altcoins").scrollIntoView(true);
  }
}
