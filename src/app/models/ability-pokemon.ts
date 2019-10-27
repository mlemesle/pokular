import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class AbilityPokemon {

  isHidden: boolean;
  slot: number;
  pokemon: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.isHidden = data.is_hidden;
      this.slot = data.slot;
      this.pokemon = ResourceFactory.buildResourceFromData(NamedApiResource, data.pokemon);
    }
  }
}
