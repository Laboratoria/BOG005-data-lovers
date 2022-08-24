import athletes from "./data/athletes/athletes.js";
import data from "./data/athletes/athletes.js";

const names = athletes["name"];
console.log(athletes.athletes);

makeCard(athletes.athletes);

function makeCard(athletes) {
  let container = document.querySelector(".containerCard");

  let finalHtml = "";
  athletes.slice(0, 500).forEach((athletes) => {
    finalHtml += ` 
    <div class="cardFather">
      <div class="card">
        <div class="cardFront">
          <h1 class = "nameBack"> ${athletes.name} </h1> 
        </div> 
      </div>
    </div>`;
  });
  //
  //
  //       <div class="bodyCardFront">
  //         <h1 class="namePrincipal"> ${athletes.name} </h1>
  //       </div>
  //     </div>
  //     <div class="cardBack">
  //       <div class="bodyCardBack"></div>
  //       <h1 class = "nameBack"> ${athletes.name} </h1>
  //       <p> Pais: ${athletes.team}</p>
  //       <p>Medalla: ${athletes.medal}</p>
  //       <p>Deporte: ${athletes.sport} </p>
  //       <p>Altura: ${athletes.height}</p>
  //       <p>Peso: ${athletes.weight}</p>

  //
  //

  container.innerHTML = finalHtml;
}
