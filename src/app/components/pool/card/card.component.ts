import { Component, Input, OnInit } from "@angular/core";

import { Web3Service } from "src/app/services/web3.service";

import { Pool } from "src/app/models/pool";

@Component({
  selector: "app-pool-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class PoolCardComponent implements OnInit {
  @Input() poolInfo?: Pool;

  userBalance: number;
  userProfits: number;
  tokenIco: string;

  constructor(private web3service: Web3Service) {}

  async ngOnInit(): Promise<void> {
    this.tokenIco = this.poolInfo?.icon || "assets/images/tokens/BTC.svg";
    this.userBalance = await this.web3service.getUserBalance();
    this.userProfits = await this.web3service.getUserProfits();
  }
}
