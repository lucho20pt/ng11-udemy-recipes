import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  ingredients: Ingredient[] = [
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

  ingredientAdded!: Ingredient;

  constructor() { }

  ngOnInit(): void {

  }

  onIngredientAdded(value:Ingredient) : void {
    console.log(value.name, value.id);
    this.ingredientAdded = value;
    this.ingredients.push(this.ingredientAdded);
  }

}
