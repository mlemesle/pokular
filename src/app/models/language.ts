import {ResourceFactory} from './resource-factory';
import {Name} from './name';

export class Language {

  id: number;
  name: string;
  official: boolean;
  iso639: string;
  iso3166: string;
  names: Name[];

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.official = data.official;
      this.iso639 = data.iso639;
      this.iso3166 = data.iso3166;
      this.names = ResourceFactory.buildResourceListFromDataList(Name, data.names);
    }
  }
}
