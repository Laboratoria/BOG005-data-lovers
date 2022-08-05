import { anotherExample, example } from './data.js';

import data from './data/ghibli/ghibli.js';
anotherExample(data)

const addFilmOnMovies = function(film) {
    const listMovie = document.getElementById("peliculas");
    const article = document.createElement("article");
    const text = document.createTextNode(film.title);
    const img = document.createElement("img");
    img.setAttribute("src", film.poster);
    listMovie.appendChild(article);
    listMovie.appendChild(img);    
    article.appendChild(text);
   
};
data.films.forEach(addFilmOnMovies);

const filterAlfab = document.getElementById("filAlfa");
filterAlfab.addEventListener("click", orderAlfa);
function orderAlfa(eve){
    eve.preventDefault(eve);
    const infoNameMov = document.getElementById("peliculas");
    const infoData = data;
    return infoData;
};
console.log(orderAlfa);