import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopEditComponent } from './shop-edit/shop-edit.component';


@NgModule({
  declarations: [
    ShoppingComponent,
    ShopListComponent,
    ShopEditComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
