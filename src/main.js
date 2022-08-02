import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

const nameMovie = document.getElementById("moveOne");
const dataTitle = data.films[0];
const titleMovie = dataTitle.title;
nameMovie.innerHTML = '<li>'+ titleMovie + '</li>';

console.log (titleMovie);

