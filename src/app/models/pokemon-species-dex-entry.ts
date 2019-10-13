import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class PokemonSpeciesDexEntry {

  entryNumber: string;
  pokedex: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.entryNumber = data.entry_number;
      this.pokedex = ResourceFactory.buildResourceFromData(NamedApiResource, data.pokedex);
    }
  }
}
