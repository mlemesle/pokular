import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResourceFactory} from '../models/resource-factory';
import {NamedApiResourceList} from '../models/named-api-resource-list';
import {Functions} from '../lib/functions';

export abstract class AbstractService {
  url: string;

  protected constructor(protected httpClient: HttpClient) {}

  populateModelModelList<T>(modelList: T[], c: new(data: any) => T, compareFn: (a: T, b: T) => number): void {
    this.getAll().subscribe(
      (incomingData) => this.extractModelList<T>(ResourceFactory.buildResourceFromData(NamedApiResourceList, incomingData),
        modelList, c, compareFn),
      (error) => console.log('An error occurred ! ' + error)
    );
  }

  private extractModelList<T>(pokedexes: NamedApiResourceList, modelList: T[],
                              c: new(data: any) => T, compareFn: (a: T, b: T) => number): void {
    for (const p of pokedexes.results) {
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
