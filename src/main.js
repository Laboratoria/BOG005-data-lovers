// import { example } from './data.js';

import ghibli from "./data/ghibli/ghibli.js"

const moviesData = ghibli.films;
console.log(moviesData)

// Trayendo todos los elementos

let fullPosters = moviesData.map(posters => `${posters.poster}`);
console.log(fullPosters);

let fullTitles = moviesData.map(movies => `${movies.title}`);
console.log(fullTitles);

let fullDescriptions = moviesData.map(descriptions => `${descriptions.description}`);
console.log(fullDescriptions);

let fullReleases = moviesData.map(releases => `${releases.release_date}`);
console.log(fullReleases);

let container = document.querySelector(".cardContainer");

function createCard(){       
    for (let i = 0; i < moviesData.length; i ++) {
    let code = `
    <div class="card">
          <img
            src="${fullPosters[i]}"
            alt=""
          />
          <div class="cardText">
            <h2 class="filmTitle">${fullTitles[i]}</h2>
            <p class="filmDescription">${fullDescriptions[i]}
            </p>
            <h5 class="releaseDate">${fullReleases[i]}</h5>
          </div>
        </div>
    `;
    container.innerHTML += code;}};

    createCard();

// console.log(example);
