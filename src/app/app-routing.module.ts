import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokedexComponent} from './pokedex/pokedex.component';


const routes: Routes = [
  { path: 'pokedex/:id', component: PokedexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
