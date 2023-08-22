import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StarWarsService } from "../star-wars.services";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  styles: [],
})
export class ListComponent implements OnInit {
  constructor(
    activatedRoute: ActivatedRoute,
    starWarsService: StarWarsService
  ) {
    this.activatedRoute = activatedRoute;
    this.starWarsService = starWarsService;
  }

  starWarsService: StarWarsService;
  activatedRoute: ActivatedRoute;

  characters: any[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.characters = this.starWarsService.getCharacters(params["side"]);
    });
  }
}
