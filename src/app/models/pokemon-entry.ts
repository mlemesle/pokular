import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';
import {ModelInterface} from './model-interface';

export class PokemonEntry implements ModelInterface {

  entryNumber: number;
  pokemonSpecies: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.entryNumber = data.entry_number;
      this.pokemonSpecies = ResourceFactory.buildResourceFromData(NamedApiResource, data.pokemon_species);
    }
  }
}
