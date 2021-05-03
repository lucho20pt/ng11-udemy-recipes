import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ShoppingService } from 'src/app/shared/services/shopping.service';

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
  ],
  providers: [
    // ShoppingService
  ]
})
export class ShoppingModule { }
