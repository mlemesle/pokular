import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class PokemonEntry {

  entryNumber: number;
  pokemonSpecies: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.entryNumber = data.entry_number;
      this.pokemonSpecies = ResourceFactory.buildResourceFromData(NamedApiResource, data.pokemon_species);
    }
  }
}
