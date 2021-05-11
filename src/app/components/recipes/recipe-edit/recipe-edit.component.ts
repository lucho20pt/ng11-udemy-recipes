import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  template: `
    <section class="recipe-edit">

      <h4 class="py-2"># Recipe edit</h4>

      <div class="row">

        <div class="col-8">
          hello
        </div>

      </div>

    </section>
  `,
  styles: [
  ]
})
export class RecipeEditComponent implements OnInit {

  id?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
