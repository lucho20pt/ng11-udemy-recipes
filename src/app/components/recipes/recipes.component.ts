import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Hamburger',
      description: "Hamburger com ovo e salada",
      imagePath: "//images.freeimages.com/images/large-previews/9ac/fastfood-01-1329727.jpg"
    },
    {
      id: 2,
      name: 'Salada',
      description: "Salada de alface e tomate",
      imagePath: "https://images.freeimages.com/images/large-previews/f3f/food-1171568.jpg"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
