import {NamedApiResource} from './named-api-resource';
import {ModelInterface} from './model-interface';

export class PalParkEncounterArea implements ModelInterface {

  baseScore: number;
  rate: number;
  area: NamedApiResource;

  constructor(data: any) {
    if (data) {
      this.baseScore = data.base_score;
      this.rate = data.rate;
      this.area = data.area;
    }
  }
}
