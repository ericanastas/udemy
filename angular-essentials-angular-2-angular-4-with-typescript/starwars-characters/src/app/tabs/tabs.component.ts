import { Component, OnInit } from "@angular/core";
import { StarWarsService } from "../star-wars.services";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styles: [],
})
export class TabsComponent implements OnInit {
  starWarsService: StarWarsService;
  constructor(starWarsService: StarWarsService) {
    this.starWarsService = starWarsService;
  }

  characters = [];
  chosenList = "all";

  getCharacters() {
    return this.starWarsService.getCharacters(this.chosenList);
  }

  onChose(side: string) {
    this.chosenList = side;
  }

  ngOnInit(): void {}
}
