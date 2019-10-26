import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstract.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonSpeciesService extends AbstractService {

  pokemonSpeciesMapById: Map<number, Observable<any>> = new Map<number, Observable<any>>();
  pokemonSpeciesMapByName: Map<string, Observable<any>> = new Map<string, Observable<any>>();

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = 'https://pokeapi.co/api/v2/pokemon-species/';
  }

  getById(id: number): Observable<any> {
    return this.pokemonSpeciesMapById[id] = this.pokemonSpeciesMapById[id] || super.getById(id);
  }

  getByName(name: string): Observable<any> {
    return this.pokemonSpeciesMapByName[name] = this.pokemonSpeciesMapByName[name] || super.getByName(name);
  }
}
