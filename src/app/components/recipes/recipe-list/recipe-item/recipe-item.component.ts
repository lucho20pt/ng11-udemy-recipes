import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input('data-recipe') recipe!: Recipe;

  constructor( private recipeService: RecipeService ) { }

  ngOnInit(): void {

  }

  onSelectRecipe(): void {
    this.recipeService.selectedRecipe.emit(this.recipe);
    console.log('onSelectRecipe() -> emit');
  }

}
