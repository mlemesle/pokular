import {PokemonMove} from '../../models/pokemon-move';
import {Move} from '../../models/move';

export class MoveViewModel {

  constructor(public pokemonMove: PokemonMove,
              public move: Move) {}
}
