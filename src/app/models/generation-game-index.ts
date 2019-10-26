import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';
import {ModelInterface} from './model-interface';

export class GenerationGameIndex implements ModelInterface {

  gameIndex: number;
  generation: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.gameIndex = data.game_index;
      this.generation = ResourceFactory.buildResourceFromData(NamedApiResource, data.generation);
    }
  }
}
