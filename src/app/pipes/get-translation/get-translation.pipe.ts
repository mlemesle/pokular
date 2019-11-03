import {Pipe, PipeTransform} from '@angular/core';
import {AbstractTranslatableModel} from '../../models/abstract-translatable-model';
import {LanguageService} from '../../services/language.service';

@Pipe({
  name: 'getTranslation'
})
export class GetTranslationPipe implements PipeTransform {

  noTranslationAvailable: Map<string, string>;

  constructor() {
    this.noTranslationAvailable = new Map<string, string>();
    this.noTranslationAvailable.set('ja-Hrkt', '翻訳なし');
    this.noTranslationAvailable.set('roomaji', 'Hon\'yaku nashi');
    this.noTranslationAvailable.set('ko', '번역이 없습니다');
    this.noTranslationAvailable.set('zh-Hant', '沒有翻譯');
    this.noTranslationAvailable.set('fr', 'pas de traduction');
    this.noTranslationAvailable.set('de', 'keine Übersetzung');
    this.noTranslationAvailable.set('es', 'sin traducción');
    this.noTranslationAvailable.set('it', 'nessuna traduzione');
    this.noTranslationAvailable.set('en', 'no translation');
    this.noTranslationAvailable.set('cs', 'žádný překlad');
    this.noTranslationAvailable.set('ja', '翻訳なし');
    this.noTranslationAvailable.set('zh-Hans', '没有翻译');
  }

  transform(values: AbstractTranslatableModel[], language: string): string {

    for (const v of values) {
      if (v.isCorrectLanguage(language)) {
        return v.getValue();
      }
    }

    return this.noTranslationAvailable.get(language);
  }
}
