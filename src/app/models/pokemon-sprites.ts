export class PokemonSprites {

  frontDefault: string;
  frontShiny: string;
  frontFemale: string;
  frontShinyFemale: string;
  backDefault: string;
  backShiny: string;
  backFemale: string;
  backShinyFemale: string;

  constructor(data: any) {
    if (data) {
      this.frontDefault = data.front_default;
      this.frontShiny = data.front_shiny;
      this.frontFemale = data.front_female || this.frontDefault;
      this.frontShinyFemale = data.front_shiny_female || this.frontShiny;
      this.backDefault = data.back_default;
      this.backShiny = data.back_shiny;
      this.backFemale = data.back_female || this.backDefault;
      this.backShinyFemale = data.back_shiny_female || this.backShiny;
    }
  }
}
