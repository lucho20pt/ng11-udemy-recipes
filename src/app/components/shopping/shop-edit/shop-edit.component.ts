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
  editedIngredientSub!: Subscription;
  editedIngredientIndex!: number;
  editMode: boolean = false;
  ingredient!: Ingredient;

  constructor( private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.editedIngredientSub = this.shoppingService.startedEditingIngredient
      .subscribe(
        (index:number) => {
          this.editedIngredientIndex = index;
          this.editMode = true;
          this.ingredient = this.shoppingService.getIngredient(index);

            this.form.setValue({
              name: this.ingredient.name,
              amount: this.ingredient.amount
            })
        }
      );
  }

  ngOnDestroy(): void {
    this.editedIngredientSub.unsubscribe();
  }

  onAddIngredient(form: NgForm) {
    const value = form.value;
    let name = value.name;
    let amount = value.amount;
    const newIngredient = { name, amount }
    if( this.editMode ) {
      this.shoppingService.updateIngredient(this.editedIngredientIndex, newIngredient);
    }else{
      this.shoppingService.addIngredient(newIngredient);
    }
    form.resetForm();
  }

}
