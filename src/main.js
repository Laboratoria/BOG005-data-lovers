import { orderNameAZ, orderNameZA, countryFilter } from "./data.js";
import athletes from "./data/athletes/athletes.js";
import data from "./data/athletes/athletes.js";

//Variables//
const deportes = data.athletes.slice(0, 100);
console.log(deportes);
const firstPage = document.getElementById("homepage");
const inputPais = document.getElementById("inputCountry").value;
const countryPage = document.getElementById("pageCountry");
const bottonSearcher = document.getElementById("searcher");
const bottonInicio = document.getElementById("buttoninicio");
const bottonCarst = document.getElementById("buscartarjetas");
let container = document.querySelector(".containerCard");
let posicionInicial = 0;
console.log(inputPais);

// cambio de pagina inicio a pagina de cartas
bottonSearcher.addEventListener("click", () => {
  countryPage.style.display = "block";
  firstPage.style.display = "none";
});

// Cambio de pagina de cartas a pagina de inicio

bottonInicio.addEventListener("click", () => {
  firstPage.style.display = "block";
  countryPage.style.display = "none";
});

//Ordenar
document.getElementById("ordenar").addEventListener("change", function (event) {
  if (event.target.value == "az") {
    orderAsc();
  }
  if (event.target.value == "za") {
    orderDesc();
  }
});
function orderAsc() {
  let dataAsc = deportes.sort(orderNameAZ("name"));
  makeCard(dataAsc);
}
function orderDesc() {
  let dataDesc = deportes.sort(orderNameZA("name"));
  makeCard(dataDesc);
}

//Pintar data en cartas
function makeCard(deportes) {
  let finalHtml = "";

  for (let i = posicionInicial; i < deportes.length; i++) {
    finalHtml += `
     <section class="cardFather">
       <section class="card">
         <section class="cardFront">
           <h1 class="namePrincipal">${i + 1}, ${deportes[i].team}</h1>
           <h1 class="namePrincipal">${deportes[i].name}</h1>
           </section>
         <section class="cardBack">
           <h1 class = "nameBack">${deportes[i].name}</h1>
           <p> Pais: ${deportes[i].team}</p>
           <p>Medalla: ${deportes[i].medal}</p>
           <p>Deporte: ${deportes[i].sport} </p>
           <p>Altura: ${deportes[i].height}</p>
           <p>Peso: ${deportes[i].weight}</p>
         </section>
       </section>
     </section>`;
  }
  container.innerHTML = finalHtml;
}
makeCard(deportes);
//       <div class="bodyCardFront"></div>
//       <div class="bodyCardBack"></div>*/
//Filtros

document
  .getElementById("inputCountry")
  .addEventListener("change", function (event) {
    if (event.target.value == "allCountrys") {
      makeCard(deportes);
    } else {
      const resultadoPais = countryFilter(deportes, event.target.value);
      makeCard(resultadoPais);
    }
  });
