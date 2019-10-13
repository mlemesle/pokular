import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class FlavorText {

  flavorText: string;
  language: NamedApiResource;
  version: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.flavorText = data.flavor_text;
      this.language = ResourceFactory.buildResourceFromData(NamedApiResource, data.language);
      this.version = ResourceFactory.buildResourceFromData(NamedApiResource, data.version);
    }
  }
}
