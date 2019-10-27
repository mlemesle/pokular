import {VerboseEffect} from './verbose-effect';
import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class PastMoveStatValues {

  accuracy: number;
  effectChance: number;
  power: number;
  pp: number;
  effectEntries: VerboseEffect[];
  type: NamedApiResource;
  versionGroup: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.accuracy = data.accuracy;
      this.effectChance = data.effect_chance;
      this.power = data.power;
      this.pp = data.pp;
      this.effectEntries = ResourceFactory.buildResourceListFromDataList(VerboseEffect, data.effect_entries);
      this.type = ResourceFactory.buildResourceFromData(NamedApiResource, data.type);
      this.versionGroup = ResourceFactory.buildResourceFromData(NamedApiResource, data.version_group);
    }
  }
}
