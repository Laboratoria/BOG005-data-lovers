/*AQUI DEBEN ESTAR LAS INTERACCIONES CON EL DOM--- EVENT LISTENER ETC...*/
import ghibli from "./data/ghibli/ghibli.js";
const moviesData = ghibli.films;
const moviesContainer = document.getElementById("main");

function moviesCard() {
  let printMovie = "";

  for (let i = 0; i < moviesData; i++) {
    printMovie += `      
      <div class="moviesContainer">
      <li id="movies">
        <h1>${moviesData.title}</h1><span class="text">${moviesData.description}</span>
        <img src="${moviesData.poster}">
      </li>
    </div>`;
  }
  moviesContainer.innerHtml = printMovie;
}
moviesCard();

// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);
