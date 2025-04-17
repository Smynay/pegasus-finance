import { Component, Input, OnInit } from "@angular/core";

import { Pool } from "src/app/models/pool";

@Component({
  selector: "app-simple-card",
  templateUrl: "./simple-card.component.html",
  styleUrls: ["./simple-card.component.scss"],
})
export class SimpleCardComponent implements OnInit {
  @Input() poolInfo?: Pool;
  @Input() decoreImg?: string;

  imgStyle = {};

  tokenIco: string;

  constructor() {}

  ngOnInit(): void {
    this.tokenIco = this.poolInfo.icon || "assets/images/tokens/BTC.svg";

    if (!this.decoreImg) {
      this.decoreImg = "../../../assets/images/decore/2.svg";
    }

    this.imgStyle = {
      background: `url('../../../${this.decoreImg}') #fff`,
      "background-color": "#fff",
      "background-size": "contain",
      "background-position": "right 50px",
      "background-repeat": "no-repeat",
    };
  }
}
