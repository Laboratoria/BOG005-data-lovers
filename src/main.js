/*AQUI DEBEN ESTAR LAS INTERACCIONES CON EL DOM--- EVENT LISTENER ETC...*/
import ghibli from "./data/ghibli/ghibli.js";
const moviesData = ghibli.films;

let fullPosters = moviesData.map(posters => `${posters.poster}`);
let fullTitles = moviesData.map(movies => `${movies.title}`);
let fullDescriptions = moviesData.map(descriptions => `${descriptions.description}`);
let fullReleases = moviesData.map(releases => `${releases.release_date}`);
let fullDirectors = moviesData.map(directors => `${directors.director}` )
let fullProducers = moviesData.map (producers => `${producers.producer}`)
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
            <p class="directorAndProducer">Director: ${fullDirectors[i]} | Producer: ${fullProducers[i]}</p>
            <h5 class="releaseDate">${fullReleases[i]}</h5>
            <p class="filmDescription">${fullDescriptions[i]}
            </p>
            </div>
        </div>
    `;
    container.innerHTML += code;}}

    createCard();

// console.log(example);
