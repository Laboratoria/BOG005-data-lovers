import athletes from "./data/athletes/athletes.js";
import data from "./data/athletes/athletes.js";


console.log(athletes.athletes);

let buttons= document.getElementById('buttons')
console.log('⏮️, ⏭️')

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
  console.log(pagination);
  makeCard(athletes);
 posicionFinal= athletes.next ? `<button>⏭️</button>` : ""
 posicionInicial= athletes.posicionInicial ? `<button>⏮️</button>` : ""
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
          <p> Pais: ${athletes[i].team}</p>
          <p> Pais: ${athletes[i].team}</p>
          <p>Medalla: ${athletes[i].medal}</p>
          <p>Deporte: ${athletes[i].sport} </p>
          <p>Altura: ${athletes[i].height}</p>
          <p>Peso: ${athletes[i].weight}</p>
        </section> 
      </section>
    </section>`;
  }

  //       <div class="bodyCardFront"></div>
  //       <div class="bodyCardBack"></div>
  container.innerHTML = finalHtml;
}
