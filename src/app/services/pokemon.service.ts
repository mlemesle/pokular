import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstract.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService extends AbstractService {

  pokemonMapById: Map<number, Observable<any>> = new Map<number, Observable<any>>();
  pokemonMapByName: Map<string, Observable<any>> = new Map<string, Observable<any>>();

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
  }

  getById(id: number): Observable<any> {
    return this.pokemonMapById[id] = this.pokemonMapById[id] || super.getById(id);
  }

  getByName(name: string): Observable<any> {
    return this.pokemonMapByName[name] = this.pokemonMapByName[name] || super.getByName(name);
  }
}
