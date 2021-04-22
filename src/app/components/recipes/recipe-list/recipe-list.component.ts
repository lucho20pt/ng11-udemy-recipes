import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Input('data-recipes') recipes!: Recipe[];

  constructor() { }

  ngOnInit(): void {
  }

}
