import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-partners-section",
  templateUrl: "./partners-section.component.html",
  styleUrls: ["./partners-section.component.scss"],
})
export class PartnersSectionComponent implements OnInit {
  partners = [
    {
      name: "haechiAudit",
      darkImg: "../../../assets/images/logo/haechi.svg",
      lightImg: "../../../assets/images/logo/haechi_light.svg",
      link: "https://google.com",
    },
    {
      name: "uniswap",
      darkImg: "../../../assets/images/logo/uniswap.svg",
      lightImg: "../../../assets/images/logo/uniswap_light.svg",
      link: "",
    },
    {
      name: "consensys",
      darkImg: "../../../assets/images/logo/consensys.svg",
      lightImg: "../../../assets/images/logo/consensys_light.svg",
      link: "",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
