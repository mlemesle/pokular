import {NamedApiResource} from './named-api-resource';
import {ModelInterface} from './model-interface';

export abstract class AbstractTranslatableModel implements ModelInterface {

  protected constructor(public language: NamedApiResource) {}

  isCorrectLanguage(language: string): boolean {
    return this.language.name === language;
  }

  abstract getValue(): string;
}
