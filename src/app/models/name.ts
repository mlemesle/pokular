import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class Name {

  name: string;
  language: NamedApiResource;

  constructor(data: any) {
    this.name = data.name;
    this.language = ResourceFactory.buildResourceFromData(NamedApiResource, data.language);
  }
}
