import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  selectedRecipe?: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  recipeSelected(recipe: Recipe): void {
    this.selectedRecipe = recipe;
    console.log(this.selectedRecipe);
  }

}
