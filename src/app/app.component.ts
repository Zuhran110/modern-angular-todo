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
  `,
  styles: [
    `
      main {
        min-height: calc(100vh - 80px);
        background-color: var(--background-color);
      }
    `
  ],
})
export class AppComponent {
  title = 'first-ng-app';
}
