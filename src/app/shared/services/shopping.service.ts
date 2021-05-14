import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/model/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private ingredients: Ingredient[] = [
    {
      id: 1,
      name: 'tomato',
      amount: 54
    },
    {
      id: 2,
      name: 'hamburger',
      amount: 10
    }
  ];
  // this event is to update array copy
  ingredientsArrChange = new Subject<Ingredient[]>();

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsArrChange.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsArrChange.next(this.ingredients.slice());
  }

}
