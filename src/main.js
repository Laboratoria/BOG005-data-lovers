import { filterData } from "./data.js";
import athletes from "./data/athletes/athletes.js";
// import data from './data/lol/lol.js';
import data from "./data/athletes/athletes.js";
// import data from './data/rickandmorty/rickandmorty.js';

let buttonRefresh = document.getElementById("btnLimpiar");
document.getElementById("contenedorTarjetas").style.visibility = "hidden";
document.getElementById("page2").style.display = "none";
document.getElementById("order").style.display = "none";



let table = document.getElementById("contenedorTarjetas");

document.getElementById("contenedorTarjetas").style.visibility = "visible";
console.log(data);

//crear opciones para seleccionar el país
function showOptionsSelect() {
  let team = [];
  let selectPais = document.getElementById("selectSearchByTeam");
  data.athletes.forEach((atleta) => {
    if (team.indexOf(atleta["team"]) == -1) {
      team.push(atleta["team"]);
    }
  });
  team.forEach((element) => {
    let paises = document.createElement("option");
    paises.text = element;
    paises.value = element;
    selectPais.appendChild(paises);
  });
}
showOptionsSelect();

//crear opciones para seleccionar el deporte
function showOptionsSelectSport() {
  let sport = [];
  let selectSport = document.getElementById("selectSearchBySport");
  data.athletes.forEach((deporte) => {
    if (sport.indexOf(deporte["sport"]) == -1) {
      sport.push(deporte["sport"]);
    }
  });
  sport.forEach((element) => {
    let sports = document.createElement("option");
    sports.text = element;
    sports.value = element;
    selectSport.appendChild(sports);
    sports.setAttribute("class", "optionsSelect")
  });
};
showOptionsSelectSport();

function showAthletesByMedal(e) {
  e.target.removeEventListener(e.type, showAthletesByMedal);
  let dataSearch = document.getElementById("selectSearchByMedal").value;

  let firstMayus = dataSearch[0].toUpperCase();
  let otherLetters = dataSearch.slice(1);
  let typeMedal = firstMayus + otherLetters;
  //table.innerHTML = "";

  let result = filterData(data, "medal", typeMedal);
  console.log(result);

  let encabezado = document.createElement("div");
  encabezado.style.textAlign = "center";
  encabezado.innerHTML = ` ${
    typeMedal + " medal" + "s" + " won" + " : " + result.length
  }`.toUpperCase();
  table.appendChild(encabezado);
  encabezado.setAttribute("class", "encabezado")
  
  let flag = 0;
  let limit = 1;
  let contenedor;
  result.forEach((element) => {
    if (flag == limit) {
      flag = 0;
    }
    if (flag == 0) {
      contenedor = document.createElement("div");
      contenedor.setAttribute("class", "namesList");
      contenedor.style.display = "inline-block";
      contenedor.style.margin = "3vw";

      //contenedor.style.textAlign="center"
    }
    let fila = document.createElement("div");
    fila.setAttribute("class", "fila");
    let colum = document.createElement("tr");
    let colum1 = document.createElement("tr");
    let colum2 = document.createElement("tr");

    colum.innerHTML = `Name: ${element.name}`;
    colum1.innerHTML = `From: ${element.team}`;
    colum2.innerHTML = `Event: ${element.event}`;

    fila.appendChild(colum);
    fila.appendChild(colum1);
    fila.appendChild(colum2);

    contenedor.appendChild(fila);
    contenedor.appendChild(fila);
    contenedor.appendChild(fila);
    table.appendChild(contenedor);

    flag++;
  });
};

function showAthletesBySport(e) {
  e.target.removeEventListener(e.type, showAthletesBySport);
  let selectSport = document.getElementById("selectSearchBySport").value;

  let resultSport = filterData(data, "sport", selectSport);
  if (selectSport !== "") {
    let cabezera = document.createElement("td");
    cabezera.style.textAlign = "center";
    cabezera.style.width = "90vw";
    cabezera.innerHTML = `Athletes of  ${
      selectSport + "" + ":" + resultSport.length
    }`.toUpperCase();
    table.appendChild(cabezera);

    let orderAlphabetic = document.createElement("select");



  }

  console.log(resultSport);
  let flag = 0;
  let limit = 1;
  let contenedor;
  resultSport.forEach((element) => {
    if (flag == limit) {
      flag = 0;
    }
    if (flag == 0) {
      contenedor = document.createElement("div");
      contenedor.setAttribute("class", "namesList");
      contenedor.style.display = "inline-block";
      contenedor.style.margin = "3vw";
    }
    let fila = document.createElement("div");
    let colum = document.createElement("tr");
    fila.setAttribute("class", "fila");
    let colum1 = document.createElement("tr");
    let colum2 = document.createElement("tr");
    let colum3 = document.createElement("tr");

    colum.innerHTML = `Name: ${element.name}`;
    colum1.innerHTML = `From: ${element.team}`;
    colum2.innerHTML = `Event: ${element.event}`;
    colum3.innerHTML = `Medal: ${element.medal}`;

    fila.appendChild(colum);
    fila.appendChild(colum1);
    fila.appendChild(colum2);
    fila.appendChild(colum3);

    contenedor.appendChild(fila);
    contenedor.appendChild(fila);
    contenedor.appendChild(fila);
    table.appendChild(contenedor);

    flag++;
  });
};

function showAthletesByTeam(e) {
  e.target.removeEventListener(e.type, showAthletesByTeam);
  let selectTeam = document.getElementById("selectSearchByTeam").value;
  let resultTeam = filterData(data, "team", selectTeam);
  if (selectTeam !== "") {
    let title = document.createElement("div");
    title.style.textAlign = "center";
    title.style.width = "90vw";
    title.innerHTML = `Winners Athletes from ${
      selectTeam + ":" + " " + resultTeam.length
    }`.toUpperCase();
    table.appendChild(title);
    
  }



  console.log(resultTeam);
  let flag = 0;
  let limit = 1;
  let contenedor;
  resultTeam.forEach((element) => {
    if (flag == limit) {
      flag = 0;
    }
    if (flag == 0) {
      contenedor = document.createElement("div");
      contenedor.setAttribute("class", "namesList");
      contenedor.style.display = "inline-block";
      contenedor.style.margin = "3vw";

    }

    let fila = document.createElement("div");
    fila.setAttribute("class", "fila");
    let colum = document.createElement("td");
    
    let colum1 = document.createElement("tr");
    let colum2 = document.createElement("tr");
    let colum3 = document.createElement("tr");
    colum.innerHTML = `Name: ${element.name}`;
    colum1.innerHTML = `Sport: ${element.sport}`;
    colum2.innerHTML = `Event: ${element.event}`;
    colum3.innerHTML = `Medal: ${element.medal}`;

    fila.appendChild(colum);
    fila.appendChild(colum1);
    fila.appendChild(colum2);
    fila.appendChild(colum3);
    contenedor.appendChild(fila);
    table.appendChild(contenedor);
    flag++;
  });
};

// function filterOptions(){
//   let filterAll = [];
//   if (document.getElementById("selectSearchByTeam").value != "" ||
//   document.getElementById("selectSearchBySport").value != "" ||
//   document.getElementById("selectSearchBySport").value != "" ) {
//   } else {
//   }
// }

//CAMBIAR DE PANTALLA
let btn1 = document.getElementById("btn1");
function shangePage() {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "inline";
}

let btnInicio = document.getElementById("btnInicio");
function backPage1() {
  document.getElementById("page1").style.display = "inline";
  document.getElementById("page2").style.display = "none";
}

//REFRESH SEARCH

function refresh() {
  document.getElementById("selectSearchByMedal").value = "";
  document.getElementById("selectSearchBySport").value = "";
  document.getElementById("selectSearchByTeam").value = "";
  document.getElementById("contenedorTarjetas").innerHTML = "";
  document.getElementById("btnBuscar").addEventListener("click", showAthletesByMedal);
  document.getElementById("btnBuscar").addEventListener("click", showAthletesBySport);
  document.getElementById("btnBuscar").addEventListener("click", showAthletesByTeam);
};
buttonRefresh.addEventListener("click", refresh);
document.getElementById("btnBuscar").addEventListener("click", showAthletesByTeam);
btn1.addEventListener("click", shangePage);
btnInicio.addEventListener("click", backPage1);
document.getElementById("btnBuscar").addEventListener("click", showAthletesByMedal);

document.getElementById("btnBuscar").addEventListener("click", showAthletesBySport);


