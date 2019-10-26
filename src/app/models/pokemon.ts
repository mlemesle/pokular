import {PokemonAbility} from './pokemon-ability';
import {NamedApiResource} from './named-api-resource';
import {VersionGameIndex} from './version-game-index';
import {PokemonHeldItem} from './pokemon-held-item';
import {PokemonMove} from './pokemon-move';
import {PokemonSprites} from './pokemon-sprites';
import {PokemonStat} from './pokemon-stat';
import {PokemonType} from './pokemon-type';
import {ResourceFactory} from './resource-factory';
import {ModelInterface} from './model-interface';

export class Pokemon implements ModelInterface {

  id: number;
  name: string;
  baseExperience: number;
  height: number;
  isDefault: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedApiResource[];
  gameIndices: VersionGameIndex[];
  heldItems: PokemonHeldItem[];
  locationAreaEncounters: string;
  moves: PokemonMove[];
  sprites: PokemonSprites;
  species: NamedApiResource;
  stats: PokemonStat[];
  types: PokemonType[];

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.baseExperience = data.base_experience;
      this.height = data.height;
      this.isDefault = data.is_default;
      this.weight = data.weight;
      this.abilities = ResourceFactory.buildResourceListFromDataList(PokemonAbility, data.abilities);
      this.forms = ResourceFactory.buildResourceListFromDataList(NamedApiResource, data.forms);
      this.gameIndices = ResourceFactory.buildResourceListFromDataList(VersionGameIndex, data.game_indices);
      this.heldItems = ResourceFactory.buildResourceListFromDataList(PokemonHeldItem, data.help_items);
      this.locationAreaEncounters = data.location_area_encounters;
      this.moves = ResourceFactory.buildResourceListFromDataList(PokemonMove, data.moves);
      this.sprites = ResourceFactory.buildResourceFromData(PokemonSprites, data.sprites);
      this.species = ResourceFactory.buildResourceFromData(NamedApiResource, data.species);
      this.stats = ResourceFactory.buildResourceListFromDataList(PokemonStat, data.stats);
      this.types = ResourceFactory.buildResourceListFromDataList(PokemonType, data.types);
    }
  }
}
