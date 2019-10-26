import {NamedApiResource} from './named-api-resource';
import {ModelInterface} from './model-interface';
import {ResourceFactory} from './resource-factory';

export class TypeRelations implements ModelInterface {

  noDamageTo: NamedApiResource[];
  halfDamageTo: NamedApiResource[];
  doubleDamageTo: NamedApiResource[];
  noDamageFrom: NamedApiResource[];
  halfDamageFrom: NamedApiResource[];
  doubleDamageFrom: NamedApiResource[];

  constructor(data: any) {
    if (data) {
      this.noDamageTo = ResourceFactory.buildResourceListFromDataList(NamedApiResource, data.no_damage_to);
      this.halfDamageTo = ResourceFactory.buildResourceListFromDataList(NamedApiResource, data.half_damage_to);
      this.doubleDamageTo = ResourceFactory.buildResourceListFromDataList(NamedApiResource, data.double_damage_to);
      this.noDamageFrom = ResourceFactory.buildResourceListFromDataList(NamedApiResource, data.no_damage_from);
      this.halfDamageFrom = ResourceFactory.buildResourceListFromDataList(NamedApiResource, data.half_damage_from);
      this.doubleDamageFrom = ResourceFactory.buildResourceListFromDataList(NamedApiResource, data.double_damage_from);
    }
  }
}
