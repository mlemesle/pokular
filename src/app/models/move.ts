import {ContestComboSets} from './contest-combo-sets';
import {NamedApiResource} from './named-api-resource';
import {ApiResource} from './api-resource';
import {VerboseEffect} from './verbose-effect';
import {AbilityEffectChange} from './ability-effect-change';
import {MoveFlavorText} from './move-flavor-text';
import {MachineVersionDetail} from './machine-version-detail';
import {MoveMetaData} from './move-meta-data';
import {Name} from './name';
import {PastMoveStatValues} from './past-move-stat-values';
import {MoveStatChange} from './move-stat-change';
import {ResourceFactory} from './resource-factory';

export class Move {

  id: number;
  name: string;
  accuracy: number;
  effectChance: number;
  pp: number;
  priority: number;
  power: number;
  contestCombos: ContestComboSets;
  contestType: NamedApiResource;
  contestEffect: ApiResource;
  damageClass: NamedApiResource;
  effectEntries: VerboseEffect[];
  effectChanges: AbilityEffectChange[];
  flavorTextEntries: MoveFlavorText[];
  generation: NamedApiResource;
  machines: MachineVersionDetail[];
  meta: MoveMetaData;
  names: Name[];
  pastValues: PastMoveStatValues;
  statChanges: MoveStatChange[];
  superContestEffect: ApiResource;
  target: NamedApiResource;
  type: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.accuracy = data.accuracy;
      this.effectChance = data.effectChance;
      this.pp = data.pp;
      this.priority = data.priority;
      this.power = data.power;
      this.contestCombos = ResourceFactory.buildResourceFromData(ContestComboSets, data.contest_combos);
      this.contestType = ResourceFactory.buildResourceFromData(NamedApiResource, data.contest_type);
      this.contestEffect = ResourceFactory.buildResourceFromData(ApiResource, data.contest_effect);
      this.damageClass = ResourceFactory.buildResourceFromData(NamedApiResource, data.damage_class);
      this.effectEntries = ResourceFactory.buildResourceListFromDataList(VerboseEffect, data.effect_entries);
      this.effectChanges = ResourceFactory.buildResourceListFromDataList(AbilityEffectChange, data.effect_changes);
      this.flavorTextEntries = ResourceFactory.buildResourceListFromDataList(MoveFlavorText, data.flavor_text_entries);
      this.generation = ResourceFactory.buildResourceFromData(NamedApiResource, data.generation);
      this.machines = ResourceFactory.buildResourceListFromDataList(MachineVersionDetail, data.machines);
      this.meta = ResourceFactory.buildResourceFromData(MoveMetaData, data.meta);
      this.names = ResourceFactory.buildResourceListFromDataList(Name, data.names);
      this.pastValues = ResourceFactory.buildResourceFromData(PastMoveStatValues, data.past_values);
      this.statChanges = ResourceFactory.buildResourceListFromDataList(MoveStatChange, data.stat_changes);
      this.superContestEffect = ResourceFactory.buildResourceFromData(ApiResource, data.super_contest_effect);
      this.target = ResourceFactory.buildResourceFromData(NamedApiResource, data.target);
      this.type = ResourceFactory.buildResourceFromData(NamedApiResource, data.type);
    }
  }
}
