import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';
import {AbstractTranslatableModel} from './abstract-translatable-model';
import {ModelInterface} from './model-interface';

export class Description extends AbstractTranslatableModel implements ModelInterface {

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
