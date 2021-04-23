import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.scss']
})
export class ShopEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

  @Output('data-ingredient-added') ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {

  }

  onAddIngredient() {
    const id = 11;
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const ingredient = {id, name, amount}
    this.ingredientAdded?.emit(ingredient);
  }

}
