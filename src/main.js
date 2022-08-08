// import { example } from './data.js';

import data from './data/ghibli/ghibli.js';
const inicialDataToPrint = data.films;
import { filteringDataZtoA } from './data.js';


const addFilmOnMovies = function(film) {
    const listMovie = document.getElementById("peliculas");
    const li = document.createElement("li");
    const text = document.createTextNode(film.title);
    const img = document.createElement("img");
    img.setAttribute("src", film.poster);
    listMovie.appendChild(li);
    listMovie.appendChild(img);
    li.appendChild(text);
};
inicialDataToPrint.forEach(addFilmOnMovies);

const filterAlfab = document.getElementById("filAlfa");
filterAlfab.addEventListener("click", printDataFilteredZtoA);

function printDataFilteredZtoA(eve){
    eve.preventDefault(eve);
    const listMovie = document.getElementById("peliculas");
    listMovie.innerHTML = '';
    const dataFilteredZtoA = filteringDataZtoA(inicialDataToPrint);
    dataFilteredZtoA.forEach(addFilmOnMovies);
};


