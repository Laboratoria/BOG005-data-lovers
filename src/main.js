
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
console.log(data)


//crear opciones para seleccionar el país
function showOptionsSelect (){
  let team = [];
  let selectPais = document.getElementById("selectBusquedaPais");
    data.athletes.forEach(atleta =>{
      if(team.indexOf(atleta["team"]) == -1){
          team.push(atleta["team"]);
      }

});
  team.forEach(element => {
    let paises = document.createElement("option");
    paises.text = element;
    paises.value = element;
    selectPais.appendChild(paises);
  });
} showOptionsSelect();


function showAthletesByMedal() {
 let dataSearch = document.getElementById("txtAtleta").value;
 let firstMayus = dataSearch[0].toUpperCase()
 let otherLetters = dataSearch.slice(1)
 let typeMedal = firstMayus + otherLetters;
 
  table.innerHTML = "";
  let result = filterData(data, "medal", typeMedal );
  console.log(result);
  let encabezado = document.createElement("td");
  encabezado.style.textAlign = "center";
  encabezado.innerHTML = `Athletes who won  ${typeMedal + " medal "+" : "+ result.length}`;
  table.appendChild(encabezado);

    let flag = 0;
    let limit = 25;
    let contenedor;
    result.forEach((element) => {
      if(flag == limit){
        flag = 0;
      }
      if(flag == 0){
        contenedor = document.createElement("div");
        contenedor.setAttribute("name", "helloButton");
        contenedor.style.display = "inline-block";
        contenedor.style.margin = "10px";

      }
      let fila = document.createElement("div");
      let colum = document.createElement("td");
      colum.innerHTML = element.name;
      fila.appendChild(colum); 
      contenedor.appendChild(fila);
      table.appendChild(contenedor); 
      flag++;
    });
};

function showAthletesBySport(){

  let selectSport = document.getElementById("selectBusquedaDeporte").value;
  let resultSport= filterData(data, "sport", selectSport );
  console.log(resultSport)
  let flag = 0;
  let limit = 25;
  let contenedor;
  resultSport.forEach((element) => {
    if(flag == limit){
      flag = 0;
    }
    if(flag == 0){
      contenedor = document.createElement("div");
      contenedor.setAttribute("name", "helloButton");
      contenedor.style.display = "inline-block";
      contenedor.style.margin = "10px";

    }
    let fila = document.createElement("div");
    let colum = document.createElement("td");
    colum.innerHTML = element.name;
    fila.appendChild(colum); 
    contenedor.appendChild(fila);
    table.appendChild(contenedor); 
    flag++;
  });
}  


//SHOW OPTION DEPORTE
function showOptionsSelectSport(){
  let sport = [];
  let selectSport = document.getElementById("selectBusquedaDeporte");
    data.athletes.forEach(deporte =>{
      if(sport.indexOf(deporte["sport"]) == -1){
          sport.push(deporte["sport"]);
      }
});
  sport.forEach(element => {
    let sports = document.createElement("option");
    sports.text = element;
    sports.value = element;
    selectSport.appendChild(sports);
  });
};
showOptionsSelectSport ()


//CAMBIAR DE PANTALLA
let btn1= document.getElementById("btn1")
function shangePage() {

    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "inline";
}


let btnInicio = document.getElementById("btnInicio");
function backPage1(){
    document.getElementById("page1").style.display = "inline";
    document.getElementById("page2").style.display = "none";
}

btn1.addEventListener("click", shangePage);
btnInicio.addEventListener("click", backPage1)
document.getElementById("btnBuscar").addEventListener("click", showAthletesByMedal, showAthletesBySport )
;