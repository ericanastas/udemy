import { Component, Input } from "@angular/core";

@Component({
  selector: "app-cart",
  template: ` <p>Cart</p>
    <ol>
      <li *ngFor="let item of items">{{ item }}</li>
    </ol>`,
  styles: [],
})
export class CartComponent {
  @Input()
  items: string[] = [];
}
