import { filtrarPais } from "./data.js";
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
const bottonCarst = document.getElementById("buscartarjetas");
const left = document.getElementById("buttonLeft");
const right = document.getElementById("buttonRight");
let container = document.querySelector(".containerCard");
let posicionInicial = 0;
let posicionFinal = 40;
let dataGenerica = [];

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

console.log("deportes: ", deportes);
dataGenerica = deportes;
//
function makeCard(athletes, posi, posf) {
  console.log(
    "array es: ",
    athletes,
    "posi param: ",
    posi,
    "posf param: ",
    posf
  );

  let finalHtml = "";
  // console.log("o.o", posicionFinal, posicionInicial);
  for (let i = posi; i < posf; i++) {
    //console.log("position en for: ", i);
    //console.log(athletes[i]);
    finalHtml += `
     <section class="cardFather">
       <section class="card">
         <section class="cardFront">
           <h1 class="namePrincipal">${i + 1}, ${athletes[i].team}</h1>
           <h1 class="namePrincipal">${athletes[i].name}</h1>
           </section>
         <section class="cardBack">
           <h1 class = "nameBack">${athletes[i].name}</h1>
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
  if (dataGenerica.length >= 40) {
    // console.log("datGenerica: ", dataGenerica);
    posicionInicial += 40;
    console.log("tamaño: ", dataGenerica.length);
    if (posicionFinal < dataGenerica.length) {
      console.log(posicionFinal);
      posicionFinal = posicionInicial + 40;
    } else {
      console.log("posfinal: ", posicionFinal);
      console.log("posini: ", posicionInicial);
      console.log("ultima paginación");
      posicionInicial = posicionInicial - 40;
      posicionFinal = dataGenerica.length;
    }
    console.log(
      "posiciones fuera de la condición: ",
      posicionInicial,
      posicionFinal
    );
    makeCard(dataGenerica, posicionInicial, posicionFinal);
  } else {
    console.log("ya no hay mas cartas");
  }
});

left.addEventListener("click", () => {
  if (posicionInicial != 0) {
    posicionInicial -= 40;
    posicionFinal -= 40;
    console.log(athletes.athletes);
    makeCard(athletes.athletes);
  }
});

//       <div class="bodyCardFront"></div>
//       <div class="bodyCardBack"></div>
makeCard(athletes.athletes, posicionInicial, posicionFinal);

//Filtro pais

document
  .getElementById("inputCountry")
  .addEventListener("change", function (event) {
    let selectOption = event.target.value;
    let resultCountry = filtrarPais(deportes, selectOption);
    dataGenerica = resultCountry;
    console.log("genérica: ", dataGenerica);
    console.log("Resultado de filtro: ", resultCountry);
    if (resultCountry.length <= 40) {
      //console.log("tamaño: ", resultCountry.length);
      makeCard(resultCountry, 0, resultCountry.length);
    } else {
      posicionInicial = 0;
      posicionFinal = 40;
      makeCard(resultCountry, posicionInicial, posicionFinal);
    }

    // if (resultCountry.length == 0) {
    //   console.log('no se filtra porque no se encuentra la opción')
    //   makeCard(deportes);
    // } else {

    //  makeCard(resultCountry);
    // }
  });

//Filtro guia test

/*document.getElementById("inputCountry").addEventListener("change", function (event){
  if ( event.target.value=="allCountrys"){ 
    makeCard (deportes)
  } else { 
    const resultadoPais = countryFilter ( deportes, event.target.value)
    makeCard(resultadoPais)
  }
})*/
