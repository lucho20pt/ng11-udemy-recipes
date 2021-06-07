import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/model/ingredient';
import { Recipe } from 'src/app/shared/model/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: [`
    label{ font-weight: 700;}
    input.ng-invalid.ng-touched,
    textarea.ng-invalid.ng-touched{ border: 1px solid red }
  `]
})
export class RecipeEditComponent implements OnInit {

  index!: number;
  editMode?: boolean = false;
  recipe!: Recipe;
  recipeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params) => {
        this.index = params['index'];
        this.editMode = params['index'] != null;
        // console.log('isEditMode = ', this.editMode);
        // this.recipe = this.recipeService.getRecipeByIndex(this.index);

        this.initRecipeForm();
      }
    )

  }

  onSubmit() {
    if( this.editMode ) {
      this.recipeService.updateRecipe( this.index, this.recipeForm.value);
    }else{
      this.recipeService.addRecipe( this.recipeForm.value );
    }
    this.onCancel();
  }

  onAddIngredient() {
    // console.log('onAddIngredient');
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  onDeleteIngredient(index: number) {
    console.log(index);
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initRecipeForm(): void {

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if( this.editMode ) {
      const recipe = this.recipeService.getRecipeByIndex(this.index);
      // console.log(recipe);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if ( recipe["ingredients"] ) {
        for ( let ingredient of recipe.ingredients ) {
          recipeIngredients.push(
            new FormGroup ({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ]),
            })
          )
        }
      }

    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      "ingredients": recipeIngredients,
    });

  }

  getControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

}

