import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {LanguageService} from '../services/language.service';
import {PokemonService} from '../services/pokemon.service';
import {PokemonSpeciesService} from '../services/pokemon-species.service';
import {ResourceFactory} from '../models/resource-factory';
import {Pokemon} from '../models/pokemon';
import {PokemonSpecies} from '../models/pokemon-species';
import {AbstractComponent} from '../abstract.component';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent extends AbstractComponent implements OnChanges {

  @Input() protected pokemonName: string;
  pokemon: Pokemon;
  pokemonSpecies: PokemonSpecies;

  constructor(protected languageService: LanguageService,
              protected pokemonService: PokemonService,
              protected pokemonSpeciesService: PokemonSpeciesService) {
    super(languageService);
  }

  private refreshAttributes() {
    this.pokemonService.getByName(this.pokemonName).subscribe(
      (incomingData) => this.pokemon = ResourceFactory.buildResourceFromData(Pokemon, incomingData),
      (error) => console.log('An error occured ! ' + error)
    );
    this.pokemonSpeciesService.getByName(this.pokemonName).subscribe(
      (incomingData) => this.pokemonSpecies = ResourceFactory.buildResourceFromData(PokemonSpecies, incomingData),
      (error) => console.log('An error occured ! ' + error)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.pokemonName) {
      this.refreshAttributes();
    }
  }
}
