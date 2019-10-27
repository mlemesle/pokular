import {NamedApiResource} from './named-api-resource';
import {Name} from './name';
import {VerboseEffect} from './verbose-effect';
import {AbilityEffectChange} from './ability-effect-change';
import {AbilityFlavorText} from './ability-flavor-text';
import {AbilityPokemon} from './ability-pokemon';
import {ResourceFactory} from './resource-factory';

export class Ability {

  id: number;
  name: string;
  isMainSeries: boolean;
  generation: NamedApiResource;
  names: Name[];
  effectEntries: VerboseEffect[];
  effectChanges: AbilityEffectChange[];
  flavorTextEntries: AbilityFlavorText[];
  pokemon: AbilityPokemon[];

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.isMainSeries = data.is_main_series;
      this.generation = ResourceFactory.buildResourceFromData(NamedApiResource, data.generation);
      this.names = ResourceFactory.buildResourceListFromDataList(Name, data.names);
      this.effectEntries = ResourceFactory.buildResourceListFromDataList(VerboseEffect, data.effect_entries);
      this.effectChanges = ResourceFactory.buildResourceListFromDataList(AbilityEffectChange, data.effect_changes);
      this.flavorTextEntries = ResourceFactory.buildResourceListFromDataList(AbilityFlavorText, data.flavor_text_entries);
      this.pokemon = ResourceFactory.buildResourceListFromDataList(AbilityPokemon, data.pokemon);
    }
  }
}
