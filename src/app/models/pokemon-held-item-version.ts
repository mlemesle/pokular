import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class PokemonHeldItemVersion {

  version: NamedApiResource;
  rarity: number;

  constructor(data: any) {
    if (data) {
      this.version = ResourceFactory.buildResourceFromData(NamedApiResource, data.version);
      this.rarity = data.rarity;
    }
  }
}
