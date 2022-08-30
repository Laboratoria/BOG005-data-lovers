import athletes from "./data/athletes/athletes.js";
import data from "./data/athletes/athletes.js";

// eslint-disable-next-line no-console
console.log(athletes.athletes);

console.log("⏮️, ⏭️");

const right = document.getElementById("buttonRigth");
const left = document.getElementById("buttonLeft");
let container = document.querySelector(".containerCard");
let posicionInicial = 0;
let posicionFinal = 40;

function makeCard(athletes) {
  console.log("athletes: ", athletes);

  let finalHtml = "";
  console.log("o.o", posicionFinal, posicionInicial);
  for (let i = posicionInicial; i < posicionFinal + posicionFinal; i++) {
    console.log("position en for: ", i);
    //console.log("khkhk", athletes[0]);
    finalHtml += `
     <section class="cardFather">
       <section class="card">
         <section class="cardFront">
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

left.addEventListener("click", () => {
  posicionInicial += 40;
  posicionFinal += 40;
  removeChildNodes(container);
  makeCard(athletes.athletes);
});

right.addEventListener("click", () => {
  if (posicionInicial != 0) {
    posicionInicial -= 40;
    posicionFinal -= 40;
    removeChildNodes(container);
    makeCard(athletes.athletes);
  }
});

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
//document.getElementById("buttons").innerHTML = `<button id='left'> ⏮</button>
// <button id="derecho">siguiente</button>`;
//let buttonRight = document.getElementById("derecho");
//buttonRight.addEventListener("onclick", alert("si estoy"));
//con
//f//unction pagination(direction) {
//////if (direction === "rigth") {
// posicionInicial += "";
// posicionFinal += "";
// } else {
// posicionInicial -= 52;
//posicionFinal -= 52;
// }
//sole.log(pagination);

//makeCard(athletes.athletes);
//}

//       <div class="bodyCardFront"></div>
//       <div class="bodyCardBack"></div>
makeCard(athletes.athletes);
