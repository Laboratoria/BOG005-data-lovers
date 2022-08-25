// import { ordenarNombres, ordenarEdad } from "./data.js";
import {ordenarNombres} from './data.js';
import data from './data/athletes/athletes.js';
console.log(data);

const dataAtletas = data.athletes



let pintarData = (data) => {
    let plantilla = ""
    data.forEach((element) => {
        
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


//Boton Ordenar A-Z (BOTON)

// const buttonOrder = document.querySelector("#buttonOrder");
// buttonOrder.addEventListener("change", () => {
//     const valueOrder = buttonOrder.value;
//     pintarData(ordenarNombres(dataAtletas,valueOrder));
    
//  });


const OrdenarAz = document.getElementById("hero az")
OrdenarAz.addEventListener("click", () => {
    // const valueOrder = OrdenarAz.value;
    // pintarData(dataAtletas)
    pintarData(ordenarNombres(dataAtletas, OrdenarAz.value))
    // pintarData(ordenarNombres(dataAtletas));
    
})
// console.log((ordenarNombres(dataAtletas)))
console.log((ordenarNombres(dataAtletas).reverse()))
