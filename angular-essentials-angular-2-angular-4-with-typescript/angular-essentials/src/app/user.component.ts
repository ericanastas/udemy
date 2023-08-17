import { Component } from '@angular/core';
@Component({
  selector: 'app-user',
  template: `<input type="text" (input)="onUserInput($event)" [value]="name" />
    <p>Hello {{ name }}</p>
    <p>I'm the user component</p>`,
})
export class UserComponent {
  name = 'John Smith';
  onUserInput(event: any) {
    this.name = event.target.value;
  }
}