// import { example } from './data.js';

import data from './data/ghibli/ghibli.js';


// data.films.forEach(function (film) {
//     console.log(film.title)
//     const ol = document.getElementById("peliculas");
//     const li = document.createElement("li");
//     const text = document.createTextNode(film.title);
//     ol.appendChild(li)
//     li.appendChild(text)
// })

const addFilmOnMovies = function(film) {
    const ol = document.getElementById("peliculas");
    const li = document.createElement("li");
    const text = document.createTextNode(film.title);
    ol.appendChild(li)
    li.appendChild(text)
};
data.films.forEach(addFilmOnMovies)   
