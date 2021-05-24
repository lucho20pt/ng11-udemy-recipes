import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.scss']
})
export class ShopEditComponent implements OnInit {

  constructor( private shoppingService: ShoppingService) { }

  ngOnInit(): void {

  }

  onAddIngredient(form: NgForm) {
    const value = form.value;
    let id = Math.floor(Math.random() * 100);
    let name = value.name;
    let amount = value.amount;
    const ingredient = { id, name, amount }

    this.shoppingService.addIngredient(ingredient);
    form.resetForm();
  }

}
