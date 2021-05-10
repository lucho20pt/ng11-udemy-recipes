import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  template: `
    <section class="recipe-list">

      <app-recipe-item
        *ngFor="let recipe of recipes; let i=index"
        [data-recipe]="recipe"
        [data-recipe-index]="i"
      ></app-recipe-item>

    </section>
  `,
  styles: []
})
export class RecipeListComponent implements OnInit {

  recipes!: Recipe[];

  constructor( private recipesService: RecipeService ) { }

  ngOnInit(): void {
    this.getRecipesService();
  }

  getRecipesService(): void {
    this.recipes = this.recipesService.getRecipes();
  }

}
