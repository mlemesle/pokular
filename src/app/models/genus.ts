import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';
import {AbstractTranslatableModel} from './abstract-translatable-model';

export class Genus extends AbstractTranslatableModel {

  genus: string;

  constructor(data: any) {
    if (data) {
      super(ResourceFactory.buildResourceFromData(NamedApiResource, data.language));
      this.genus = data.genus;
    }
  }

  getValue(): string {
    return this.genus;
  }
}
