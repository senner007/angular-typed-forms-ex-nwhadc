import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Demo Typed Forms Application</h1>
    <div>Try changing <code>profile.component.ts</code> to interact with the new types.</div>
    <profile></profile>
  `,
  styles: [],
})
export class AppComponent {
  title = 'typed-forms-example-app';
}
