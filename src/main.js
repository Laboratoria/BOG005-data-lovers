import athletes from "./data/athletes/athletes.js";
import data from "./data/athletes/athletes.js";

// eslint-disable-next-line no-console
console.log(athletes.athletes);

console.log("⏮️, ⏭️");

let posicionInicial = 0;
let posicionFinal = 52;

function makeCard(athletes) {
  console.log("athletes: ", athletes);
  let container = document.querySelector(".containerCard");
  let finalHtml = "";
  console.log("o.o", posicionFinal, posicionInicial);
  for (let i = posicionInicial; i < posicionFinal; i++) {
    console.log("position en for: ", i);
    console.log("khkhk", athletes[0]);
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
  container.innerHTML = finalHtml;

  document.getElementById("buttons").innerHTML = `<button id='left'> ⏮️</button>
  <button id='rigth'>⏭️</button>`;
}

function pagination(direction) {
  if (direction === "rigth") {
    posicionInicial += "";
    posicionFinal += "";
  } else {
    // posicionInicial -= 52;
    //posicionFinal -= 52;
  }
  console.log(pagination);
  makeCard(athletes.athletes);
  direction = athletes.posicionInicial ? `<button>⏭️</button>` : "";
  left = athletes.posicionFinal ? `<button>⏮️</button>` : "";
}

//       <div class="bodyCardFront"></div>
//       <div class="bodyCardBack"></div>
makeCard(athletes.athletes);
