import {AbstractTranslatableModel} from './abstract-translatable-model';

export class VerboseEffect extends AbstractTranslatableModel {

  effect: string;
  shortEffect: string;

  constructor(data: any) {
    if (data) {
      super(data.language);
      this.effect = data.effect;
      this.shortEffect = data.short_effect;
    }
  }

  getValue(): string {
    return this.effect;
  }
}
