import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class Description {

  description: string;
  language: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.description = data.description;
      this.language = ResourceFactory.buildResourceFromData(NamedApiResource, data.language);
    }
  }
}
