import {NamedApiResource} from './named-api-resource';
import {ResourceFactory} from './resource-factory';

export class MoveMetaData {

  ailment: NamedApiResource;
  category: NamedApiResource;
  minHits: number;
  maxHits: number;
  minTurns: number;
  maxTurns: number;
  drain: number;
  healing: number;
  critRate: number;
  ailmentChance: number;
  flinchChance: number;
  statChance: number;

  constructor(data: any) {
    if (data) {
      this.ailment = ResourceFactory.buildResourceFromData(NamedApiResource, data.ailment);
      this.category = ResourceFactory.buildResourceFromData(NamedApiResource, data.category);
      this.minHits = data.min_hits;
      this.maxHits = data.max_hits;
      this.minTurns = data.min_turns;
      this.maxTurns = data.max_turns;
      this.drain = data.drain;
      this.healing = data.healing;
      this.critRate = data.crit_rate;
      this.ailmentChance = data.ailment_chance;
      this.flinchChance = data.flinch_chance;
      this.statChance = data.stat_chance;
    }
  }
}
