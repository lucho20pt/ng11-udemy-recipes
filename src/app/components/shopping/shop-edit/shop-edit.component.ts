import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/model/ingredient';
import { ShoppingService } from 'src/app/shared/services/shopping.service';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.scss']
})
export class ShopEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', { static: false }) form!: NgForm;
  editIngredientSub!: Subscription;
  editIngredientIndex!: number;
  editMode: boolean = false;
  editingIngredient!: Ingredient;

  constructor( private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.editIngredientSub = this.shoppingService.startedEditingIngredient
      .subscribe(
        (index:number) => {
          this.editIngredientIndex = index;
          this.editMode = true;
          this.editingIngredient = this.shoppingService.getIngredient(this.editIngredientIndex);

            this.form.setValue({
              name: this.editingIngredient.name,
              amount: +this.editingIngredient.amount
            })

        }
      );
  }

  ngOnDestroy(): void {
    this.editIngredientSub.unsubscribe();
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
