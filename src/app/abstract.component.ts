import {OnInit} from '@angular/core';
import {LanguageService} from './services/language.service';

export class AbstractComponent implements OnInit {

  language = this.languageService.language;

  constructor(protected languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.languageSubject.subscribe((newLanguage) => this.language = newLanguage);
  }
}
