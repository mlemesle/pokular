import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PokedexComponent} from './pokedex/pokedex.component';
import {PokedexService} from './services/pokedex.service';
import {HttpClientModule} from '@angular/common/http';
import {PokemonComponent} from './pokemon/pokemon.component';
import {GetTranslationPipe} from './pipes/get-translation/get-translation.pipe';
import {LanguageComponent} from './language/language.component';
import {PokemonService} from './services/pokemon.service';
import {LanguageService} from './services/language.service';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonComponent,
    GetTranslationPipe,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PokedexService,
    PokemonService,
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
