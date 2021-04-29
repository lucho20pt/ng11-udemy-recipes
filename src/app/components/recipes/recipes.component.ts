import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';

@Component({
  selector: 'app-recipes',
  template: `
    <hr>
    <aside class="py-2">
      <div class="row">
        <div class="col-12">
          <button class="btn btn-success">New Recipe</button>
        </div>
      </div>
    </aside>
    <hr>
    <div class="row">
      <!-- recipes-list -->
      <div class="col-md-6">
        <app-recipe-list></app-recipe-list>
      </div>
      <!-- recipe-detail -->
      <div class="col-md-5 ml-auto">
        <app-recipe-detail></app-recipe-detail>
      </div>
    </div>
  `,
  styles: [`
    p{
      color:red;
    }
  `]
})
export class RecipesComponent implements OnInit {

  selectedRecipe?: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  recipeSelected(recipe: Recipe): void {
    this.selectedRecipe = recipe;
    console.log(this.selectedRecipe);
  }

}
