import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AbstractService} from './abstract.service';
import {Observable} from 'rxjs';
import {Pokedex} from '../models/pokedex';

@Injectable({
  providedIn: 'root'
})
export class PokedexService extends AbstractService {

  pokedexMap: Map<number, Observable<any>> = new Map<number, Observable<Pokedex>>();
  pokedexes: Observable<any> = null;

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = 'https://pokeapi.co/api/v2/pokedex/';
  }

  getById(id: number): Observable<any> {
    return this.pokedexMap[id] = this.pokedexMap[id] || super.getById(id);
  }

  getAllPokedex(): Observable<any> {
    return this.pokedexes = this.pokedexes || super.getAll();
  }
}
