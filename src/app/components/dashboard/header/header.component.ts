import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { MenuService } from "src/app/services/menu.service";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-dashboard-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class DashboardHeaderComponent implements OnInit {
  logo = "assets/images/logo/logo.svg";
  logoText = "assets/images/logo/logo_text-dark.svg";

  backProps = {
    dashboard: {
      link: "/",
      title: "BACK TO HOME PAGE",
    },
    pool: {
      link: "/dashboard",
      title: "BACK TO DASHBOARD",
    },
  };

  page: string;

  @Output() burgerClick = new EventEmitter();

  constructor(
    public menuService: MenuService,
    private activatedRoute: ActivatedRoute,
    public modalService: ModalService
  ) {
    this.page = this.activatedRoute.snapshot.routeConfig.path.split("/")[0];
  }

  ngOnInit(): void {}

  emitBurgerClick() {
    this.burgerClick.emit(null);
  }
}
