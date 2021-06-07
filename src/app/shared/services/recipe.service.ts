import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';
import { Ingredient } from 'src/app/shared/model/ingredient';
import { ShoppingService } from 'src/app/shared/services/shopping.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    {
      id: 2,
      name: 'Hamburger',
      description: "The best burger in town",
      imagePath: "//images.freeimages.com/images/large-previews/9ac/fastfood-01-1329727.jpg",
      ingredients: [
        {
          name: "bread",
          amount: 2
        },
        {
          name: "burger",
          amount: 1
        },
        {
          name: "egg",
          amount: 1
        }
      ]
    },
    {
      id: 4,
      name: 'Salad',
      description: "A Super Salad",
      imagePath: "https://images.freeimages.com/images/large-previews/f3f/food-1171568.jpg",
      ingredients: [
        {
          name: 'tomato',
          amount: 1
        }
      ]
    },
    {
      id: 6,
      name: 'Angel Soup',
      description: "Rock of the Angels Soup",
      imagePath: "https://images.freeimages.com/images/large-previews/178/angel-soup-1575351.jpg",
      ingredients: []
    }
  ];

  recipesArrChange = new Subject<Recipe[]>();

  constructor( private shoppingService : ShoppingService ) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeByIndex(index:number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesArrChange.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesArrChange.next(this.recipes.slice());
  }

  deleteRecipe(index:number) {
    console.log(index);
    this.recipes.splice(index, 1);
    this.recipesArrChange.next(this.recipes.slice());
  }

}
