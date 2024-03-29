import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';
import {ModelInterface} from './model-interface';

export class PokemonSpeciesVariety implements ModelInterface {

  isDefault: boolean;
  pokemon: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.isDefault = data.default;
      this.pokemon = ResourceFactory.buildResourceFromData(NamedApiResource, data.pokemon);
    }
  }
}
