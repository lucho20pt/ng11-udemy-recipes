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
    const id = Math.floor(Math.random() * 100);
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const ingredient = {id, name, amount}
    this.shoppingService.addIngredient(ingredient);
  }

}
