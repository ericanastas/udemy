import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` <input type="text" (input)="onInput($event)" [value]="name" />
    <!-- <input type="text" [(ngModel)]="name" /> -->
    <p>Hello {{ name }}</p>
    <p>I'm the user component</p>
    <app-user-detail></app-user-detail>`,
})
export class UserComponent {
  @Input()
  name: string = 'Default User Component Name';

  @Output()
  nameChanged = new EventEmitter<string>();

  onInput(event: any) {
    this.nameChanged.emit(event.target.value);
  }
}
