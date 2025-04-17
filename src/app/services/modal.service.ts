import { Injectable } from "@angular/core";

import { IModal } from "../models/common";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  isWalletConnectOpen = false;
  isPopupOpen = false;
  isSnackbarOpen = false;

  popupPreset: IModal = {} as IModal;
  snackbarPreset: IModal = {} as IModal;

  openWalletConnect() {
    this.closeModals();
    this.isWalletConnectOpen = true;
  }

  openPopup(preset: IModal) {
    this.closeModals();
    this.popupPreset = preset;
    this.isPopupOpen = true;
  }

  openSnackbar(preset: IModal) {
    this.isSnackbarOpen = false;
    this.snackbarPreset = preset;
    this.isSnackbarOpen = true;
  }

  closeSnackbar() {
    this.isSnackbarOpen = false;
  }

  closeModals() {
    this.isWalletConnectOpen = false;
    this.isPopupOpen = false;
  }
}
