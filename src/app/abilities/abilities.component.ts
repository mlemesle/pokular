import {Component, Input, OnInit} from '@angular/core';
import {PokemonAbility} from '../models/pokemon-ability';
import {AbstractComponent} from '../abstract.component';
import {LanguageService} from '../services/language.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent extends AbstractComponent implements OnInit {

  @Input() pokemonAbilities: PokemonAbility[];

  constructor(protected languageService: LanguageService) {
    super(languageService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
