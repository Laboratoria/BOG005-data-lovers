import { words } from './data.js'
import data from './data/pokemon/pokemon.js';

//funcion visualizar data en navegador//
let pokemon = Object.values(data.pokemon);

function visualizardata(datos) {
    for (let i = 0; i < pokemon.length; i++) {
        let namepokemon = pokemon[i].name;
        let imagenpokemon = pokemon[i].img;
        let contenedor = document.querySelector(".contenedor")
        let infopokemon = document.createElement("div");
        contenedor.appendChild(infopokemon)
        infopokemon.innerHTML =
            `
            <div class= "imagen"> 
            <img src = "${imagenpokemon}">
            
            </div>
        <p> ${namepokemon}</p>
        
        `
        
    }

    //console.log ( pokemon.data)
    console.log(words(pokemon))
}


window.addEventListener("load", visualizardata(pokemon))


//ESTO ES UN OBJETO  const data = {
//     pokemon:{
//         nombre:pikachu,
//         edad:"3 años"
//     },

// }

// function suma(a,b) {
//     return a+b
// }
//suma(3,4)

//[ ]gfgfd
