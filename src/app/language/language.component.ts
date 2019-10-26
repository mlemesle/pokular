import {Component, Input, OnInit} from '@angular/core';
import {LanguageService} from '../services/language.service';
import {ResourceFactory} from '../models/resource-factory';
import {NamedApiResourceList} from '../models/named-api-resource-list';
import {Language} from '../models/language';
import {AbstractComponent} from '../abstract.component';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent extends AbstractComponent implements OnInit {

  languageList: Language[] = this.languageService.languageList;

  constructor(protected languageService: LanguageService) {
    super(languageService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  changeLanguage(newLanguage: string) {
    this.languageService.changeLanguage(newLanguage);
  }
}
