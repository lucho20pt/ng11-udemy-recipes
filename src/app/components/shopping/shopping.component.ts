import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'app-shopping',
  template: `
    <section class="row">
      <!--  -->
      <div class="col-md-6 my-4 my-md-0">
        <h4 class="py-2"># add ingredient</h4>
        <app-shop-edit
          (data-ingredient-added)="onIngredientAdded($event)"
        ></app-shop-edit>
      </div>
      <!--  -->
      <div class="col-md-6">
        <h4 class="py-2"># shop list</h4>
        <app-shop-list
          [data-ingredients]="ingredients"
        ></app-shop-list>
      </div>
    </section>
  `,
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  ingredients!: Ingredient[];

  ingredientAdded!: Ingredient;

  constructor( private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients(): void {
    this.ingredients = this.shoppingService.getIngredients();
  }

  onIngredientAdded(value:Ingredient) : void {
    console.log(value.name, value.id);
    this.ingredientAdded = value;
    this.ingredients.push(this.ingredientAdded);
  }

}
