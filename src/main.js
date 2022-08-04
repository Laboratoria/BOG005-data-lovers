// import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

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
data.films.forEach(addFilmOnMovies);

const filterAlfab = document.getElementById("filAlfa");
filterAlfab.addEventListener("click", orderAlfa);
function SortArray(x, y) {
    if (x.title < y.title){
        return -1;
     } else if (x.title > y.title) {
        return 1;
     } else {}
    };

function orderAlfa(evt) {
    evt.preventDefault();
    const dataForOrder = data.films;
    dataForOrder.sort(SortArray);
};
console.log(SortArray);
data.films.forEach(addFilmOnMovies);
