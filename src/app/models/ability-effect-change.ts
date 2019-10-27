import {Effect} from './effect';
import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class AbilityEffectChange {

  effectEntries: Effect[];
  versionGroup: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.effectEntries = ResourceFactory.buildResourceListFromDataList(Effect, data.effect_entries);
      this.versionGroup = ResourceFactory.buildResourceFromData(NamedApiResource, data.version_group);
    }
  }
}
