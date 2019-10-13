import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class PokemonType {

  slot: number;
  type: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.slot = data.slot;
      this.type = ResourceFactory.buildResourceFromData(NamedApiResource, data.type);
    }
  }
}
