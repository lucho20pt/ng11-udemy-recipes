import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes!: Recipe[];

  isSelected?: Recipe;

  constructor( private recipesService: RecipeService ) { }

  ngOnInit(): void {
    this.getRecipesService();
  }

  getRecipesService(): void {
    this.recipes = this.recipesService.getRecipes();
  }

}
