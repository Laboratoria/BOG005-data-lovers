// import { ordenarNombres, ordenarEdad } from "./data.js";

import data from './data/athletes/athletes.js';
console.log(data);
const dataAtletas = data.athletes


//mostrar en consola solo los nombres de los atletas.
// const mostrarInfo = mostrarData(data);
// console.log(ordenarNombres(mostrarInfo));

//mostrar las edades los atletas y ordenarlos de menor a mayor en consola
// const mostrarAge = mostrarEdad(data);
// console.log(ordenarEdad(mostrarAge));

const pintarData = (data) => {
    let plantilla = ""
    data.forEach((element) => {
        console.log(element)
        plantilla += `<h1>Nombre: ${element.name}</h1>
                      <h1>Género: ${element.gender}</h1>
        `
    })
    document.getElementById("Olimpics-Games").innerHTML = plantilla;
}



pintarData(dataAtletas)

// /cuando le de click a ordenar se debe pintar la data ordenada
// cuando se de click a filtrar se debe pintar la data filtrada

//ordenar por edad ascendente y por orden alfabetico dentro del mismo rango de edad

// const mostrarAtletas = dataAtletas(data);
// console.log(mostrarAtletas);

// mostrarAtletas.sort((a, b) => {
//     if (a.age > b.age) {
//         return 1;
//     }
//     if (a.age < b.age) {
//         return -1;
//     }
//     if (a.name.toLowerCase() > b.name.toLowerCase()) {
//         return 1;
//     }
//     if (a.name.toLowerCase() < b.name.toLowerCase()) {
//         return -1;
//     }
//     return 0;
// })
// console.log(mostrarAtletas);

