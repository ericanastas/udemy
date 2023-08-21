import { Component, OnInit, Input } from "@angular/core";

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
}
