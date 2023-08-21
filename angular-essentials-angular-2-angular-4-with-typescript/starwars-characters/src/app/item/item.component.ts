import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

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

  @Output()
  sideAssigned = new EventEmitter<{ name: string; side: string }>();

  onAssign(side: string) {
    this.sideAssigned.emit({ name: this.character.name, side: side });
  }
}
