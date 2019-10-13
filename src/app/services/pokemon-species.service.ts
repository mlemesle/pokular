import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonSpeciesService extends AbstractService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url = 'https://pokeapi.co/api/v2/pokemon-species/';
  }
}
