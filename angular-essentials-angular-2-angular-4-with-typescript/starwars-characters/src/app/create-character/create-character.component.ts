import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

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

  onSubmit(form: NgForm) {
    console.log(form);
  }

  ngOnInit(): void {}
}
