export function PokemonEnemy() {
  class ObjectPokemon {
    constructor(name, pv, pe, type, imageFight) {
      this.name = name;
      this.pv = pv;
      this.pe = pe;
      this.type = type;
      this.imageFight = imageFight;
    }
    attackLvl1() {
      return getRandomIntInclusive(1, 5);
    }
    attackLvl2() {
      return getRandomIntInclusive(5, 10);
    }
    attackLvl3() {
      return getRandomIntInclusive(10, 20);
    }
  }
  const BULBIZZARE = new ObjectPokemon(
    "BULBIZZARE",
    70,
    140,
    "plante",
    "img/pokemon_fight/pokemon_fight_1.png"
  );

  return BULBIZZARE;
}
