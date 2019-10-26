import {Component, OnInit} from '@angular/core';
import {PokedexService} from '../services/pokedex.service';
import {ActivatedRoute} from '@angular/router';
import {Pokedex} from '../models/pokedex';
import {ResourceFactory} from '../models/resource-factory';
import {LanguageService} from '../services/language.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokedex: Pokedex;
  language = this.languageService.language;

  constructor(private pokedexService: PokedexService,
              private languageService: LanguageService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.languageService.languageSubject.subscribe((newLanguage) => this.language = newLanguage);
    this.route.params.subscribe(routeParams => {
      this.pokedexService.getByName(routeParams.name).subscribe(
        (incomingData) => this.pokedex = ResourceFactory.buildResourceFromData(Pokedex, incomingData),
        (error) => console.log('An error occurred ! ' + error)
      );
    });
  }
}
