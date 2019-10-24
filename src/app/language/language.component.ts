import {Component, Input, OnInit} from '@angular/core';
import {LanguageService} from '../services/language.service';
import {ResourceFactory} from '../models/resource-factory';
import {NamedApiResourceList} from '../models/named-api-resource-list';
import {Language} from '../models/language';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {

  @Input() language: string;
  languageList: Language[] = this.languageService.languageList;

  constructor(private languageService: LanguageService) {}

  changeLanguage(newLanguage: string) {
    this.languageService.changeLanguage(newLanguage);
  }
}
