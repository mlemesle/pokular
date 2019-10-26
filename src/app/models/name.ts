import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';
import {AbstractTranslatableModel} from './abstract-translatable-model';
import {ModelInterface} from './model-interface';

export class Name extends AbstractTranslatableModel implements ModelInterface {

  name: string;

  constructor(data: any) {
    if (data) {
      super(ResourceFactory.buildResourceFromData(NamedApiResource, data.language));
      this.name = data.name;
    }
  }

  getValue(): string {
    return this.name;
  }
}
