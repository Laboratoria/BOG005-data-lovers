import athletes from "./data/athletes/athletes.js";
import data from "./data/athletes/athletes.js";

// declaracion de variable para la data

//Variables//
const deportes = data.athletes;
const firstPage = document.getElementById("homepage");
const inputPais = document.getElementById("inputCountry");
const countryPage = document.getElementById("pageCountry");
const bottonSearcher = document.getElementById("searcher");
const bottonInicio = document.getElementById("buttoninicio");
const left = document.getElementById("buttonLeft");
const right = document.getElementById("buttonRight");
let container = document.querySelector(".containerCard");
let posicionInicial = 0;
let posicionFinal = 40;

// cambio de pagina inicio a pagina de cartas
bottonSearcher.addEventListener("click", () => {
  countryPage.style.display = "block";
  firstPage.style.display = "none";
  filtrarPais;
});

// Cambio de pagina de cartas a pagina de inicio

bottonInicio.addEventListener("click", () => {
  firstPage.style.display = "block";
  countryPage.style.display = "none";
});

console.log(makeCard);

//
function makeCard(athletes) {
  //console.log("athletes: ", athletes);

  let finalHtml = "";
  // console.log("o.o", posicionFinal, posicionInicial);
  for (let i = posicionInicial; i < posicionFinal; i++) {
    //console.log("position en for: ", i);

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

//bottonSearcher.addEventListener("click", () => {
// countryPage.style.display = "block";
// firstPage.style.display = "none";
//});

//filtros;
const filtrarPais = (datos, opcion) => {
  const dataFiltradaPais = datos.filter((elemento) => elemento.team == opcion);
  return dataFiltradaPais;
};

inputPais.addEventListener("change", () => {
  const valorPais = inputPais.value;
  filtrarPais(deportes, valorPais);

  console.log("data filtrada", filtrarPais(deportes, valorPais));
});

//const filtrarPais = (datos) => {
//const dataFiltradaPais = datos.filter(
// (elemento) => elemento.team === "Colombia"
//);
//return dataFiltradaPais;
//};
console.log(filtrarPais(deportes, inputPais.value));
