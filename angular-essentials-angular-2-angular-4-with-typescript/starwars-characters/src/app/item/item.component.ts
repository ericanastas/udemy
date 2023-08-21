import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { StarWarsService } from "../star-wars.services";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
  styles: [],
})
export class ItemComponent implements OnInit {
  starWarsService: StarWarsService;
  constructor(starWarsService: StarWarsService) {
    this.starWarsService = starWarsService;
  }

  @Input()
  character = { name: "sample name", side: "light" };

  ngOnInit(): void {}

  @Output()
  sideAssigned = new EventEmitter<{ name: string; side: string }>();

  onAssign(side: string) {
    this.starWarsService.onSideAssigned({
      name: this.character.name,
      side: side,
    });
  }
}
