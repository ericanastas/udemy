import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<p>{{ name }}</p>`,
})
export class UserComponent {
  name = 'John Smith';
}
