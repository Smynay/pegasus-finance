import { Component, Input, OnInit } from "@angular/core";
import { IModal } from "src/app/models/common";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"],
})
export class PopupComponent implements OnInit {
  icon: string;
  color: string;
  infoMessage: string;

  constructor(public modalService: ModalService) {
    switch (this.modalService.popupPreset.type) {
      case "warning":
        this.icon = "error";
        this.color = "red";
        this.infoMessage = "TRANSACTION WAS REJECTED";
        this.modalService.popupPreset.text = "";
        break;

      case "success":
        this.icon = "check_circle";
        this.color = "green";
        this.infoMessage = "TRANSACTION CONFIRMED";
        this.modalService.popupPreset.text = "Transaction succesfuly confirmed!";
        break;

      case "info":
        this.icon = "update";
        this.color = "blue";
        this.infoMessage = "WAITING FOR CONFIRMATION";
        this.modalService.popupPreset.text = "Please confirm the popped up transaction...";
        break;

      default:
        this.icon = "info";
        this.color = "blue";
        this.infoMessage = "INFO MESSAGE";
    }
  }

  ngOnInit(): void {}
}
