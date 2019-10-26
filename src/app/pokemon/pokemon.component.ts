import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from '../services/pokemon.service';
import {Pokemon} from '../models/pokemon';
import {ResourceFactory} from '../models/resource-factory';
import {PokemonSpeciesService} from '../services/pokemon-species.service';
import {PokemonSpecies} from '../models/pokemon-species';
import {AbstractComponent} from '../abstract.component';
import {LanguageService} from '../services/language.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent extends AbstractComponent implements OnInit {

  @Input() private pokemonName: string;
  pokemon: Pokemon;
  pokemonSpecies: PokemonSpecies;

  constructor(protected languageService: LanguageService,
              private pokemonService: PokemonService,
              private pokemonSpeciesService: PokemonSpeciesService) {
    super(languageService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.pokemonService.getByName(this.pokemonName).subscribe(
      (incomingData) => this.pokemon = ResourceFactory.buildResourceFromData(Pokemon, incomingData),
      (error) => console.log('An error occured ! ' + error)
    );
    this.pokemonSpeciesService.getByName(this.pokemonName).subscribe(
      (incomingData) => this.pokemonSpecies = ResourceFactory.buildResourceFromData(PokemonSpecies, incomingData),
      (error) => console.log('An error occured ! ' + error)
    );
  }
}
