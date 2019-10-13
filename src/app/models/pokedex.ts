import {Description} from './description';
import {Name} from './name';
import {PokemonEntry} from './pokemon-entry';
import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class Pokedex {

  id: number;
  name: string;
  isMainSeries: boolean;
  descriptions: Description[];
  names: Name[];
  pokemonEntries: PokemonEntry[];
  region: NamedApiResource;
  versionGroups: NamedApiResource[];

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.isMainSeries = data.is_main_series;
    this.descriptions = ResourceFactory.buildResourceListFromDataList(Description, data.descriptions);
    this.names = ResourceFactory.buildResourceListFromDataList(Name, data.names);
    this.pokemonEntries = ResourceFactory.buildResourceListFromDataList(PokemonEntry, data.pokemon_entries);
    this.region = ResourceFactory.buildResourceFromData(NamedApiResource, data.region);
    this.versionGroups = ResourceFactory.buildResourceListFromDataList(NamedApiResource, data.version_groups);
  }
}
