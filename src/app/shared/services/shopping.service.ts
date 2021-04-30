import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  public ingredients: Ingredient[] = [
    {
      id: 1,
      name: 'tomato',
      amount: 54
    },
    {
      id: 2,
      name: 'hamburger',
      amount: 10
    },
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

}
