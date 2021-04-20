import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  ingredients: Ingredient[] = [
    {
      id: 1,
      name: 'tomato',
      amount: 54
    },
    {
      id: 2,
      name: 'hamburger',
      amount: 10
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
