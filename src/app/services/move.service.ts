import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstract.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoveService extends AbstractService {

  moveMapById: Map<number, Observable<any>> = new Map<number, Observable<any>>();
  moveMapByName: Map<string, Observable<any>> = new Map<string, Observable<any>>();

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = 'https://pokeapi.co/api/v2/move/';
  }

  getById(id: number): Observable<any> {
    return this.moveMapById[id] = this.moveMapById[id] || super.getById(id);
  }

  getByName(name: string): Observable<any> {
    return this.moveMapByName[name] = this.moveMapByName[name] || super.getByName(name);
  }
}
