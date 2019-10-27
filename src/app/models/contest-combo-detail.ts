import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class ContestComboDetail {

  useBefore: NamedApiResource[];
  useAfter: NamedApiResource[];

  constructor(data: any) {
    if (data) {
      this.useBefore = ResourceFactory.buildResourceListFromDataList(NamedApiResource, data.use_before);
      this.useAfter = ResourceFactory.buildResourceListFromDataList(NamedApiResource, data.use_after);
    }
  }
}
