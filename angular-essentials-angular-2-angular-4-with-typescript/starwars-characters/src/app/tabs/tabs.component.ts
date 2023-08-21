import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styles: [],
})
export class TabsComponent implements OnInit {
  constructor() {}

  characters = [
    { name: "Luke Skywalker", side: "light" },
    { name: "Darth Vader", side: "dark" },
  ];

  chosenList = "all";

  getCharacters() {
    if (this.chosenList === "all") {
      return this.characters.slice();
    } else {
      return this.characters.filter((c) => c.side === this.chosenList);
    }
  }

  onSideAssigned(character: { name: string; side: string }) {
    const pos = this.characters.findIndex((c) => c.name === character.name);

    this.characters[pos].side = character.side;
  }

  onChose(side: string) {
    this.chosenList = side;
  }

  ngOnInit(): void {}
}
