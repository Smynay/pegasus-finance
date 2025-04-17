import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-language-selector",
  templateUrl: "./language-selector.component.html",
  styleUrls: ["./language-selector.component.scss"],
})
export class LanguageSelectorComponent implements OnInit {
  languages = [
    { locale: "EN", title: "English" },
    { locale: "FR", title: "France" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
