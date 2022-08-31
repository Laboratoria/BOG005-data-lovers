import athletes from "./data/athletes/athletes.js";
import data from "./data/athletes/athletes.js";

// eslint-disable-next-line no-console
console.log(athletes.athletes);

console.log("⏮️, ⏭️");

const left = document.getElementById("buttonLeft");
const right = document.getElementById("buttonRight");
let container = document.querySelector(".containerCard");
let posicionInicial = 0;
let posicionFinal = 40;

function makeCard(athletes) {
  console.log("athletes: ", athletes);

  let finalHtml = "";
  console.log("o.o", posicionFinal, posicionInicial);
  for (let i = posicionInicial; i < posicionFinal; i++) {
    console.log("position en for: ", i);
    //console.log("khkhk", athletes[0]);
    finalHtml += `
     <section class="cardFather">
       <section class="card">
         <section class="cardFront">
           <h1 class="namePrincipal">${i + 1}</h1>
           <h1 class="namePrincipal">${athletes[i].name}</h1>
           </section>
         <section class="cardBack">
           <h1 class = "nameBack">${athletes[i].name}</h1>
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
}

right.addEventListener("click", () => {
  posicionInicial += 40;
  posicionFinal += 40;

  makeCard(athletes.athletes);
});

left.addEventListener("click", () => {
  if (posicionInicial != 0) {
    posicionInicial -= 40;
    posicionFinal -= 40;

    makeCard(athletes.athletes);
  }
});

//       <div class="bodyCardFront"></div>
//       <div class="bodyCardBack"></div>
makeCard(athletes.athletes);
