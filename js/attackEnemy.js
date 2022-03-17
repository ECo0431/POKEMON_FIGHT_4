import { getRandomIntInclusive } from "./getRandomIntInclusive.js";
import { displayNewPvPe } from "./displayNewPvPe.js";

export function attackEnemy() {
  let attackEnemyRandom = getRandomIntInclusive(1, 3);

  function attackEnemy1() {
    CARAPUCE.pv -= BULBIZZARE.attackLvl1();
    BULBIZZARE.pe -= 5;
  }

  function attackEnemy2() {
    CARAPUCE.pv -= BULBIZZARE.attackLvl2();
    BULBIZZARE.pe -= 10;
  }

  function attackEnemy3() {
    CARAPUCE.pv -= BULBIZZARE.attackLvl3();
    BULBIZZARE.pe -= 20;
  }

  displayNewPvPe();

  if (attackEnemyRandom == 1) {
    return attackEnemy1();
  } else if (attackEnemyRandom == 2) {
    return attackEnemy2();
  } else if (attackEnemyRandom == 3) {
    return attackEnemy3();
  }
}
