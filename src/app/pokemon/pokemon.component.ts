import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Input() protected pokemonName: string;
  @Output() pokemonSelected = new EventEmitter();
  pokemon: Pokemon;
  pokemonSpecies: PokemonSpecies;

  constructor(protected languageService: LanguageService,
              protected pokemonService: PokemonService,
              protected pokemonSpeciesService: PokemonSpeciesService) {
    super(languageService);
  }

  onPokemonSelected() {
    this.pokemonSelected.emit(this.pokemonName);
  }

  protected refreshAttributes() {
    this.pokemonService.getByName(this.pokemonName).subscribe(
      (incomingData) => this.pokemon = ResourceFactory.buildResourceFromData(Pokemon, incomingData),
      (error) => console.log('An error occured ! ' + error)
    );
    this.pokemonSpeciesService.getByName(this.pokemonName).subscribe(
      (incomingData) => this.pokemonSpecies = ResourceFactory.buildResourceFromData(PokemonSpecies, incomingData),
      (error) => console.log('An error occured ! ' + error)
    );
  }

  ngOnInit() {
    super.ngOnInit();
    this.refreshAttributes();
  }
}
