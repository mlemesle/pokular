import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {PokemonMove} from '../models/pokemon-move';
import {AbstractComponent} from '../abstract.component';
import {LanguageService} from '../services/language.service';
import {Move} from '../models/move';
import {ResourceFactory} from '../models/resource-factory';
import {MoveService} from '../services/move.service';
import {MoveViewModel} from './model-view/move-view.model';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent extends AbstractComponent implements OnChanges {

  @Input() pokemonMoves: PokemonMove[];
  moveViewModels: MoveViewModel[];

  constructor(protected languageService: LanguageService,
              private moveService: MoveService) {
    super(languageService);
  }

  private refreshAttributes() {
    this.moveViewModels = [];
    for (const m of this.pokemonMoves) {
      this.moveService.getByName(m.move.name).subscribe(
        (incomingData) => {
          const move = ResourceFactory.buildResourceFromData(Move, incomingData);
          this.moveViewModels.push(new MoveViewModel(m, move));
          this.moveViewModels = this.moveViewModels.splice(0);
        },
        (error) => console.log('An error occurred ! ' + error)
      );
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.pokemonMoves) {
      this.refreshAttributes();
    }
  }
}
