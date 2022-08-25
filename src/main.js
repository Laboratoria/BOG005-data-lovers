import athletes from "./data/athletes/athletes.js";
import data from "./data/athletes/athletes.js";

console.log(athletes.athletes);

makeCard(athletes.athletes);

function makeCard(athletes) {
  let container = document.querySelector(".containerCard");

  let finalHtml = "";
  athletes.slice(0, 52).forEach((athletes) => {
    finalHtml += ` 
    <section class="cardFather">
      <section class="card">
        <section class="cardFront">
          <h1 class="namePrincipal"> ${athletes.name} </h1>
          </section>
        <section class="cardBack">
          <h1 class = "nameBack"> ${athletes.name} </h1> 
          <p> Pais: ${athletes.team}</p>
          <p> Pais: ${athletes.team}</p>
          <p>Medalla: ${athletes.medal}</p>
          <p>Deporte: ${athletes.sport} </p>
          <p>Altura: ${athletes.height}</p>
          <p>Peso: ${athletes.weight}</p>
        </section> 
      </section>
    </section>`;
  });

  //       <div class="bodyCardFront">
  //     </div>
  //
  //       <div class="bodyCardBack"></div>
  container.innerHTML = finalHtml;
}
