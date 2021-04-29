import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Hamburger',
      description: "Hamburger com ovo e salada",
      imagePath: "//images.freeimages.com/images/large-previews/9ac/fastfood-01-1329727.jpg"
    },
    {
      id: 2,
      name: 'Salada',
      description: "Salada de alface e tomate",
      imagePath: "https://images.freeimages.com/images/large-previews/f3f/food-1171568.jpg"
    },
  ];

  selectedRecipe = new EventEmitter<any>();

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  // getSelectedRecipe(recipe: Recipe): void {
  //   this.selectedRecipe.emit(recipe);
  //   console.log('getSelectedRecipe(recipe) : EventEmitter');
  // }

}
