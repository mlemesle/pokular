import {NamedApiResource} from './named-api-resource';
import {Name} from './name';
import {ResourceFactory} from './resource-factory';
import {TypeRelations} from './type-relations';
import {GenerationGameIndex} from './generation-game-index';
import {TypePokemon} from './type-pokemon';

export class Type {

  id: number;
  name: string;
  damageRelations: TypeRelations;
  gameIndices: GenerationGameIndex[];
  generation: NamedApiResource;
  moveDamageClass: NamedApiResource;
  names: Name[];
  pokemon: TypePokemon[];
  moves: NamedApiResource[];

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.damageRelations = ResourceFactory.buildResourceFromData(TypeRelations, data.damage_relations);
      this.gameIndices = ResourceFactory.buildResourceListFromDataList(GenerationGameIndex, data.game_indices);
      this.generation = ResourceFactory.buildResourceFromData(NamedApiResource, data.generation);
      this.moveDamageClass = ResourceFactory.buildResourceFromData(NamedApiResource, data.move_damage_class);
      this.names = ResourceFactory.buildResourceListFromDataList(Name, data.names);
      this.pokemon = ResourceFactory.buildResourceListFromDataList(TypePokemon, data.pokemon);
      this.moves = ResourceFactory.buildResourceListFromDataList(NamedApiResource, data.moves);
    }
  }
}
