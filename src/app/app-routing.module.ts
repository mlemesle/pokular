import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokedexComponent} from './pokedex/pokedex.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';


const routes: Routes = [
  { path: 'pokedex/:name', component: PokedexComponent },
  { path: 'pokemon/:name', component: PokemonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
