import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';
import {AbstractTranslatableModel} from './abstract-translatable-model';
import {ModelInterface} from './model-interface';

export class FlavorText extends AbstractTranslatableModel implements ModelInterface {

  flavorText: string;
  language: NamedApiResource;
  version: NamedApiResource;

  constructor(data: any) {
    if (data) {
      super(ResourceFactory.buildResourceFromData(NamedApiResource, data.language));
      this.flavorText = data.flavor_text;
      this.version = ResourceFactory.buildResourceFromData(NamedApiResource, data.version);
    }
  }

  getValue(): string {
    return this.flavorText;
  }
}
