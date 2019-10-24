import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';
import {AbstractTranslatableModel} from './abstract-translatable-model';

export class Description extends AbstractTranslatableModel {

  description: string;

  constructor(data: any) {
    if (data) {
      super(ResourceFactory.buildResourceFromData(NamedApiResource, data.language));
      this.description = data.description;
    }
  }

  getValue(): string {
    return this.description;
  }
}
