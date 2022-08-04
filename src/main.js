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
