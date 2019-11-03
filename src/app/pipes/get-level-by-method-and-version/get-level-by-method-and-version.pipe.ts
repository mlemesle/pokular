import { Pipe, PipeTransform } from '@angular/core';
import {PokemonMoveVersion} from '../../models/pokemon-move-version';

@Pipe({
  name: 'getLevelByMethodAndVersion'
})
export class GetLevelByMethodAndVersionPipe implements PipeTransform {

  transform(value: PokemonMoveVersion[], method: string, version: string): number {
    for (const pmv of value) {
      if (pmv.isCorrectMethodAndVersion(method, version)) {
        return pmv.levelLearnedAt;
      }
    }

    return 0;
  }
}
