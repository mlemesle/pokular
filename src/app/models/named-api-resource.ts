import {ModelInterface} from './model-interface';

export class NamedApiResource implements ModelInterface {

  name: string;
  url: string;

  constructor(data: any) {
    if (data) {
      this.name = data.name;
      this.url = data.url;
    }
  }
}
