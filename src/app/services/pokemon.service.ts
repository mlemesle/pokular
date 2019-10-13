import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstract.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService extends AbstractService {

  pokemonMap: Map<number, Observable<any>> = new Map<number, Observable<any>>();

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = 'https://pokeapi.co/api/v2/pokemon/';
  }

  getById(id: number): Observable<any> {
    return this.pokemonMap[id] = this.pokemonMap[id] || super.getById(id);
  }
}
