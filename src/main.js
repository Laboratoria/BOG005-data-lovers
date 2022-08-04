import { filterData } from "./data.js";
import athletes from "./data/athletes/athletes.js";
// import data from './data/lol/lol.js';
import data from "./data/athletes/athletes.js";
// import data from './data/rickandmorty/rickandmorty.js';

let button = document.getElementById("buttonSearch");
document.getElementById("contenedorTarjetas").style.visibility = "hidden";
document.getElementById("page2").style.display= "none";


let table = document.getElementById("contenedorTarjetas");
document.getElementById("contenedorTarjetas").style.visibility = "visible";


function showSport() {
 let dataSearch = document.getElementById("txtAtleta").value;

  table.innerHTML = "";

  let result = filterData(data, "sport", dataSearch);
  console.log(result);
  let encabezado = document.createElement("td");
  encabezado.style.textAlign = "center";
  encabezado.innerHTML = `ATLETAS EN ${dataSearch + " " + result.length}`;
  table.appendChild(encabezado);

  result.forEach((element) => {
    let fila = document.createElement("tr"); //se crea la fial
    fila.innerHTML = element.name; //se le agrega el contenido a la fila(nombre atletas)
    table.appendChild(fila); //se inserta la fila en la tabla
   
  });

}

document.getElementById("btnBuscar").addEventListener("click", showSport)


//CAMBIAR DE PANTALLA
let btn1= document.getElementById("btn1")
function shangePage() {

    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "inline";
}
btn1.addEventListener("click", shangePage);


let btnInicio = document.getElementById("btnInicio");
function backPage1(){
    document.getElementById("page1").style.display = "inline";
    document.getElementById("page2").style.display = "none";
}
btnInicio.addEventListener("click", backPage1)