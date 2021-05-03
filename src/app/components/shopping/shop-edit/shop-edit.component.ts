import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.scss']
})
export class ShopEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

  constructor( private shoppingService: ShoppingService) { }

  ngOnInit(): void {

  }

  onAddIngredient() {
    let id = Math.floor(Math.random() * 100);
    let name = this.nameInputRef.nativeElement.value;
    let amount = this.amountInputRef.nativeElement.value;
    const ingredient = {id, name, amount}
    // on add ingredient - verify if not empty
    if( (ingredient.name && ingredient.amount) !== "" )
    this.shoppingService.addIngredient(ingredient);
    // after add ingredient - clear the fields
    this.nameInputRef.nativeElement.value = "";
    this.amountInputRef.nativeElement.value = "";
  }

}
