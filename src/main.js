import {
  orderNameAZ,
  orderNameZA,
  genderFilter,
  medalFilter,
  countryFilter,
  sportFilter,
} from "./data.js";
import data from "./data/athletes/athletes.js";

//Variables//
const deportes = data.athletes.slice(0, 100);
const firstPage = document.getElementById("homepage");
const countryPage = document.getElementById("pageCountry");
const bottonSearcher = document.getElementById("searcher");
const bottonInicio = document.getElementById("buttoninicio");
let container = document.querySelector(".containerCard");

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
  if (event.target.value === "az") {
    orderAsc();
  }
  if (event.target.value === "za") {
    orderDesc();
  }
});

function orderAsc() {
  let dataAsc = deportes.sort(orderNameAZ("name"));
  makeCards(dataAsc);
}

function orderDesc() {
  let dataDesc = deportes.sort(orderNameZA("name"));
  makeCards(dataDesc);
}

//Pintar data en cartas
function makeCards(deportes) {
  let finalHtml = "";

  for (let i = 0; i < deportes.length; i++) {
    const deporte = deportes[i];

    finalHtml += `
     <section class="cardFather">
       <section class="card">
         <section class="cardFront" >
          <section class="bodyCardFront" style="background-image: url(${
            deporte.gender === "F"
              ? "./imagenMujeres.png"
              : "./imagenHombres.png"
          });">
           <h1 class="namePrincipal">${i + 1}</h1>
           <h1 class="namePrincipal">${deporte.name}</h1>
          </section>
         </section>
         <section class="cardBack">
           <h1 class = "nameBack" >${deporte.name}</h1>
           <p class = "texT" > Pais: ${deporte.team}</p>
           <p class = "texT" >Medalla: ${deporte.medal}</p>
           <p class = "texT" >Deporte: ${deporte.sport}</p>
           <p class = "texT" >Género: ${deporte.gender}</p>
           <p class = "texT" >Altura: ${deporte.height}</p>
           <p class = "texT" >Peso: ${deporte.weight}</p>
         </section>
       </section>
     </section>`;
  }

  container.innerHTML = finalHtml;
}

makeCards(deportes);

//Filtros

//Por pais
document
  .getElementById("inputCountry")
  .addEventListener("change", function (event) {
    if (event.target.value == "allCountrys") {
      makeCards(deportes);
    } else {
      const resultadoPais = countryFilter(deportes, event.target.value);
      makeCards(resultadoPais);
    }
  });

//Por medalla
document
  .getElementById("inputMedal")
  .addEventListener("change", function (event) {
    if (event.target.value == "allMedal") {
      makeCards(deportes);
    } else {
      const resultadoMedalla = medalFilter(deportes, event.target.value);
      makeCards(resultadoMedalla);
    }
  });

//Por género
document
  .getElementById("inputGender")
  .addEventListener("change", function (event) {
    if (event.target.value == "allgender") {
      makeCards(deportes);
    } else {
      const resultadoGenero = genderFilter(deportes, event.target.value);
      makeCards(resultadoGenero);
    }
  });

//Por deporte
document
  .getElementById("inputSport")
  .addEventListener("change", function (event) {
    if (event.target.value == "allSport") {
      makeCards(deportes);
    } else {
      const resultadoDeporte = sportFilter(deportes, event.target.value);
      makeCards(resultadoDeporte);
    }
  });
