
import data from './data/ghibli/ghibli.js';
import utilities from './data.js';

const films = data.films;
const listMovie = document.getElementById("peliculas");

function printMovies(movies) {
    // limpia contenerdor
    listMovie.innerHTML = "";

    // agrega peliculas
    movies.forEach(function(film) {
        const newLabel = document.createElement("li");
        newLabel.classList.add("card");
        const text = document.createTextNode(film.title);
        const img = document.createElement("img");
        img.classList.add("imgMovie");
        img.setAttribute("srcset", film.poster);
        const dateMov = document.createTextNode(film.release_date);
        listMovie.appendChild(newLabel);
        newLabel.appendChild(img);
        newLabel.appendChild(text);
        newLabel.appendChild(dateMov);
    });
}
printMovies(films);


const btnOrderAsc = document.getElementById("orderAsc");
btnOrderAsc.addEventListener("click", printOrderAsc);

function printOrderAsc(){
    const order = utilities.sortData(films, 'title', 'ascendente');
    printMovies(order);;
};

const btnOrderDes = document.getElementById("orderDesc");
btnOrderDes.addEventListener("click", printOrderDes);

function printOrderDes(){
    const orderDesc = utilities.sortData(films, 'title', 'descendente');
    printMovies(orderDesc);
};


const btnOrderByScore = document.getElementById("orderByScore");
btnOrderByScore.addEventListener("click", printOrderByScore);

function printOrderByScore(){
    const orderScore = utilities.sortData(films, 'rt_score', 'descendente');
    printMovies(orderScore);
};








