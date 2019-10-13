import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import {PokedexService} from './services/pokedex.service';
import { HttpClientModule } from '@angular/common/http';
import {PokemonComponent} from './pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PokedexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
