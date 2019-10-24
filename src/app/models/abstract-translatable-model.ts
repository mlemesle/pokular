import {NamedApiResource} from './named-api-resource';

export abstract class AbstractTranslatableModel {

  protected constructor(public language: NamedApiResource) {}

  isCorrectLanguage(language: string): boolean {
    return this.language.name === language;
  }

  abstract getValue(): string;
}
