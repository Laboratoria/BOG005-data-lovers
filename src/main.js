import athletes from "./data/athletes/athletes.js";
import data from "./data/athletes/athletes.js";

console.log(athletes.athletes);

makeCard(athletes.athletes);
let posicionInicial = 0;
let posicionFinal = 52;
function pagination(direction) {
  if (direction === "rigth") {
    posicionInicial += 52;
    posicionFinal += 52;
  } else if (direction === "left") {
    posicionInicial -= 52;
    posicionFinal -= 52;
  }
  makeCard(athletes);
}
function makeCard() {
  let container = document.querySelector(".containerCard");
  let finalHtml = "";

  for (let i = posicionInicial; i < posicionFinal; i++) {
    finalHtml += ` 
    <section class="cardFather">
      <section class="card">
        <section class="cardFront">
          <h1 class="namePrincipal"> ${athletes[i].name} </h1>
          </section>
        <section class="cardBack">
          <h1 class = "nameBack"> ${athletes[i].name} </h1> 
          <p> Pais: ${athletes.team}</p>
          <p> Pais: ${athletes.team}</p>
          <p>Medalla: ${athletes.medal}</p>
          <p>Deporte: ${athletes.sport} </p>
          <p>Altura: ${athletes.height}</p>
          <p>Peso: ${athletes.weight}</p>
        </section> 
      </section>
    </section>`;
  }

  //       <div class="bodyCardFront">
  //     </div>
  //
  //       <div class="bodyCardBack"></div>
  container.innerHTML = finalHtml;
}
