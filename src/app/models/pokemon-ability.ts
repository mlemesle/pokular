import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class PokemonAbility {

  isHidden: boolean;
  slot: number;
  ability: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.isHidden = data.is_hidden;
      this.slot = data.slot;
      this.ability = ResourceFactory.buildResourceFromData(NamedApiResource, data.ability);
    }
  }
}
