export class ResourceFactory {

  public static buildResourceFromData<T>(c: new(data: any) => T, data: any): T {
    return new c(data);
  }

  public static buildResourceListFromDataList<T>(c: new(data: any) => T, data: any[]): T[] {
    const l: T[] = [];

    for (const e of data) {
      l.push(this.buildResourceFromData(c, e));
    }

    return l;
  }
}
