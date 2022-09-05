import { objetAthletes } from "./data.js";
import data from "./data/athletes/athletes.js";

let cardsContainer = document.getElementById("cardsContainer");
let encabezadoFilter = document.getElementById("encabezado");
let resultAll = [];
let contenedor;
let calcular=0;


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
    sports.setAttribute("class", "optionsSelect");
  });
}
showOptionsSelectSport();

// filtrar atletas por medallas
function showAthletesByMedal(e) {
  let dataSearch = document.getElementById("selectSearchByMedal").value;
  e.target.removeEventListener(e.type, showAthletesByMedal);
  if (dataSearch !== "") {
    let firstMayus = dataSearch[0].toUpperCase();
    let otherLetters = dataSearch.slice(1).toLowerCase();
    let typeMedal = firstMayus + otherLetters;

    resultAll = objetAthletes.filterData(data, "medal", typeMedal);
    // console.log(resultAll);
    document.getElementById("contenedorTarjetas").style.visibility = "visible";
    // console.log(result);
    let encabezado = document.createElement("div");
    encabezado.style.textAlign = "center";
    encabezado.innerHTML =
      ` ${typeMedal}  medals  won  :  ${resultAll.length}`.toUpperCase();
    encabezadoFilter.appendChild(encabezado);
    encabezado.setAttribute("class", "encabezado");
    printCards(resultAll);
  }
}

function showAthletesBySport(e) {
  let selectSport = document.getElementById("selectSearchBySport").value;
  e.target.removeEventListener(e.type, showAthletesBySport);

  // console.log(resultSport);
  if (selectSport !== "") {
    resultAll = objetAthletes.filterData(data, "sport", selectSport);
    document.getElementById("contenedorTarjetas").style.visibility = "visible";
    let cabezera = document.createElement("td");
    cabezera.style.textAlign = "center";
    cabezera.style.width = "90vw";
    cabezera.innerHTML =
      `Athletes of  ${selectSport}: ${resultAll.length}`.toUpperCase();
    encabezadoFilter.appendChild(cabezera);
    // console.log(resultAll)
    printCards(resultAll);
  }
}

function showAthletesByTeam(e) {
  let selectTeam = document.getElementById("selectSearchByTeam").value;

  if (selectTeam !== "") {
    e.target.removeEventListener(e.type, showAthletesByTeam);
    resultAll = objetAthletes.filterData(data, "team", selectTeam);
    document.getElementById("contenedorTarjetas").style.visibility = "visible";
    let title = document.createElement("div");
    title.style.textAlign = "center";
    title.style.width = "90vw";
    title.innerHTML =
      `Winners Athletes from ${selectTeam} : ${resultAll.length}`.toUpperCase();
    encabezadoFilter.appendChild(title);
    printCards(resultAll);
  }
}

//PINTAR LAS CARD
document.getElementById("contenedorTarjetas").style.visibility = "hidden";

function printCards(result) {

  console.log(result);
  let flag = 0;
  let limit = 1;
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
    flag++;
    let fila = document.createElement("div");
    fila.setAttribute("class", "fila");
    let colum = document.createElement("tr");
    let colum1 = document.createElement("tr");
    let colum2 = document.createElement("tr");
    let colum3 = document.createElement("tr");

    fila.appendChild(colum);
    fila.appendChild(colum1);
    fila.appendChild(colum2);
    fila.appendChild(colum3);

    if (calcular !== 0) {
      
      encabezadoFilter.innerHTML = "";
      colum.innerHTML = `Name: ${element.name}`;
      colum1.innerHTML = `From: ${element.team}`;
      colum2.innerHTML = `Sport: ${element.sport}`;
      contenedor.setAttribute("class", "cardsCalcular");

      let title = document.createElement("div");
      title.style.textAlign = "center";
      title.style.width = "90vw";
      title.innerHTML = ` WINNERS TOP 3 `.toUpperCase();
      encabezadoFilter.appendChild(title);
      encabezadoFilter.style.background = "transparent";

      if (element.Gold !== 0 && element.Silver !== 0) {
        colum3.innerHTML = `Total Medals:  ${element.Gold} Gold,  ${element.Silver} Silver`;
        contenedor.style.background = "goldenrod";
      }
      if (element.Gold !== 0 && element.Bronze !== 0) {
        colum3.innerHTML = `Total Medals: ${element.Gold}  Gold,  ${element.Bronze} Bronze`;
        contenedor.style.background = "goldenrod";
      }
      if (element.Silver !== 0 && element.Bronze !== 0) {
        colum3.innerHTML = `Total Medals: ${element.Silver} Silver,  ${element.Bronze} Bronze`;
        contenedor.style.background = "dimgray";
      }
      if (element.Gold !== 0 && element.Silver !== 0 && element.Bronze !== 0) {
        colum3.innerHTML = `Total Medals:  ${element.Gold} Gold,  ${element.Silver} Silver,  ${element.Bronze} Bronze`;
        contenedor.style.background = "goldenrod";
      }
      if (element.Gold !== 0 && element.Silver == 0 && element.Bronze == 0) {
        contenedor.style.background = "goldenrod";
        colum3.innerHTML = `Total Medals:  ${element.Gold} Gold`;
      }
      if (element.Silver !== 0 && element.Gold == 0 && element.Bronze == 0) {
        contenedor.style.background = "dimgray";
        colum3.innerHTML = `Total Medals:  ${element.Silver} Gold`;
      }
      if (element.Bronze !== 0 && element.Gold == 0 && element.Silver == 0) {
        contenedor.style.background = "indianred";
        colum3.innerHTML = `Total Medals:  ${element.Bronze} Bronze`;
      }
      contenedor.appendChild(fila);
      cardsContainer.appendChild(contenedor);
    } else {
      colum.innerHTML = `Name: ${element.name}`;
      colum1.innerHTML = `From: ${element.team}`;
      colum2.innerHTML = `Sport: ${element.sport}`;
      colum3.innerHTML = `Commitee: ${element.noc}`;

      contenedor.appendChild(fila);
      cardsContainer.appendChild(contenedor);
    }
  });
}

let selectOption = document.getElementById("selectOrder");

//ORDER
function order() {
  // console.log("selectOption: ", selectOption.value);
  document.getElementById("cardsContainer").innerHTML = "";
  if (selectOption.value == "a-z") {
    let dataAZ = objetAthletes.orderData(resultAll);
    // console.log("a-z: ", dataAZ);
    printCards(dataAZ);
  } else {
    let dataZA = objetAthletes.orderData(resultAll).reverse();
    // console.log("z-a: ", dataZA);
    printCards(dataZA);
  }
}
selectOption.addEventListener("change", order);

//CALCULAR
function calcularMaxWinner() {
  document.querySelector("#selectOrder").style.display = "none";
  document.querySelector("#maxWinner").style.display = "none";
  let dataAZ = objetAthletes.orderData(resultAll);
  document.getElementById("cardsContainer").innerHTML = "";
  calcular = objetAthletes.calcularData(dataAZ);
  console.log(calcular);
  calcular.splice(3);
  printCards(calcular);
}



//CAMBIAR DE PANTALLA
document.getElementById("page2").style.display = "none";
let btn1 = document.getElementById("btn1");
function shangePage() {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "inline";
}

//REFRESH SEARCH
let buttonRefresh = document.getElementById("btnLimpiar");
let buttonSearch = document.getElementById("btnBuscar")
function refresh() {
  document.getElementById("selectSearchByMedal").value = "";
  document.getElementById("selectSearchBySport").value = "";
  document.getElementById("selectSearchByTeam").value = "";
  buttonSearch.addEventListener("click", showAthletesByTeam);
  buttonSearch.addEventListener("click", showAthletesByMedal);
  buttonSearch.addEventListener("click", showAthletesBySport);
  document.getElementById("contenedorTarjetas").style.visibility = "hidden";
  encabezadoFilter.innerHTML = "";
  document.getElementById("cardsContainer").innerHTML = "";
  calcular = 0;
  document.querySelector("#selectOrder").style.display = "inline";
  document.querySelector("#maxWinner").style.display = "inline";
}

btn1.addEventListener("click", shangePage);
buttonRefresh.addEventListener("click", refresh);
document
  .getElementById("btnBuscar")
  .addEventListener("click", showAthletesByTeam);
document
  .getElementById("btnBuscar")
  .addEventListener("click", showAthletesByMedal);
document
  .getElementById("btnBuscar")
  .addEventListener("click", showAthletesBySport);
document
  .getElementById("maxWinner")
  .addEventListener("click", calcularMaxWinner);






