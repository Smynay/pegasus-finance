import { Component, Input, OnInit } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";

@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.scss"],
})
export class SnackbarComponent implements OnInit {
  icon: string;
  color: string;

  constructor(public modalService: ModalService) {
    switch (this.modalService.snackbarPreset.type) {
      case "warning":
        this.icon = "warning";
        this.color = "red";
        this.modalService.snackbarPreset.text = "Transaction was Rejected";
        break;

      case "success":
        this.icon = "check_circle";
        this.color = "green";
        this.modalService.snackbarPreset.text = "Transaction successfuly confirmed!";
        break;

      case "info":
        this.icon = "update";
        this.color = "blue";
        this.modalService.snackbarPreset.text = "The transaction in being confirmed...";
        break;

      default:
        this.icon = "info";
        this.color = "blue";
    }
  }

  ngOnInit(): void {}
}
