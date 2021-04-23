import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  @Input('data-ingredients') ingredients!: Ingredient[];

  constructor() { }

  ngOnInit(): void {
  }

}
