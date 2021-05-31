import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>
    <!-- main -->
    <main class="container mb-5">
      <router-outlet></router-outlet>
    </main>
    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: [`
    .container { color: var(--dark); }
  `]
})
export class AppComponent {
  title = 'Udemy Recipes';
}
