import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';
import {ModelInterface} from './model-interface';

export class PokemonMoveVersion implements ModelInterface {

  moveLearnMethod: NamedApiResource;
  versionGroup: NamedApiResource;
  levelLearnedAt: number;

  constructor(data: any) {
    if (data) {
      this.moveLearnMethod = ResourceFactory.buildResourceFromData(NamedApiResource, data.move_learn_method);
      this.versionGroup = ResourceFactory.buildResourceFromData(NamedApiResource, data.version_group);
      this.levelLearnedAt = data.level_learned_at;
    }
  }
}
