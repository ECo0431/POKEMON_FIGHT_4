const BOXPVPE = document.querySelector(".box-pv-pe");
const BOXPVPEENEMY = document.querySelector(".box-pv-pe-enemy");

export function displayNewPvPe() {
  BOXPVPEENEMY.innerHTML = `
      <h3>PV: ${BULBIZZARE.pv}</h3>
      <h3>PE: ${BULBIZZARE.pe}</h3>
  `;
  BOXPVPE.innerHTML = `
      <h3>PV: ${CARAPUCE.pv}</h3>
      <h3>PE: ${CARAPUCE.pe}</h3>
  `;
}
