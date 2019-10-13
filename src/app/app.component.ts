import {Component, OnInit} from '@angular/core';
import {PokedexService} from './services/pokedex.service';
import {ResourceFactory} from './models/resource-factory';
import {Pokedex} from './models/pokedex';
import {NamedApiResourceList} from './models/named-api-resource-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'pokular';
  pokedexList: NamedApiResourceList;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit() {
      this.pokedexService.getAllPokedex().subscribe(
        (incomingData) => this.pokedexList = ResourceFactory.buildResourceFromData(NamedApiResourceList, incomingData),
        (error) => console.log('An error occurred ! ' + error)
      );
  }
}
