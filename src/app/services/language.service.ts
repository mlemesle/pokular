import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstract.service';
import {Subject} from 'rxjs';
import {Language} from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService extends AbstractService {

  language = 'fr';
  languageSubject = new Subject<string>();
  languageList: Language[] = [];

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = 'https://pokeapi.co/api/v2/language/';
    this.populateModelList<Language>(this.languageList, Language, (a, b) => a.id - b.id);
  }

  changeLanguage(newLanguage: string) {
    this.language = newLanguage;
    this.languageSubject.next(this.language);
  }
}
