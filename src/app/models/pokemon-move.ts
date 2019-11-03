import {NamedApiResource} from './named-api-resource';
import {PokemonMoveVersion} from './pokemon-move-version';
import {ResourceFactory} from './resource-factory';
import {ModelInterface} from './model-interface';

export class PokemonMove implements ModelInterface {

  move: NamedApiResource;
  versionGroupDetails: PokemonMoveVersion[];

  constructor(data: any) {
    if (data) {
      this.move = ResourceFactory.buildResourceFromData(NamedApiResource, data.move);
      this.versionGroupDetails = ResourceFactory.buildResourceListFromDataList(PokemonMoveVersion, data.version_group_details);
    }
  }

  isCorrectMethodAndVersion(method: string, version: string) {
    for (const pmv of this.versionGroupDetails) {
      if (pmv.isCorrectMethodAndVersion(method, version)) {
        return true;
      }
    }
    return false;
  }
}
