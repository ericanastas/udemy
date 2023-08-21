import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styles: [],
})
export class TabsComponent implements OnInit {
  constructor() {}

  characters = [
    { name: "Luke Skywalker", side: "" },
    { name: "Darth Vader", side: "" },
  ];

  chosenList = "all";

  getCharacters() {
    if (this.chosenList === "all") {
      return this.characters.slice();
    } else {
      return this.characters.filter((c) => c.side === this.chosenList);
    }
  }

  onChose(side: string) {
    this.chosenList = side;
  }

  ngOnInit(): void {}
}
