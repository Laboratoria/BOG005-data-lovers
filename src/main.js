import athletes from "./data/athletes/athletes.js";
import data from "./data/athletes/athletes.js";

//const names = document.getElementById("name").value;
const names = athletes["name"];
console.log(athletes.athletes);

makeCard(athletes.athletes);

function makeCard(information) {
  let container = document.querySelector(".containerCard");
  container.innerHTML = console.log(information);
}
//const sports = document.getElementById("sport").value;
//const countrys = document.getElementById("team").value;
//const medals = document.getElementById("medal").value;
//const countryMedals = document.getElementById("medal", "team");
//console.log(names);

///let dataCard = [{ names, countrys, medals, sports }];
//let cartas = "";
//dataCard.forEach((elem) => {
//let card = `<h1>${elem.names}</h1>
//          <p>${elem.sports}</p>
//        <p>${elem.countrys}</p>
//      <p>${elem.medals}</p>`;
// cartas += card;
//});
