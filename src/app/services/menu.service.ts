import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  homeMenu = [
    { title: "POOLS", path: "#pools" },
    { title: "ABOUT", path: "#about" },
    { title: "PARTNERS", path: "#partners" },
    { title: "BLOG", path: "#blog" },
  ];

  dashboardMenu = [{ title: "BACK TO HOME", path: "/" }];

  poolMenu = this.dashboardMenu;

  constructor() {}
}
