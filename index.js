import { attackEnemy } from "./js/attackEnemy.js";
import { getRandomIntInclusive } from "./js/getRandomIntInclusive.js";
import { displayNewPvPe } from "./js/displayNewPvPe.js";
import { Pokemon } from "./js/Pokemon.js";
import { PokemonEnemy } from "./js/PokemonEnemy.js";

const BOXPOKEMONFIGHT = document.querySelector(".box-pokemon-fight");
const BOXFIGHTMENU = document.querySelector(".box-fight-menu");
//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////
BOXPOKEMONFIGHT.innerHTML += `
    <div class="box-your-pokemon">
        <h2>${Pokemon.name}</h2>
        <img src="${Pokemon.imageFight}">
        <div class="box-pv-pe">
            <h3>PV: ${Pokemon.pv}</h3>
            <h3>PE: ${Pokemon.pe}</h3>
        </div>
    </div>
`;

BOXFIGHTMENU.innerHTML = `
    <div class="attack-level-1">Attaque de niveau 1</div>
    <div class="attack-level-2">Attaque de niveau 2</div>
    <div class="attack-level-3">Attaque de niveau 3</div>
`;

BOXPOKEMONFIGHT.innerHTML += `
    <div class="box-your-pokemon-enemy">
        <h2>${PokemonEnemy.name}</h2>
        <img src="${PokemonEnemy.imageFight}">
        <div class="box-pv-pe-enemy">
            <h3>PV: ${PokemonEnemy.pv}</h3>
            <h3>PE: ${PokemonEnemy.pe}</h3>
        </div>
    </div>
`;
//////////////////////////////////////////////////////////////////////////////////////////
const ATTACKLVL1 = document.querySelector(".attack-level-1");
const ATTACKLVL2 = document.querySelector(".attack-level-2");
const ATTACKLVL3 = document.querySelector(".attack-level-3");

//////////////////////////////////////////////////////////////////////////////////////////
ATTACKLVL1.addEventListener("click", () => {
  BULBIZZARE.pv -= CARAPUCE.attackLvl1();
  CARAPUCE.pe -= 5;
  displayNewPvPe();
  if (CARAPUCE.pv > 0) {
    attackEnemy();
  } else {
    console.log("dead");
  }
});
//////////////////////////////////////////////////////////////////////////////////////////
ATTACKLVL2.addEventListener("click", () => {
  BULBIZZARE.pv -= CARAPUCE.attackLvl2();
  CARAPUCE.pe -= 10;
  displayNewPvPe();
  if (CARAPUCE.pv > 0) {
    attackEnemy();
  } else {
    console.log("dead");
  }
});
//////////////////////////////////////////////////////////////////////////////////////////
ATTACKLVL3.addEventListener("click", () => {
  BULBIZZARE.pv -= CARAPUCE.attackLvl3();
  CARAPUCE.pe -= 20;
  displayNewPvPe();
  if (CARAPUCE.pv > 0) {
    attackEnemy();
  } else {
    console.log("dead");
  }
});
//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////
