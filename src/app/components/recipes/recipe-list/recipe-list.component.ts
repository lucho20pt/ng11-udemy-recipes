import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes!: Recipe[];
  recipesSub!: Subscription;

  constructor( private recipesService: RecipeService ) { }

  ngOnInit(): void {
    this.recipesSub = this.recipesService.recipesArrChange
      .subscribe(
        (recipes: Recipe[]) => this.recipes =  recipes
      )
    this.getRecipesService();
  }

  ngOnDestroy(): void {
    this.recipesSub.unsubscribe();
  }

  getRecipesService(): void {
    this.recipes = this.recipesService.getRecipes();
  }

}
