import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <router-outlet />
  `,
  styles: [
    `
      main {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }
    `
  ],
})
export class AppComponent {
  title = 'first-ng-app';
}
