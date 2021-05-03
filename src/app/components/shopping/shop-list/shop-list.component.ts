import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  ingredients!: Ingredient[];

  constructor( private shoppingService: ShoppingService ) { }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsArrChange
      .subscribe(
        ( arg: Ingredient[] ) => this.ingredients = arg
      );
  }

}
