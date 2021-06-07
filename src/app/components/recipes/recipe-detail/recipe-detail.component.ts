import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/shared/model/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  recipe!: Recipe;
  index!: number;
  paramsSubscription!: Subscription;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.index = Number(params['index']);
        this.recipe = this.recipeService.getRecipeByIndex(this.index);
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  onEditRecipe(id: number): void {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(): void {
    this.recipeService.deleteRecipe(this.index);
    this.router.navigate(['/recipes']);
  }

  onAddToShopList() {
    const ingredients = this.recipe.ingredients;
    if ( ingredients.length !== 0 ) {
      this.recipeService.addIngredientsToShoppingList(ingredients);
    }else{
      console.log('empty []');
    }
  }

}
