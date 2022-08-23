// import { ordenarNombres, ordenarEdad } from "./data.js";

import data from './data/athletes/athletes.js';
console.log(data);
const dataAtletas = data.athletes


const pintarData = (data) => {
    let plantilla = ""
    data.forEach((element) => {
        console.log(element)
        plantilla += `
                    <tr>
                    <th>${element.name}</th>
                    <td>${element.age}</td>
                    <td>${element.gender}</td>
                    <td>${element.sport}</td>
                    <td>${element.medal}</td>
                    </tr>
                     `
    })
    document.getElementById("contenido").innerHTML = plantilla;
}

pintarData(dataAtletas)

// const buttonOrder = document.querySelector("#buttonOrder");
// buttonOrder.addEventListener("change", () => {
//     const valueOrder = buttonOrder.value;
//     dataAtletas.innerHTML = "";
//     showData(ordenarNombres(data,valueOrder));

// });

// import ordenarNombres from './data/athletes/ordenarNombres.js';
// const showData = (parametro) => {
//     let show = "";
//     parametro.forEach((element) => {
//         const atletas = `
//             <div class="atleta" data-name="${element.name} name="athletes"></div> 
//             `;
//             show += atletas;
//     });
//     ordenarNombres.innerHTML = show;
// }