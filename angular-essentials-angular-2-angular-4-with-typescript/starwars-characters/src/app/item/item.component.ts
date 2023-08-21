import { Component, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
  styles: [],
})
export class ItemComponent implements OnInit {
  constructor() {}

  @Input()
  character = { name: "sample name", side: "light" };

  ngOnInit(): void {}

  onAssign(side: string) {
    this.character.side = side;
  }
}
