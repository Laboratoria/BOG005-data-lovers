/*AQUI DEBEN ESTAR LAS INTERACCIONES CON EL DOM--- EVENT LISTENER ETC...*/
import ghibli from "./data/ghibli/ghibli.js";
import { sortByNameOrTitle, filterByDirector } from "./data.js";

let moviesData = [];
let charactersData = [];
let locationsData = [];
let vehiclesData = [];
let moviesByDirectorData = [];

let currentPage = "movies";
/*Separación*/
let moviesHtml = [];
let moviesByDirectorHtml = [];
let charactersHtml = [];
let locationsHtml = [];
let vehiclesHtml = [];
// let curiousFactHtml = [];

/*Ids de peliculas,personajes,lugares,vehiculos y dato curioso*/
const moviesMenu = document.getElementById("movies");
const charactersMenu = document.getElementById("characters");
const locationsMenu = document.getElementById("locations");
const vehiclesMenu = document.getElementById("vehicles");
// const curiousFactMenu = document.getElementById("curiousFact");

const sorAtoZ = document.getElementById("btn1");
const direcFilter = document.getElementById("directorOptions");

// eventos
moviesMenu.addEventListener("click", showMovies);
charactersMenu.addEventListener("click", showCharacters);
locationsMenu.addEventListener("click", showLocations);
vehiclesMenu.addEventListener("click", showVehicles);
// curiousFactMenu.addEventListener("click", showCuriousFact);
sorAtoZ.addEventListener("click", sortAsc);
direcFilter.addEventListener("change", showMoviesByDirector);

// addEventListenerTo(characters);
/*Info para mostrar las tarjetas*/

let container = document.querySelector(".cardContainer");

async function sortAsc() {
  switch (currentPage) {
    case "movies":
      moviesData = await sortByNameOrTitle(moviesData);
      setMoviesHtml();
      showMovies();
      break;
    case "characters":
      charactersData = await sortByNameOrTitle(charactersData);
      setCharactersHtml(charactersData);
      showCharacters();
      break;
    case "locations":
      locationsData = await sortByNameOrTitle(locationsData);
      setLocationsHtml(locationsData);
      showLocations();
      break;
    case "vehicles":
      vehiclesData = await sortByNameOrTitle(vehiclesData);
      setVehiclesHtml(locationsData);
      showVehicles();
      break;
    case "curiousFact":
      // moviesData = sort(moviesData); ???????
      break;
    default:
      break;
  }
}

async function showByDirector() {
  switch (currentPage) {
    case "directorOptions":
      moviesByDirectorData = await filterByDirector(moviesByDirectorData);
      setMoviesByDirectorHtml(moviesByDirectorData);
      showMoviesByDirector();
      break;
    default:
      break;
  }
}

function setData() {
  blankHtml();
  moviesData = ghibli.films;
  moviesByDirectorData = [];
  charactersData = [];
  locationsData = [];
  vehiclesData = [];
  for (let i = 0; i < moviesByDirectorData.length; i++) {
    moviesByDirectorData[i].forEach((d) => {
      moviesByDirectorData.push(d);
    });
  }

  for (let i = 0; i < moviesData.length; i++) {
    moviesData[i].people.forEach((p) => {
      charactersData.push(p);
    });
    moviesData[i].locations.forEach((l) => {
      locationsData.push(l);
    });
    moviesData[i].vehicles.forEach((v) => {
      vehiclesData.push(v);
    });
  }

  setCharactersHtml(charactersData);
  setLocationsHtml(locationsData);
  setVehiclesHtml(vehiclesData);
  setMoviesHtml();
  setMoviesByDirectorHtml(moviesByDirectorData);
}

function setMoviesHtml() {
  moviesData.forEach((m) => {
    moviesHtml.push(`
        <div class="card">
          <img
            src="${m.poster}"
            alt=""
          />
          <div class="cardText">
            <h2 class="filmTitle">${m.title}</h2>
            <p class="directorAndProducer">Director: ${m.director} | Producer: ${m.director}</p>
            <h5 class="releaseDate">${m.release_date}</h5>
            <p class="filmDescription">${m.description}
            </p>
          </div>
        </div>
        `);
  });
}

function setMoviesByDirectorHtml() {
  moviesByDirectorData.forEach((m) => {
    moviesByDirectorHtml.push(`
        <div class="card">
          <img
            src="${m.poster}"
            alt=""
          />
          <div class="cardText">
            <h2 class="filmTitle">${m.title}</h2>
            <p class="directorAndProducer">Director: ${m.director} | Producer: ${m.director}</p>
            <h5 class="releaseDate">${m.release_date}</h5>
            <p class="filmDescription">${m.description}
            </p>
          </div>
        </div>
        `);
  });
}

function setCharactersHtml() {
  charactersData.forEach((p) => {
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
  });
}

function setLocationsHtml() {
  locationsData.forEach((l) => {
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
  });
}

function setVehiclesHtml() {
  vehiclesData.forEach((v) => {
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
  });
}
/*Funcion filtrado*/
function showFilterByDirector() {
  let dataforFilter = ghibli.films;
  const selectDirector = document.getElementById("directorOptions");
  selectDirector.addEventListener("change", function () {
    let selectedOption = this.options[selectDirector.selectedIndex];
    let selectedDirector = selectedOption.text;
    console.log(selectedDirector);
    filterByDirector(dataforFilter, selectedDirector);
  });
}
showFilterByDirector();

function blankHtml() {
  moviesHtml = [];
  charactersHtml = [];
  locationsHtml = [];
  vehiclesHtml = [];
  // curiousFactHtml = [];
  moviesByDirectorHtml = [];
}

function showMoviesByDirector() {
  blankHtml();
  setMoviesByDirectorHtml();
  currentPage = "directorOptions";
  container.innerHTML = moviesByDirectorHtml.join("");
}

function showMovies() {
  blankHtml();
  setMoviesHtml();
  currentPage = "movies";
  container.innerHTML = moviesHtml.join("");
}

function showCharacters() {
  blankHtml();
  setCharactersHtml();
  currentPage = "characters";
  container.innerHTML = charactersHtml.join("");
}

function showLocations() {
  blankHtml();
  setLocationsHtml();
  currentPage = "locations";
  container.innerHTML = locationsHtml.join("");
}

function showVehicles() {
  blankHtml();
  setVehiclesHtml();
  currentPage = "vehicles";
  container.innerHTML = vehiclesHtml.join("");
}

// function showGhibliMatch() {
//   // blankHtml();
//   // currentPage = "ghibliMatch";
//   // container.innerHTML = ghibliMatchHtml.join(""); ?????
// }

setData();
showMovies();

/*Filtrando*/
