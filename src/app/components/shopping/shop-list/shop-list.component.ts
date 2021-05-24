import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/model/ingredient';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit, OnDestroy {

  ingredients!: Ingredient[];
  private ingArrChangeSub!: Subscription;

  constructor( private shoppingService: ShoppingService ) { }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredients = this.shoppingService.getIngredients();
    this.ingArrChangeSub = this.shoppingService.ingredientsArrChange
      .subscribe(
        ( arg: Ingredient[] ) => this.ingredients = arg
      );
  }

  onEditIngredient(index: number): void {
    this.shoppingService.startedEditingIngredient.next(index);
  }

  ngOnDestroy(): void {
    this.ingArrChangeSub.unsubscribe();
  }

}
