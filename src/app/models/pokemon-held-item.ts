import {NamedApiResource} from './named-api-resource';
import {PokemonHeldItemVersion} from './pokemon-held-item-version';
import {ResourceFactory} from './resource-factory';

export class PokemonHeldItem {

  item: NamedApiResource;
  versionDetails: PokemonHeldItemVersion[];

  constructor(data: any) {
    if (data) {
      this.item = data.item;
      this.versionDetails = ResourceFactory.buildResourceListFromDataList(PokemonHeldItemVersion, data.version_details);
    }
  }
}
