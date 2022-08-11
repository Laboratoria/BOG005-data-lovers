import data from "./data/harrypotter/data.js";

const allCharacters = data.characters.slice(0, 20);
const content = document.querySelector("#showCharacters");

function showAllCharacters() {
  allCharacters.forEach(
    (element) =>
      //content.innerHTML+=element.name
      //Template string
      (content.innerHTML += `<section class="card">
    <li><img class="wand"src="Img/monophy.gif" alt="">
    <br>
    <h3>${element.name}</h3>
    <button id="showMore" class="buttonShow"> Ver +
  </button></li>
  </section>`)
    //interpolacion de variables
  );
}
showAllCharacters();

document
  .getElementById("showMore")
  .addEventListener("click", showCharactersInfo);
const information = document.querySelector("#btnCharacters");
function showCharactersInfo() {
  for (let i = 0; i < allCharacters.length; i++) {
    information.innerHTML += `<section class="information">
  Nombre: ${allCharacters[i].name} \n Fecha de Nacimiento: ${allCharacters[i].birth} \n Casa de Hogwarts: ${allCharacters[i].house} \n Tipo de Mago: ${allCharacters[i].species}
  </section>`;
  }
}
//for(const [key, value] of Object.entries(data.characters)){
//   console.log(value)
//}

/* const personajes = data.characters;
const imagenHarryPotter = document.getElementById("imagen_harry_potter");
const personajeSeleccionado = data.characters.filter(personaje => personaje.name === "Harry Potter");
console.log(personajeSeleccionado[0].name)
imagenHarryPotter.innerHTML += `<li>${personajeSeleccionado[0].name} - ${personajeSeleccionado[0].house} </li>`
data.characters.forEach(personaje => {
})

const result2 = data.characters.filter(personage => personage.name =='Ronald Weasley')
photoRonWeasley.innerHTML += `<li>${result2[0].name} - ${result2[0].house} </li>`

const result3 = data.characters.filter(personage => personage.name =='Albus Dumbledore')
photoAlbusDumbledore.innerHTML += `<li>${result3[0].name} - ${result3[0].house} </li>`


//const harrypotter = data.characters.find(harryPotter => harryPotter.name === "Harry Potter");
const ron = data.characters.find(ron => ron.name === "Ronald Weasley");
console.log (harrypotter, ron) */

/* document.getElementById("btnHarryPotter").addEventListener("click", showCharacters)
document.getElementById("btnHermioneGranger").addEventListener("click", showCharacters)
document.getElementById("btnRonaldWeasley").addEventListener("click", showCharacters)
document.getElementById("btnAlbusDumbledore").addEventListener("click", showCharacters)

function showCharacters(e) {
    const character = e.target.dataset.character
    const result = data.characters.filter(personage => personage.name == character)
    alert(`Nombre: ${result[0].name} \n Fecha de Nacimiento: ${result[0].birth} \n Casa de Hogwarts: ${result[0].house} \n Tipo de Mago: ${result[0].species} `)
} */
