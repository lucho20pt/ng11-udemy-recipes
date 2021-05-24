import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/app/shared/model/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  template: `
    <section class="recipe-edit">

      <h4 class="py-2"># Recipe edit</h4>

      <div class="row">

        <div class="col-8">
          <!-- <h2>{{recipe.name}}</h2>
          <p>{{recipe.description}}</p>
          <p>{{recipe.imagePath}}</p>
          <p>{{recipe.ingredients}}</p> -->
        </div>

      </div>

    </section>
  `,
  styles: [
  ]
})
export class RecipeEditComponent implements OnInit {

  index!: number;
  editMode?: boolean = false;
  recipe!: Recipe

  constructor(
    private route: ActivatedRoute,
    // private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params) => {
        this.editMode = params['index'] != null;
        this.index = params['index'];
        console.log(this.editMode);
        // this.recipe = this.recipeService.getRecipeByIndex(this.index);
        if( this.editMode ) {
          console.log('"edit" mode');
        }else{
          console.log('"new" mode');
        }
      }
    )
  }

}
