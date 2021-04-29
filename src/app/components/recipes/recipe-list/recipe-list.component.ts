import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  template: `
    <section class="recipe-list">
      <app-recipe-item class="d-block border p-2 mb-2"
        *ngFor="let recipe of recipes; let i=index"
        [data-recipe]="recipe"
        [class.selected]="isSelected === recipe"
      ></app-recipe-item>
    </section>
  `,
  styles: [`
    .selected{
      color: var(--white);
      background-color: var(--dark);
    }
  `]
})
export class RecipeListComponent implements OnInit {

  recipes!: Recipe[];

  @Input('data-selected-recipe') isSelected?: Recipe;

  constructor( private recipesService: RecipeService ) { }

  ngOnInit(): void {
    this.getRecipesService();
  }

  getRecipesService(): void {
    this.recipes = this.recipesService.getRecipes();
  }

}
