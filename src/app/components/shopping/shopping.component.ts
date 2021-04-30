import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  template: `
    <section class="row">
      <!--  -->
      <div class="col-md-6 my-4 my-md-0">
        <h4 class="py-2"># add ingredient</h4>
        <app-shop-edit></app-shop-edit>
      </div>
      <!--  -->
      <div class="col-md-6">
        <h4 class="py-2"># shop list</h4>
        <app-shop-list></app-shop-list>
      </div>
    </section>
  `,
  styleUrls: []
})
export class ShoppingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
