import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';
import {ModelInterface} from './model-interface';

export class VersionGameIndex implements ModelInterface {

  gameIndex: number;
  version: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.gameIndex = data.game_index;
      this.version = ResourceFactory.buildResourceFromData(NamedApiResource, data.version);
    }
  }
}
