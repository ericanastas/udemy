import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { StarWarsService } from "../star-wars.services";

@Component({
  selector: "app-create-character",
  templateUrl: "./create-character.component.html",
  styleUrls: ["./create-character.component.css"],
  styles: [],
})
export class CreateCharacterComponent implements OnInit {
  starWarsService: StarWarsService;
  constructor(starWarsService: StarWarsService) {
    this.starWarsService = starWarsService;
  }

  availableSides = [
    { display: "None", value: "" },
    { display: "Dark Side", value: "dark" },
    { display: "Light Side", value: "light" },
  ];

  onSubmit(form: NgForm) {
    console.log(form);
    this.starWarsService.addCharacter(form.value.name, form.value.side);
  }

  ngOnInit(): void {}
}
