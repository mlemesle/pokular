import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PokemonService} from '../services/pokemon.service';
import {Subscription} from 'rxjs';
import {PokemonSpecies} from '../models/pokemon-species';
import {Pokemon} from '../models/pokemon';
import {ResourceFactory} from '../models/resource-factory';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() private pokemonUrl: string;
  pokemon: Pokemon;

  constructor(private pokemonSpeciesService: PokemonService) {}

  ngOnInit() {
    this.pokemonSpeciesService.getByUrl(this.pokemonUrl).subscribe(
      (incomingData) => this.pokemon = ResourceFactory.buildResourceFromData(Pokemon, incomingData),
      (error) => console.log('An error occured ! ' + error)
    );
  }

}
