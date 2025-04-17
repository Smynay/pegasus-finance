import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-blog-card",
  templateUrl: "./blog-card.component.html",
  styleUrls: ["./blog-card.component.scss"],
})
export class BlogCardComponent implements OnInit {
  @Input() postData = {
    coverImg: "../../../assets/images/content/2.svg",
    coverText: "LIKE ME",
    title: "AWESOME TITLE",
    link: "",
  };

  constructor() {}

  ngOnInit(): void {}
}
