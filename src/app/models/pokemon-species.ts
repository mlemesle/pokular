import {NamedApiResource} from './named-api-resource';
import {ApiResource} from './api-resource';
import {FlavorText} from './flavor-text';
import {Description} from './description';
import {Genus} from './genus';
import {PokemonSpeciesVariety} from './pokemon-species-variety';
import {PokemonSpeciesDexEntry} from './pokemon-species-dex-entry';
import {ResourceFactory} from './resource-factory';

export class PokemonSpecies {

  id: string;
  name: string;
  order: number;
  genderRate: number;
  captureRate: number;
  baseHappiness: number;
  isBaby: boolean;
  hatchCounter: number;
  hasGenderDifferences: boolean;
  formsSwitchable: boolean;
  growthRate: NamedApiResource;
  pokedexNumbers: PokemonSpeciesDexEntry[];
  eggGroups: NamedApiResource[];
  color: NamedApiResource;
  shape: NamedApiResource;
  evolveFromSpecies: NamedApiResource;
  evolutionChain: ApiResource;
  habitat: NamedApiResource;
  generation: NamedApiResource;
  flavorTextEntries: FlavorText[];
  formDescriptions: Description[];
  genera: Genus[];
  varieties: PokemonSpeciesVariety[];

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.order = data.order;
    this.genderRate = data.gender_rate;
    this.captureRate = data.capture_rate;
    this.baseHappiness = data.base_happiness;
    this.isBaby = data.is_baby;
    this.hatchCounter = data.hatch_encounter;
    this.hasGenderDifferences = data.has_genter_differences;
    this.formsSwitchable = data.form_switchable;
    this.growthRate = ResourceFactory.buildResourceFromData(NamedApiResource, data.growth_rate);
    this.pokedexNumbers = ResourceFactory.buildResourceListFromDataList(PokemonSpeciesDexEntry, data.pokedex_numbers);
    this.eggGroups = ResourceFactory.buildResourceListFromDataList(NamedApiResource, data.egg_groups);
    this.color = ResourceFactory.buildResourceFromData(NamedApiResource, data.color);
    this.shape = ResourceFactory.buildResourceFromData(NamedApiResource, data.shape);
    this.evolveFromSpecies = ResourceFactory.buildResourceFromData(NamedApiResource, data.evolve_from_species);
    this.evolutionChain = ResourceFactory.buildResourceFromData(NamedApiResource, data.evolution_chain);
    this.habitat = ResourceFactory.buildResourceFromData(NamedApiResource, data.habitat);
    this.generation = ResourceFactory.buildResourceFromData(NamedApiResource, data.generation);
    this.flavorTextEntries = ResourceFactory.buildResourceListFromDataList(FlavorText, data.flavor_text_entries);
    this.formDescriptions = ResourceFactory.buildResourceListFromDataList(Description, data.form_descriptions);
    this.genera = ResourceFactory.buildResourceListFromDataList(Genus, data.genera);
    this.varieties = ResourceFactory.buildResourceListFromDataList(PokemonSpeciesVariety, data.varieties);
  }
}
