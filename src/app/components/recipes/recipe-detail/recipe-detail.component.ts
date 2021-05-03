import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input('data-selected-recipe') recipe!: Recipe;

  constructor( private recipeService: RecipeService ) { }

  ngOnInit(): void {

  }

  onAddToShopList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
