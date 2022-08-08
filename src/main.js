
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

const filterAlfab = document.getElementById("filAlfa");
filterAlfab.addEventListener("click", printDataFilteredZtoA);

const btnOrderDes = document.getElementById("orderDesc");
btnOrderDes.addEventListener("click", printOrderDes);

function printOrderDes(){
    const orderDesc = utilities.orderByTitleDesc(films);
    printMovies(orderDesc);
};


const btnOrderByScore = document.getElementById("orderByScore");
btnOrderByScore.addEventListener("click", printOrderByScore);

function printOrderByScore(){
    const orderScore = utilities.orderByScore(films);
    printMovies(orderScore);
}
