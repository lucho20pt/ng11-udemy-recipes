import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input('data-recipe') recipe!: Recipe;

  // @Output('data-recipe-selected') selectRecipe = new EventEmitter<Recipe>();
  selectRecipe?: Recipe;

  constructor( private recipeService: RecipeService ) { }

  ngOnInit(): void {

  }

  onSelectRecipe(recipe : Recipe) {
    // this.selectRecipe.emit(recipe);
    console.log('onSelectRecipe(recipe)');
    return this.recipeService.getSelectedRecipe(recipe);

  }

}
