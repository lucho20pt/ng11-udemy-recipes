import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: "",
  // },
  // {
  //   path: "home",
  // },
  // {
  //   path: "about",
  // },
  // {
  //   path: "contact",
  // },
  // {
  //   path: "user", // lazy
  // },
  // {
  //   path: "recepies", // lazy
  // },
  // {
  //   path: "shopping", // lazy
  // },
  // {
  //   path: "404",
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
