import {ModelInterface} from './model-interface';

export class ResourceFactory implements ModelInterface {

  public static buildResourceFromData<T>(c: new(data: any) => T, data: any): T {
    return new c(data);
  }

  public static buildResourceListFromDataList<T>(c: new(data: any) => T, data: any[]): T[] {
    const l: T[] = [];

    if (data) {
      for (const e of data) {
        l.push(this.buildResourceFromData(c, e));
      }
    }

    return l;
  }
}
