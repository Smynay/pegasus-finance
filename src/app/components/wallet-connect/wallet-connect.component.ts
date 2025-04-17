import { Component, OnInit } from "@angular/core";

import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-wallet-connect",
  templateUrl: "./wallet-connect.component.html",
  styleUrls: ["./wallet-connect.component.scss"],
})
export class WalletConnectComponent implements OnInit {
  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}
}
