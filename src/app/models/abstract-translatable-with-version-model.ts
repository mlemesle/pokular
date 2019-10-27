import {AbstractTranslatableModel} from './abstract-translatable-model';
import {NamedApiResource} from './named-api-resource';

export abstract class AbstractTranslatableWithVersionModel extends AbstractTranslatableModel {

  versionGroup: NamedApiResource;

  protected constructor(language: NamedApiResource, versionGroup: NamedApiResource) {
    super(language);
    this.versionGroup = versionGroup;
  }

  isCorrectLanguageAndVersionGroup(language: string, versionGroup: string): boolean {
    return this.isCorrectLanguage(language) && this.versionGroup.name === versionGroup;
  }
}
