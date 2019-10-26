import {Component, OnInit} from '@angular/core';
import {PokedexService} from '../services/pokedex.service';
import {ActivatedRoute} from '@angular/router';
import {Pokedex} from '../models/pokedex';
import {ResourceFactory} from '../models/resource-factory';
import {LanguageService} from '../services/language.service';
import {AbstractComponent} from '../abstract.component';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent extends AbstractComponent implements OnInit {

  pokedex: Pokedex;

  constructor(private pokedexService: PokedexService,
              protected languageService: LanguageService,
              private route: ActivatedRoute) {
    super(languageService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(routeParams => {
      this.pokedexService.getByName(routeParams.name).subscribe(
        (incomingData) => this.pokedex = ResourceFactory.buildResourceFromData(Pokedex, incomingData),
        (error) => console.log('An error occurred ! ' + error)
      );
    });
  }
}
