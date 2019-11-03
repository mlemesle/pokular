import {Component} from '@angular/core';
import {PokedexService} from './services/pokedex.service';
import {Pokedex} from './models/pokedex';
import {LanguageService} from './services/language.service';
import {AbstractComponent} from './abstract.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AbstractComponent {

  title = 'pokular';
  pokedexList: Pokedex[] = this.pokedexService.pokedexList;

  constructor(private pokedexService: PokedexService,
              protected languageService: LanguageService) {
    super(languageService);
  }
}
