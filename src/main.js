import { example } from './data.js';
import data from './data/harrypotter/data.js';

console.log(example, data.characters);

//const personajes = data.characters

//personajes.forEach(personaje => console.log(personaje))

//const harrypotter = data.characters.find(harryPotter => harryPotter.name === "Harry Potter");
//const ron = data.characters.find(ron => ron.name === "Ronald Weasley");
//console.log (harrypotter, ron)

for(const [key, value] of Object.entries(data.characters)){
    console.log(value)
}