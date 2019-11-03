import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstract.service';
import {Observable} from 'rxjs';
import {Type} from '../models/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService extends AbstractService {

  typeMapById: Map<number, Type> = new Map<number, Type>();
  typeMapByName: Map<string, Type> = new Map<string, Type>();

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = 'https://pokeapi.co/api/v2/type/';
    this.populateModelKeyStringMap(this.typeMapByName, Type, 'name');
  }

  getById(id: number): Observable<Type> {
    return this.typeMapById[id] = this.typeMapById[id] || super.getById(id);
  }

  getByName(name: string): Observable<Type> {
    return this.typeMapByName[name] = this.typeMapByName[name] || super.getByName(name);
  }
}
