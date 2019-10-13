import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class PokemonSpeciesVariety {

  isDefault: boolean;
  pokemon: NamedApiResource;

  constructor(data: any) {
    this.isDefault = data.default;
    this.pokemon = ResourceFactory.buildResourceFromData(NamedApiResource, data.pokemon);
  }
}
