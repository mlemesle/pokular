import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResourceFactory} from '../models/resource-factory';
import {NamedApiResourceList} from '../models/named-api-resource-list';
import {Functions} from '../lib/functions';
import {ModelInterface} from '../models/model-interface';

export abstract class AbstractService {
  url: string;

  protected constructor(protected httpClient: HttpClient) {}

  populateModelKeyStringMap<T extends ModelInterface>(modelMap: Map<string, T>, c: new(data: any) => T, keyToUse: string) {
    this.getAll().subscribe(
      (incomingData) => this.extractModelMap<T>(ResourceFactory.buildResourceFromData(NamedApiResourceList, incomingData),
        modelMap, c, undefined),
      (error) => console.log('An error occurred ! ' + error)
    );
  }

  private extractModelMap<T>(resourceList: NamedApiResourceList, modelMap: Map<string, T>,
                             c: new(data: any) => T, keyToUse: string): void {
    for (const p of resourceList.results) {
      this.getByName(p.name).subscribe(
        (incomingData) => this.buildResourceAndSetToModelMap(modelMap, incomingData, c, keyToUse),
        (error) => console.log('An error occurred ! ' + error)
      );
    }
  }

  private buildResourceAndSetToModelMap<T extends ModelInterface>(modelMap: Map<string, T>,
                                                                  data: any, c: new(data: any) => T, keyToUse: string): void {
    const model: T = ResourceFactory.buildResourceFromData(c, data);
    modelMap.set(keyToUse, model);
  }

  populateModelList<T extends ModelInterface>(modelList: T[], c: new(data: any) => T, compareFn: (a: T, b: T) => number): void {
    this.getAll().subscribe(
      (incomingData) => this.extractModelList<T>(ResourceFactory.buildResourceFromData(NamedApiResourceList, incomingData),
        modelList, c, compareFn),
      (error) => console.log('An error occurred ! ' + error)
    );
  }

  private extractModelList<T extends ModelInterface>(resourceList: NamedApiResourceList, modelList: T[],
                                                     c: new(data: any) => T, compareFn: (a: T, b: T) => number): void {
    for (const p of resourceList.results) {
      this.getByName(p.name).subscribe(
        (incomingData) => Functions.pushAndSort(modelList, ResourceFactory.buildResourceFromData(c, incomingData), compareFn),
        (error) => console.log('An error occurred ! ' + error)
      );
    }
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  getByName(name: string): Observable<any> {
    return this.httpClient.get(this.url + name);
  }
}
