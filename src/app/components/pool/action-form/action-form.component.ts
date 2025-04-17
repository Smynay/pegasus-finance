import { Component, Input, OnInit } from "@angular/core";

import { Pool } from "src/app/models/pool";

@Component({
  selector: "app-action-form",
  templateUrl: "./action-form.component.html",
  styleUrls: ["./action-form.component.scss"],
})
export class ActionFormComponent implements OnInit {
  @Input() title = "Deposit";
  @Input() userAmount = 0;

  @Input() poolInfo?: Pool;

  tokenIco: string;
  amount = "";

  constructor() {}

  ngOnInit(): void {
    this.tokenIco = this.poolInfo?.icon || "assets/images/tokens/BTC.svg";
  }

  setMaxValue() {
    this.amount = this.userAmount.toString();
  }
}
