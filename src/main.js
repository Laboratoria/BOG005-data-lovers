import { countryFilter } from "./data.js";
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

// console.log(makeCard);

//
function makeCard(athletes) {
  //console.log("athletes: ", athletes);

  let finalHtml = "";
  // console.log("o.o", posicionFinal, posicionInicial);
  for (let i = posicionInicial; i <= posicionFinal; i++) {
    // console.log("position en for: ", athletes[i]);
// console.log(athletes[ï])
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

//Filtro pais 

document.getElementById("inputCountry").addEventListener("change", function (event){
  if ( event.target.value=="allCountrys"){ 
    makeCard (deportes)
  } else { 
    const resultadoPais = countryFilter ( deportes, event.target.value)
    makeCard(resultadoPais)
  }
})

/*document
  .getElementById("inputCountry")
  .addEventListener("change", function (event) {
    let selectOption = event.target.value
    let resultCountry = filtrarPais(deportes, selectOption);
    console.log(resultCountry)
    // console.log ('Resultado de filtro: ',resultCountry)
    makeCard(resultCountry)
    // if (resultCountry.length == 0) {
    //   console.log('no se filtra porque no se encuentra la opción')
    //   makeCard(deportes);
    // } else {
     
    //  makeCard(resultCountry);
    // }
  });*/
  

