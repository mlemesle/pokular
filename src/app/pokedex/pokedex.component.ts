import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PokedexService} from '../services/pokedex.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Pokedex} from '../models/pokedex';
import {ResourceFactory} from '../models/resource-factory';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokedex: Pokedex;

  constructor(private pokedexService: PokedexService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.pokedexService.getById(routeParams.id).subscribe(
        (incomingData) => this.pokedex = ResourceFactory.buildResourceFromData(Pokedex, incomingData),
        (error) => console.log('An error occurred ! ' + error)
      );
    });
  }
}
