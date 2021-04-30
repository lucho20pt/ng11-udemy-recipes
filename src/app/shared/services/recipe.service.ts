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
      description: "The best burger in town",
      imagePath: "//images.freeimages.com/images/large-previews/9ac/fastfood-01-1329727.jpg",
      ingredients: [
        {
          id: 1,
          name: "bread",
          amount: 2
        },
        {
          id: 2,
          name: "burger",
          amount: 1
        },
        {
          id: 3,
          name: "egg",
          amount: 1
        }
      ]
    },
    {
      id: 2,
      name: 'Salad',
      description: "A Super Salad",
      imagePath: "https://images.freeimages.com/images/large-previews/f3f/food-1171568.jpg",
      ingredients: [
        {
          id: 5,
          name: 'tomato',
          amount: 1
        }
      ]
    },
    {
      id: 3,
      name: 'Angel Soup',
      description: "Rock of the Angels Soup",
      imagePath: "https://images.freeimages.com/images/large-previews/178/angel-soup-1575351.jpg",
      ingredients: []
    }
  ];

  selectedRecipe = new EventEmitter<any>();

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

}
