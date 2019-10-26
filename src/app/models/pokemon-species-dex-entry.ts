import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';
import {ModelInterface} from './model-interface';

export class PokemonSpeciesDexEntry implements ModelInterface {

  entryNumber: string;
  pokedex: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.entryNumber = data.entry_number;
      this.pokedex = ResourceFactory.buildResourceFromData(NamedApiResource, data.pokedex);
    }
  }
}
