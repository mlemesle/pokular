import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class MoveStatChange {

  change: number;
  stat: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.change = data.change;
      this.stat = ResourceFactory.buildResourceFromData(NamedApiResource, data.stat);
    }
  }
}
