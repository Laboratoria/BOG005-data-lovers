import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//const nameMovie = document.getElementById("moveOne");
//const dataTitle = data.films[0];
//const titleMovie = dataTitle.title;
//nameMovie.innerHTML = '<li>'+ titleMovie + '</li>';

//console.log (titleMovie);

const addFilmOnMovies = function(film){
    const listMov = document.getElementById("peliculas");
    const img = document.createElement("img");
    img.setAttribute('src', film.poster);
    const li = document.createElement("li");
    const text = document.createTextNode(film.title);
    listMov.appendChild(li);
    li.appendChild(img);
    li.appendChild(text);
};
data.films.forEach(addFilmOnMovies);

console.log(data.films)
