import {ApiResource} from './api-resource';
import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class MachineVersionDetail {

  machine: ApiResource;
  versionGroup: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.machine = ResourceFactory.buildResourceFromData(ApiResource, data.machine);
      this.versionGroup = ResourceFactory.buildResourceFromData(NamedApiResource, data.version_group);
    }
  }
}
