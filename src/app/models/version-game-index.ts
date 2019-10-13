import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class VersionGameIndex {

  gameIndex: number;
  version: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.gameIndex = data.game_index;
      this.version = ResourceFactory.buildResourceFromData(NamedApiResource, data.version);
    }
  }

}
