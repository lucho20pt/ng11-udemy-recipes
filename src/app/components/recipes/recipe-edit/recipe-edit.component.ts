import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  template: `
    <section class="recipe-edit">

      <h4 class="py-2"># Recipe edit</h4>

      <div class="row">

        <div class="col-8">
          hello
        </div>

      </div>

    </section>
  `,
  styles: [
  ]
})
export class RecipeEditComponent implements OnInit {

  index?: number;
  isNew?: boolean = false;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params) => {
        this.isNew = params['index'] ? false : true;
        console.log(this.isNew);
        if( this.isNew ) {
          console.log('"new" mode');
        }else{
          console.log('"edit" mode');
        }
      }
    )
  }

}
