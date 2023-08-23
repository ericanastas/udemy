import { Component, OnInit } from "@angular/core";
import { StarWarsService } from "./star-wars.services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  styles: [],
})
export class AppComponent implements OnInit {
  title = "starwars-characters";

  starWarsService: StarWarsService;

  constructor(starWarsService: StarWarsService) {
    this.starWarsService = starWarsService;
  }

  ngOnInit(): void {
    this.starWarsService.fetchCharacters();
  }
}
