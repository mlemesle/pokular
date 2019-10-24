import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstract.service';
import {Observable} from 'rxjs';
import {Pokedex} from '../models/pokedex';

@Injectable({
  providedIn: 'root'
})
export class PokedexService extends AbstractService {

  pokedexMapById: Map<number, Observable<any>> = new Map<number, Observable<any>>();
  pokedexMapByName: Map<string, Observable<any>> = new Map<string, Observable<any>>();
  pokedexList: Pokedex[] = [];

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = 'https://pokeapi.co/api/v2/pokedex/';
    this.populateModelModelList<Pokedex>(this.pokedexList, Pokedex, (a, b) => a.id - b.id);
  }

  getById(id: number): Observable<any> {
    return this.pokedexMapById[id] = this.pokedexMapById[id] || super.getById(id);
  }

  getByName(name: string): Observable<any> {
    return this.pokedexMapByName[name] = this.pokedexMapByName[name] || super.getByName(name);
  }
}
