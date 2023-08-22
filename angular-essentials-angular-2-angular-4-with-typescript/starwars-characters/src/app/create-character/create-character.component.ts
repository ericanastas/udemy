import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-character",
  templateUrl: "./create-character.component.html",
  styleUrls: ["./create-character.component.css"],
  styles: [],
})
export class CreateCharacterComponent implements OnInit {
  constructor() {}

  availableSides = [
    { display: "None", value: "" },
    { display: "Dark Side", value: "dark" },
    { display: "Light Side", value: "light" },
  ];

  ngOnInit(): void {}
}
