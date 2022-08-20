
import data from './data/ghibli/ghibli.js';
import utilities from './data.js';

const films = data.films;
const listMovie = document.getElementById("peliculas");
const cardDirectors = document.getElementById("directores");


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
        newLabel.innerHTML += `<h3>${film.title}</h3> Director: ${film.director} <br> Relase date: ${film.release_date} <br> Raiting: ${film.rt_score}`;
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


// const btnCuriousFact = document.getElementById("cuantity");
// btnCuriousFact.addEventListener("click", printCuriousData);

// function printCuriousData() {
//     const orderCurious = utilities.curiousData(films);
    
// }

const btnDirectors = document.getElementById("cuantity");
btnDirectors.addEventListener("click", printDirectors);

    function printDirectors() {
        const directors = utilities.curiousData(films);

        cardDirectors.innerHTML = 

      directors.forEach(function (director) {
        
            const labelDir = document.createElement("li");
            labelDir.classList.add("cardTwo");
            cardDirectors.appendChild(labelDir);
            labelDir.innerHTML += `<h3> Director:${director.name}</h3>`;
        });
    }

    
    // function printDirectors(directors) {
        
    // }