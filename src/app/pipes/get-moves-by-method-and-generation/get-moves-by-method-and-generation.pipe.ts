import {Pipe, PipeTransform} from '@angular/core';
import {MoveViewModel} from '../../moves/model-view/move-view.model';

@Pipe({
  name: 'getMovesByMethod'
})
export class GetMovesByMethodAndGenerationPipe implements PipeTransform {

  transform(value: MoveViewModel[], method: string, version: string): any {
    const l: MoveViewModel[] = [];

    for (const mvm of value) {
      if (mvm.pokemonMove.isCorrectMethodAndVersion(method, version)) {
        l.push(mvm);
      }
    }

    return l;
  }
}
