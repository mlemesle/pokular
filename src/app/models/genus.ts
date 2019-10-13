import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class Genus {

  genus: string;
  language: NamedApiResource;

  constructor(data: any) {
    this.genus = data.genus;
    this.language = ResourceFactory.buildResourceFromData(NamedApiResource, data.language);
  }
}
