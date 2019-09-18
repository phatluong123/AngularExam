import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetsComponent} from "./pets/pets.component";
import {HomeComponent} from "./home/home.component";
import {NewComponent} from "./new/new.component";
import {EditComponent} from "./edit/edit.component";
import {DetailComponent} from "./detail/detail.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";


const routes: Routes = [
  { path: 'pets', component: PetsComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'new', component: NewComponent },
      { path: ':id/edit', component: EditComponent },
      { path: 'edit/:id', component: DetailComponent },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/pets' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
