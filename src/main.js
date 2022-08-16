
import data from './data/ghibli/ghibli.js';
import utilities from './data.js';

const films = data.films;
const listMovie = document.getElementById("peliculas");

function printMovies(movies) {
    // limpia contenerdor
    listMovie.innerHTML = "";

    // agrega peliculas
    movies.forEach(function (film) {
        const newLabel = document.createElement("li");
        newLabel.classList.add("card");
        const img = document.createElement("img");
        img.setAttribute("srcset", film.poster);
        img.classList.add("imgMovie");
        listMovie.appendChild(newLabel);
        newLabel.appendChild(img);
        newLabel.innerHTML += `Title: ${film.title} <br> Relase date: ${film.release_date} <br> Raiting: ${film.rt_score}`;
        // const card = document.createElement("li");
        // card.classList.add("cardBack");
        // const cardBack = document.createTextNode(film.description);
        // listMovie.appendChild(cardBack)

    });
}
printMovies(films);


const btnOrderAsc = document.getElementById("orderAsc");
btnOrderAsc.addEventListener("click", printOrderAsc);

function printOrderAsc() {
    const order = utilities.sortData(films, 'title', 'ascendente');
    printMovies(order);
}

const btnOrderDes = document.getElementById("orderDesc");
btnOrderDes.addEventListener("click", printOrderDes);

function printOrderDes() {
    const orderDesc = utilities.sortData(films, 'title', 'descendente');
    printMovies(orderDesc);
}


const btnOrderByScore = document.getElementById("orderByScore");
btnOrderByScore.addEventListener("click", printOrderByScore);

function printOrderByScore() {
    const orderScore = utilities.filterData(films);
    printMovies(orderScore);
}








