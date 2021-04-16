import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="text-center">
      <h2>404</h2>
      <p>
        page-not-found! <br>
        <a class="navbar-brand" [routerLink]="'/'">Return to HomePage</a>
      </p>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
