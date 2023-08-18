import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cart",
  template: ` <p>Cart</p>
    <ol>
      <li *ngFor="let item of items">{{ item }}</li>
    </ol>
    <input type="text" [(ngModel)]="newItem" />
    <button (click)="onAddItemClick()">Add Item</button>`,
  styles: [],
})
export class CartComponent {
  @Input()
  items: string[] = [];
  newItem: string = "";

  @Output()
  itemAdded = new EventEmitter<string>();

  onAddItemClick() {
    this.itemAdded.emit(this.newItem);
    this.newItem = "";
  }
}
