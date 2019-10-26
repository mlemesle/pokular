import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';
import {ModelInterface} from './model-interface';

export class PokemonStat implements ModelInterface {

  stat: NamedApiResource;
  effort: number;
  baseStat: number;

  constructor(data: any) {
    if (data) {
      this.stat = ResourceFactory.buildResourceFromData(NamedApiResource, data.stat);
      this.effort = data.effort;
      this.baseStat = data.base_stat;
    }
  }
}
