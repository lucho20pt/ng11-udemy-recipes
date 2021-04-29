import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes!: Recipe[];

  @Output('data-recipe-selected') selectedRecipe = new EventEmitter<Recipe>();

  isSelected?: Recipe;

  constructor( private recipesService: RecipeService ) { }

  ngOnInit(): void {
    this.getRecipesService();
  }

  getRecipesService(): void {
    this.recipes = this.recipesService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe): void {
    this.isSelected = recipe;
    this.selectedRecipe.emit(recipe);
  }

}
