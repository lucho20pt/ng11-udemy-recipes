import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';

@Component({
  selector: 'app-recipe-item',
  template: `
    <div class="row | border p-2 mb-2" routerLinkActive="selected">

      <div class="col-3">
        <img class="img-fluid" [alt]="recipe.name" [src]="recipe.imagePath">
      </div>

      <div class="col-6">
        <h3>{{recipe.name}}</h3>
        <p>{{recipe.description}}</p>
      </div>

      <div class="col-3 text-right">
        <a class="btn btn-primary"
          [routerLink]="['recipe-detail/', index]"

        >
          details
        </a>
      </div>

    </div>
  `,
  styles: [`
    .selected{
      color: var(--white);
      background-color: var(--dark);
    }
  `]
})
export class RecipeItemComponent implements OnInit {

  @Input('data-recipe') recipe!: Recipe;
  @Input('data-recipe-index') index!: number;

  ngOnInit(): void {

  }

}
