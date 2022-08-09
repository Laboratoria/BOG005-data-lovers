import { example } from './data.js';
import data from './data/harrypotter/data.js';

console.log(example, data.characters);

const personajes = data.characters;
const imagenHarryPotter = document.getElementById("imagen_harry_potter");
const personajeSeleccionado = data.characters.filter(personaje => personaje.name === "Harry Potter");
console.log(personajeSeleccionado[0].name) 
imagenHarryPotter.innerHTML += `<li>${personajeSeleccionado[0].name} - ${personajeSeleccionado[0].house} </li>` 

data.characters.forEach(personaje => {
    
})

//personajes.forEach(personaje => console.log(personaje))

//const harrypotter = data.characters.find(harryPotter => harryPotter.name === "Harry Potter");
const ron = data.characters.find(ron => ron.name === "Ronald Weasley");
console.log (harrypotter, ron)

f//or(const [key, value] of Object.entries(data.characters)){
 //   console.log(value)
//}

