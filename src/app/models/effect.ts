import {AbstractTranslatableModel} from './abstract-translatable-model';

export class Effect extends AbstractTranslatableModel {

  effect: string;

  constructor(data: any) {
    if (data) {
      super(data.language);
      this.effect = data.effect;
    }
  }

  getValue(): string {
    return this.effect;
  }
}
