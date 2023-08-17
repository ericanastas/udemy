import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  template: `<p>Hi I'm a dashboard</p>
    <p><b>State:</b>{{ loadState }}</p>
    <input type="text" [(ngModel)]="loadState" />
    <p><button (click)="onButtonClick()">Push Me</button></p>`,
  styles: [],
})
export class DashboardComponent {
  loadState: string = "loading";

  onButtonClick() {
    this.loadState = "finished";
  }
}
