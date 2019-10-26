import {ModelInterface} from './model-interface';

export class ApiResource implements ModelInterface {

  url: string;

  constructor(data: any) {
    if (data) {
      this.url = data.url;
    }
  }
}
