import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

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
        <app-recipe-detail
          [data-selected-recipe]="selectedRecipe"
        ></app-recipe-detail>
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class RecipesComponent implements OnInit {

  selectedRecipe?: Recipe;

  constructor( private recipeService: RecipeService ) { }

  ngOnInit(): void {
    this.getSelectedRecipe();
  }

  getSelectedRecipe(): void {
    this.recipeService.selectedRecipe
      .subscribe( (arg:Recipe) => {
        this.selectedRecipe = arg;
        console.log('selectedRecipe() subscribe' + arg);
      } );
  }

}
