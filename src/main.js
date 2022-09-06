/*AQUI DEBEN ESTAR LAS INTERACCIONES CON EL DOM--- EVENT LISTENER ETC...*/
import ghibli from "./data/ghibli/ghibli.js";
import { sortByNameOrTitle, filterByDirector, getAverage } from "./data.js";

let moviesData = [];
let charactersData = [];
let locationsData = [];
let vehiclesData = [];
let currentPage = "movies";
/*Separación*/
let moviesHtml = [];
let charactersHtml = [];
let locationsHtml = [];
let vehiclesHtml = [];

/*Ids de peliculas,personajes,lugares,vehiculos y dato curioso*/
const moviesMenu = document.getElementById("movies");
const charactersMenu = document.getElementById("characters");
const locationsMenu = document.getElementById("locations");
const vehiclesMenu = document.getElementById("vehicles");
const curiousFactMenu = document.getElementById("curiousFact");
const sorAtoZ = document.getElementById("btn1");

// eventos
moviesMenu.addEventListener("click", showMovies);
charactersMenu.addEventListener("click", showCharacters);
locationsMenu.addEventListener("click", showLocations);
vehiclesMenu.addEventListener("click", showVehicles);
curiousFactMenu.addEventListener("click", showCuriousFact);
sorAtoZ.addEventListener("click", sortAsc);

/*Info para mostrar las tarjetas*/
let container = document.querySelector(".cardContainer");
let messageContainer = document.querySelector(".messageContainer");

async function sortAsc() {
  switch (currentPage) {
    case "movies":
      moviesData = await sortByNameOrTitle(moviesData);
      setMoviesHtml(moviesData);
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
      showCuriousFact();
      break;
    default:
      break;
  }
}

function setData() {
  blankHtml();
  moviesData = ghibli.films;
  charactersData = [];
  locationsData = [];
  vehiclesData = [];

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
  setMoviesHtml(moviesData);
}

function setMoviesHtml(arrData) {
  arrData.forEach((m) => {
    moviesHtml.push(`
        <div class="card">
          <img
            src="${m.poster}"
            alt="Imagenes Peliculas"
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
          alt="Imagenes Personajes"
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
          alt="Imagenes Localizaciones"
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
          alt="Imagenes vehiculos"
        />
        <div class="cardText">
          <h2 class="filmTitle">${v.name}</h2>
        </div>
      </div>
  `);
  });
}
/*Funcion filtrado*/

const selectDirector = document.getElementById("directorOptions");
selectDirector.addEventListener("change", function () {
  let selectedOption = this.options[selectDirector.selectedIndex];
  let selectedDirector = selectedOption.text;
  const arrayDirector = filterByDirector(moviesData, selectedDirector);

  showMovies("", arrayDirector);
});

function blankHtml() {
  moviesHtml = [];
  charactersHtml = [];
  locationsHtml = [];
  vehiclesHtml = [];
  messageContainer.innerHTML = "";
}
/*Funciones que muestran peliculas, personajes,vehiculos, localizaciones y el dato curioso*/

function showMovies(evt, data = ghibli.films) {
  console.log(data)
  blankHtml();
  setMoviesHtml(data);
  currentPage = "movies";
  container.innerHTML = moviesHtml.join("");
  selectDirector.style.display = "block";
  sorAtoZ.style.display = "block";
}

function showCharacters() {
  blankHtml();
  setCharactersHtml();
  currentPage = "characters";
  container.innerHTML = charactersHtml.join("");
  selectDirector.style.display = "none";
}

function showLocations() {
  blankHtml();
  setLocationsHtml();
  currentPage = "locations";
  container.innerHTML = locationsHtml.join("");
  selectDirector.style.display = "none";
}

function showVehicles() {
  blankHtml();
  setVehiclesHtml();
  currentPage = "vehicles";
  container.innerHTML = vehiclesHtml.join("");
  selectDirector.style.display = "none";
}

function showCuriousFact() {
  blankHtml();
  currentPage = "curiousFact";
  container.innerHTML = "";
  messageContainer.innerHTML = `
  <div>
    <div class="card">
        <h2 class="filmTitle--curiousFact">Las películas de Studio Ghibli tienen en promedio un puntaje de ${getAverage(moviesData)} en Rotten Tomatoes
        </h2>
    </div>
    <div class="container__curiousFactImage">
    <img
    src="./imagenes/ImagenDatoCurioso.webp" class="curiousFactImage"
    alt="Imagen Dato Curioso"
  />
    </div>
  </div>
`;
  setMoviesHtml(moviesData);
  selectDirector.style.display = "none";
  sorAtoZ.style.display = "none";
}

setData();
showMovies();

/*Filtrando*/