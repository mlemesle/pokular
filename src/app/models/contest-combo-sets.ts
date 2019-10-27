import {ContestComboDetail} from './contest-combo-detail';
import {ResourceFactory} from './resource-factory';

export class ContestComboSets {

  normal: ContestComboDetail;
  super: ContestComboDetail;

  constructor(data: any) {
    if (data) {
      this.normal = ResourceFactory.buildResourceFromData(ContestComboDetail, data.normal);
      this.super = ResourceFactory.buildResourceFromData(ContestComboDetail, data.super);
    }
  }
}
