import { objetAthletes } from "./data.js";
import data from "./data/athletes/athletes.js";

let cardsContainer = document.getElementById("cardsContainer");
let encabezadoFilter = document.getElementById("encabezado");
let resultAll = [];
let contenedor;
let calcular = 0;
let enlaceUp = document.getElementById("enlaceUp");
enlaceUp.style.visibility = "hidden";
let selectTeam = document.getElementById("selectSearchByTeam");
let selectSport = document.getElementById("selectSearchBySport");
let selectMedal = document.getElementById("selectSearchByMedal");
let parrafoDatoCurioso = document.getElementById("datocurioso");
let curiousSection = document.getElementById("curiousSection")
curiousSection.style.visibility="hidden"
parrafoDatoCurioso.style.visibility = "hidden";

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
    document.getElementById("contenedorTarjetas").style.visibility = "visible";
    encabezadoFilter.innerHTML=`  ${typeMedal}  medals  won  :  ${resultAll.length}`.toUpperCase
    ();
    encabezadoFilter.background="greenyellow"
    
    printCards(resultAll);
  }
}

function showAthletesBySport(e) {
  let selectSport = document.getElementById("selectSearchBySport").value;
  e.target.removeEventListener(e.type, showAthletesBySport);

  if (selectSport !== "") {
    resultAll = objetAthletes.filterData(data, "sport", selectSport);
    document.getElementById("contenedorTarjetas").style.visibility = "visible";
    encabezadoFilter.innerHTML=` Athletes of  ${selectSport}: ${resultAll.length}`.toUpperCase();
    printCards(resultAll);
  }
}

function showAthletesByTeam(e) {
  let selectTeam = document.getElementById("selectSearchByTeam").value;

  if (selectTeam !== "") {

    e.target.removeEventListener(e.type, showAthletesByTeam);
    resultAll = objetAthletes.filterData(data, "team", selectTeam);
    document.getElementById("contenedorTarjetas").style.visibility = "visible";
    encabezadoFilter.innerHTML= ` Winners Athletes from ${selectTeam} : ${resultAll.length}`.toUpperCase();
    printCards(resultAll);
  }
}

//PINTAR LAS CARD
document.getElementById("contenedorTarjetas").style.visibility = "hidden";

function printCards(result) {
  enlaceUp.style.visibility = "visible";
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
      contenedor.style.justifyContent= "center"
      contenedor.style.marginLeft = "2vw";
      
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
      enlaceUp.style.visibility = "visible";
      encabezadoFilter.innerHTML = "";
      colum.innerHTML = `Name: ${element.name}`;
      colum1.innerHTML = `From: ${element.team}`;
      colum2.innerHTML = `Sport: ${element.sport}`;
      contenedor.setAttribute("class", "cardsCalcular");
      contenedor.style.marginBottom = "10vw";


      let title = document.createElement("div");
      title.style.textAlign = "center";
      // title.style.width = "90vw";
      title.innerHTML = ` WINNERS TOP 3 `.toUpperCase();
      title.style.background="greenyellow"
      title.style.marginTop="1vw"


      encabezadoFilter.appendChild(title);
      

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
      colum3.innerHTML = `Event: ${element.event}`;

      contenedor.appendChild(fila);
      cardsContainer.appendChild(contenedor);
    }
  });
}

let selectOption = document.getElementById("selectOrder");

//ORDER
function order() {
  document.getElementById("notacuriosaImg").style.visibility="visible";
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


//CALCULAR
function calcularMaxWinner() {
  document.getElementById("notacuriosaImg").style.visibility="hidden";
  document.querySelector("#selectOrder").style.display = "none";
  document.querySelector("#maxWinner").style.display = "none";
  let dataAZ = objetAthletes.orderData(resultAll);
  document.getElementById("cardsContainer").innerHTML = "";
  calcular = objetAthletes.calcularData(dataAZ);
  console.log(calcular);
  calcular.splice(3);
  printCards(calcular);
  enlaceUp.style.visibility = "hidden";
  document.getElementById("datocurioso").innerHTML=""
  curiousSection.style.visibility="hidden"



}
//FUNCION PORCENTAJE
let notaCuriosaButton = document.querySelector("#notacuriosaImg");
notaCuriosaButton.addEventListener("click", porcentaje);

function porcentaje() {
  parrafoDatoCurioso.style.visibility = "visible";
 
  let dataCalcular = resultAll.length;
  console.log(dataCalcular);
  let dataHombre = objetAthletes.filterData(resultAll, "gender", "M");
  let totalHombre = dataHombre.length;
  console.log(totalHombre);
  let porcentajeHombre = objetAthletes.porcentaje(dataCalcular, totalHombre);
  console.log(porcentajeHombre);
  let dataMujer = objetAthletes.filterData(resultAll, "gender", "F");
  let totalMujer = dataMujer.length;
  let porcentajeMujer = objetAthletes.porcentaje(dataCalcular, totalMujer);
  console.log(porcentajeMujer);
  parrafoDatoCurioso.innerHTML = ` ${totalMujer}% Are Women, ${totalHombre}% Are Men`;

}


//desabilitar y abilitar selects
function apagarSelect1() {
  if (selectTeam.value !== "") {
    selectMedal.disabled = true;
    selectSport.disabled = true;
  } else {
    selectMedal.disabled = false;
    selectSport.disabled = false;
  }
}

function apagarSelect2() {
  if (selectSport.value !== "") {
    selectTeam.disabled = true;
    selectMedal.disabled = true;
  } else {
    selectMedal.disabled = false;
    selectTeam.disabled = false;
  }
}
function apagarSelect3() {
  if (selectMedal.value !== "") {
    selectTeam.disabled = true;
    selectSport.disabled = true;
  } else {
    selectTeam.disabled = false;
    selectSport.disabled = false;
  }
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
let buttonSearch = document.getElementById("btnBuscar");
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
  enlaceUp.style.visibility = "hidden";
  selectMedal.disabled = false;
  selectSport.disabled = false;
  selectTeam.disabled = false;
  document.getElementById("datocurioso").innerHTML=""
  document.getElementById("selectOrder").value="order"
  notaCuriosaButton.style.visibility="hidden"
  
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

selectOption.addEventListener("change", order);
selectTeam.addEventListener("change", apagarSelect1);
selectSport.addEventListener("change", apagarSelect2);
selectMedal.addEventListener("change", apagarSelect3);
