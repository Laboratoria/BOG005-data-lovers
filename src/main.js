/*AQUI DEBEN ESTAR LAS INTERACCIONES CON EL DOM--- EVENT LISTENER ETC...*/
import ghibli from "./data/ghibli/ghibli.js";
import { sort } from "./data.js";

let moviesData = ghibli.films;
const characters = [];
const locations = [];
const vehicles = [];
let currentPage = "movies";
/*Separación*/
let moviesHtml = [];
let charactersHtml = [];
let locationsHtml = [];
let vehiclesHtml = [];
let ghibliMatchHtml = [];

/*Ids de peliculas,personajes,lugares,vehiculos y ghibli match*/

const moviesMenu = document.getElementById("movies");
const charactersMenu = document.getElementById("characters");
const locationsMenu = document.getElementById("locations");
const vehiclesMenu = document.getElementById("vehicles");
const ghibliMatchMenu = document.getElementById("ghibliMatch");
const sorAtoZ = document.getElementById("btn1");

// eventos
moviesMenu.addEventListener("click", showMovies);
charactersMenu.addEventListener("click", showCharacters);
locationsMenu.addEventListener("click", showLocations);
vehiclesMenu.addEventListener("click", showVehicles);
ghibliMatchMenu.addEventListener("click", showGhibliMatch);
sorAtoZ.addEventListener("click", sort2);

// addEventListenerTo(characters);
/*Info para mostrar las tarjetas*/

let container = document.querySelector(".cardContainer");

function sort2() {
  switch (currentPage) {
    case "movies":
      moviesData = sort(moviesData);
      break;
    case "characters":
      moviesData = sort(moviesData);
      break;
    case "locations":
      moviesData = sort(moviesData);
      break;
    case "vehicles":
      moviesData = sort(moviesData);
      break;
    case "ghibliMatch":
      moviesData = sort(moviesData);
      break;
    default:
      break;
  }

  setData();
  showMovies();
}
function setData() {
  moviesHtml = [];
  charactersHtml = [];
  locationsHtml = [];
  vehiclesHtml = [];
  ghibliMatchHtml = [];

  for (let i = 0; i < moviesData.length; i++) {
    moviesHtml.push(`
        <div class="card">
          <img
            src="${moviesData[i].poster}"
            alt=""
          />
          <div class="cardText">
            <h2 class="filmTitle">${moviesData[i].title}</h2>
            <p class="directorAndProducer">Director: ${moviesData[i].director} | Producer: ${moviesData[i].director}</p>
            <h5 class="releaseDate">${moviesData[i].release_date}</h5>
            <p class="filmDescription">${moviesData[i].description}
            </p>
          </div>
        </div>
    `);

    moviesData[i].people.forEach((p) => {
      charactersHtml.push(`
        <div class="card">
          <img
            src="${p.img}"
            alt=""
          />
          <div class="cardText">
            <h2 class="filmTitle">${p.name}</h2>
            <h5 class="releaseDate">Especie: ${p.specie}</h5>
            <h5 class="releaseDate">Edad: ${p.age}</h5>
            <h5 class="releaseDate">Género: ${p.gender}</h5>
</div>
        </div>
    `);
      characters.push(p);
    });

    moviesData[i].locations.forEach((l) => {
      locationsHtml.push(`
        <div class="card">
          <img
            src="${l.img}"
            alt=""
          />
          <div class="cardText">
            <h2 class="filmTitle">${l.name}</h2>
          </div>
        </div>
    `);
      locations.push(l);
    });

    moviesData[i].vehicles.forEach((v) => {
      vehiclesHtml.push(`
        <div class="card">
          <img
            src="${v.img}"
            alt=""
          />
          <div class="cardText">
            <h2 class="filmTitle">${v.name}</h2>
          </div>
        </div>
    `);
      vehicles.push(v);
    });
  }
}

function showMovies() {
  currentPage = "movies";
  container.innerHTML = moviesHtml.join("");
}
function showCharacters() {
  currentPage = "characters";
  container.innerHTML = charactersHtml.join("");
}
function showLocations() {
  currentPage = "locations";
  container.innerHTML = locationsHtml.join("");
}
function showVehicles() {
  currentPage = "vehicles";
  container.innerHTML = vehiclesHtml.join("");
}
function showGhibliMatch() {
  currentPage = "ghibliMatch";
  container.innerHTML = ghibliMatchHtml.join("");
}

setData();
showMovies();

/*Filtrando*/