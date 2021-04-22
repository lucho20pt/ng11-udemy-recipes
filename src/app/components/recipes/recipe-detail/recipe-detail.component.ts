import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe?: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
