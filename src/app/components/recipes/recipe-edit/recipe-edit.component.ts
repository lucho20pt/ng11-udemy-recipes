import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/model/ingredient';
import { Recipe } from 'src/app/shared/model/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: [`
    label{ font-weight: 700;}
  `]
})
export class RecipeEditComponent implements OnInit {

  index!: number;
  editMode?: boolean = false;
  recipe!: Recipe;
  recipeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params) => {
        this.index = params['index'];
        this.editMode = params['index'] != null;
        console.log('isEditMode = ', this.editMode);
        this.recipe = this.recipeService.getRecipeByIndex(this.index);

        this.initRecipeForm();
      }
    )

  }

  initRecipeForm(): void {
    let name = '';
    let imagePath = '';
    let description = '';

    if( this.editMode ) {
      const recipe = this.recipeService.getRecipeByIndex(this.index);
      // console.log(recipe);
      name = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
    });

  }

}
