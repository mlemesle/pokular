import {Component, OnInit} from '@angular/core';
import {PokedexService} from './services/pokedex.service';
import {Pokedex} from './models/pokedex';
import {LanguageService} from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pokular';
  language = this.languageService.language;
  pokedexList: Pokedex[] = this.pokedexService.pokedexList;

  constructor(private pokedexService: PokedexService,
              private languageService: LanguageService) {
  }
}
