import {Component, Input, OnInit} from '@angular/core';
import {AbstractComponent} from '../abstract.component';
import {LanguageService} from '../services/language.service';
import {Type} from '../models/type';
import {TypeService} from '../services/type.service';
import {ResourceFactory} from '../models/resource-factory';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent extends AbstractComponent implements OnInit {

  @Input() typeName: string;
  type: Type;

  constructor(protected languageService: LanguageService,
              private typeService: TypeService) {
    super(languageService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.typeService.getByName(this.typeName).subscribe(
      (incomingData) => this.type = ResourceFactory.buildResourceFromData(Type, incomingData),
      (error) => console.log('An error occured ! ' + error)
    );
  }

}
