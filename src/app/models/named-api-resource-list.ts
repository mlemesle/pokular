import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class NamedApiResourceList {

  count: number;
  next: string;
  previous: string;
  results: NamedApiResource[];

  constructor(data: any) {
    this.count = data.count;
    this.next = data.next;
    this.previous = data.previous;
    this.results = ResourceFactory.buildResourceListFromDataList(NamedApiResource, data.results);
  }
}
