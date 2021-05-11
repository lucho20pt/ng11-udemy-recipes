import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  template: `
    <aside class="py-2">
      <div class="row">
        <div class="col-12 | d-flex justify-content-end">
          <a class="btn btn-success"
            (click)="onNewRecipe()"
          >New Recipe</a>
        </div>
      </div>
    </aside>

    <div class="row">
      <!-- recipes-list -->
      <div class="col-md-6">
        <h4 class="py-2"># Recipe list</h4>
        <app-recipe-list></app-recipe-list>
      </div>
      <!-- recipe-detail -->
      <div class="col-md-5 ml-auto">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class RecipesComponent {

  id?: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  onNewRecipe(): void {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

}
