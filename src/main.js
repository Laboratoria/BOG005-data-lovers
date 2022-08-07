
import data from './data/ghibli/ghibli.js';
import utilities from './data.js';

const films = data.films;
const listMovie = document.getElementById("peliculas");

function printMovies (movies){
    // limpia contenerdor
    listMovie.innerHTML = "";

    // agrega peliculas
    movies.forEach(function(film) {
        const li = document.createElement("li");
        const text = document.createTextNode(film.title);
        const img = document.createElement("img");
        img.setAttribute("srcset", film.poster);
        listMovie.appendChild(li);
        listMovie.appendChild(img);
        li.appendChild(text);
    });
}
printMovies(films);


const btnOrderAsc = document.getElementById("orderAsc");
btnOrderAsc.addEventListener("click", printOrderAsc);

function printOrderAsc(){
    const order = utilities.orderByTitleAsc(films);
    printMovies(order);;
};


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
