import { Component, Input, OnInit } from "@angular/core";
import { Pool } from "src/app/models/pool";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() poolInfo?: Pool;

  tokenIco: string;

  constructor() {}

  ngOnInit(): void {
    this.tokenIco = this.poolInfo.icon || "assets/images/tokens/BTC.svg";
  }
}
