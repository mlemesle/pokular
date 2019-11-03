import {Component, Input, OnInit} from '@angular/core';
import {PokemonMove} from '../../models/pokemon-move';
import {AbstractComponent} from '../../abstract.component';
import {LanguageService} from '../../services/language.service';
import {Move} from '../../models/move';
import {MoveService} from '../../services/move.service';
import {ResourceFactory} from '../../models/resource-factory';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent extends AbstractComponent implements OnInit {

  @Input() moveName: string;
  move: Move;

  constructor(protected languageService: LanguageService,
              private moveService: MoveService) {
    super(languageService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.moveService.getByName(this.moveName).subscribe(
      (incomingData) => this.move = ResourceFactory.buildResourceFromData(Move, incomingData),
      (error) => console.log('An error occurred ! ' + error)
    );
  }
}
