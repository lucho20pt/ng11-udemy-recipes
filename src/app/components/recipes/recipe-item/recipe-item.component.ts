import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  
  @Input('data-recipe') recipe!: Recipe;

  @Output('data-recipe-selected') selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {

  }

  onSelectRecipe(recipe : Recipe) {
    // console.log('onSelectItem ' + recipe.name);
    // this.selectedRecipe = recipe;
    // console.log(this.selectedRecipe);
    this.selectedRecipe.emit(recipe);
  }

}
