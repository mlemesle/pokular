import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';
import {ModelInterface} from './model-interface';

export class NamedApiResourceList implements ModelInterface {

  count: number;
  next: string;
  previous: string;
  results: NamedApiResource[];

  constructor(data: any) {
    if (data) {
      this.count = data.count;
      this.next = data.next;
      this.previous = data.previous;
      this.results = ResourceFactory.buildResourceListFromDataList(NamedApiResource, data.results);
    }
  }
}
