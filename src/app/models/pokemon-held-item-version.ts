import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';
import {ModelInterface} from './model-interface';

export class PokemonHeldItemVersion implements ModelInterface {

  version: NamedApiResource;
  rarity: number;

  constructor(data: any) {
    if (data) {
      this.version = ResourceFactory.buildResourceFromData(NamedApiResource, data.version);
      this.rarity = data.rarity;
    }
  }
}
