import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Input('data-recipes') recipes!: Recipe[];

  @Output('data-recipe-selected') selectedRecipe = new EventEmitter<Recipe>();

  isSelected?: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe): void {
    this.isSelected = recipe;
    this.selectedRecipe.emit(recipe);
  }

}
