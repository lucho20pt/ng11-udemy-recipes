import { Component} from '@angular/core';

@Component({
  selector: 'app-recipes',
  template: `
    <hr>
    <aside class="py-2">
      <div class="row">
        <div class="col-12">
          <button class="btn btn-success">New Recipe</button>
        </div>
      </div>
    </aside>
    <hr>
    <div class="row">
      <!-- recipes-list -->
      <div class="col-md-6">
        <h4 class="py-2"># Recipe list</h4>
        <app-recipe-list></app-recipe-list>
      </div>
      <!-- recipe-detail -->
      <div class="col-md-5 ml-auto">
        <h4 class="py-2"># Recipe detail</h4>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class RecipesComponent {

}
