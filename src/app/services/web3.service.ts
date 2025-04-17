import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class Web3Service {
  constructor() {}

  async getUserProfits(): Promise<number> {
    return 35;
  }

  async getUserBalance(): Promise<number> {
    return 30;
  }
}
