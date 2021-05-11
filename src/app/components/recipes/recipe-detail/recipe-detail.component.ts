import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/app/shared/model/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe!: Recipe;
  id!: number;
  index!: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getRecipeByIndex();
    // this.getRecipeByID();
  }

  getRecipeByIndex() {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['index'];
        this.recipe = this.recipeService.getRecipeByIndex(this.index);
      }
    );
  }

  // getRecipeByID() {
  //   this.route.params.subscribe(
  //     (params: Params) => {
  //       this.id = +params['id'];
  //       this.recipe = this.recipeService.getRecipeByID(this.id);
  //     }
  //   )
  // }

  onAddToShopList() {
    const ingredients = this.recipe.ingredients;
    if ( ingredients.length !== 0 ) {
      this.recipeService.addIngredientsToShoppingList(ingredients);
    }else{
      console.log('empty []');
    }
  }

}
