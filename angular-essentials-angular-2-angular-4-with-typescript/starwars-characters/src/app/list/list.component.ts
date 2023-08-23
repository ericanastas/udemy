import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { StarWarsService } from "../star-wars.services";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  styles: [],
})
export class ListComponent implements OnInit, OnDestroy {
  constructor(
    activatedRoute: ActivatedRoute,
    starWarsService: StarWarsService
  ) {
    this.activatedRoute = activatedRoute;
    this.starWarsService = starWarsService;
  }

  starWarsService: StarWarsService;
  activatedRoute: ActivatedRoute;

  loadedSide: string = "all";

  characters: any[] = [];

  subscription?: Subscription;

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.loadedSide = params["side"];
      this.characters = this.starWarsService.getCharacters(this.loadedSide);
    });

    this.subscription = this.starWarsService.charactersChanged.subscribe(() => {
      this.characters = this.starWarsService.getCharacters(this.loadedSide);
    });
  }
}
