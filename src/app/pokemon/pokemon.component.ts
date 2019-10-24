import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from '../services/pokemon.service';
import {Pokemon} from '../models/pokemon';
import {ResourceFactory} from '../models/resource-factory';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() private pokemonName: string;
  pokemon: Pokemon;

  constructor(private pokemonSpeciesService: PokemonService) {}

  ngOnInit() {
    this.pokemonSpeciesService.getByName(this.pokemonName).subscribe(
      (incomingData) => this.pokemon = ResourceFactory.buildResourceFromData(Pokemon, incomingData),
      (error) => console.log('An error occured ! ' + error)
    );
  }

}
