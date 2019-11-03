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
import {PokemonSpeciesService} from './services/pokemon-species.service';
import {TypeService} from './services/type.service';
import {TypeComponent} from './type/type.component';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {AbilitiesComponent} from './abilities/abilities.component';
import {AbilityComponent} from './ability/ability.component';
import {MovesComponent} from './moves/moves.component';
import {GetMovesByMethodAndGenerationPipe} from './pipes/get-moves-by-method-and-generation/get-moves-by-method-and-generation.pipe';
import {MoveComponent} from './moves/move/move.component';
import {MoveService} from './services/move.service';
import { GetLevelByMethodAndVersionPipe } from './pipes/get-level-by-method-and-version/get-level-by-method-and-version.pipe';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    PokedexComponent,
    PokemonComponent,
    LanguageComponent,
    TypeComponent,
    PokemonDetailComponent,
    AbilitiesComponent,
    AbilityComponent,
    MovesComponent,
    // Pipes
    GetTranslationPipe,
    GetMovesByMethodAndGenerationPipe,
    MoveComponent,
    GetLevelByMethodAndVersionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PokedexService,
    PokemonService,
    PokemonSpeciesService,
    LanguageService,
    TypeService,
    MoveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
