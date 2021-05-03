import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './components/layout/layout.module';
import { PagesModule } from './components/pages/pages.module';
import { RecipeService } from './shared/services/recipe.service';
import { ShoppingService } from './shared/services/shopping.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    PagesModule
  ],
  providers: [
    RecipeService,
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
