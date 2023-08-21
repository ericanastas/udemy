import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  styles: [],
})
export class ListComponent implements OnInit {
  constructor() {}

  @Input()
  characters: any[] = [];

  ngOnInit(): void {}

  @Output()
  sideAssigned = new EventEmitter<{ name: string; side: string }>();

  onSideAssigned(character: { name: string; side: string }) {
    this.sideAssigned.emit(character);
  }
}
