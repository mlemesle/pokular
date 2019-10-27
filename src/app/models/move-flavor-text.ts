import {AbstractTranslatableWithVersionModel} from './abstract-translatable-with-version-model';

export class MoveFlavorText extends AbstractTranslatableWithVersionModel {

  flavorText: string;

  constructor(data: any) {
    if (data) {
      super(data.language, data.version_group);
      this.flavorText = data.flavor_text;
    }
  }
}
