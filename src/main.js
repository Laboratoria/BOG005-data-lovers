import data from "./data/harrypotter/data.js";

const allCharacters = data.characters.slice(0, 20);
const content = document.querySelector("#showCharacters");

function showAllCharacters() {
  allCharacters.forEach(
    (element) =>
    //content.innerHTML+=element.name
    //Template string
    (content.innerHTML += `<section class="card">
    <li><img class="wand"src="Img/varita.png" alt="">
    <br>
    <h3>${element.name}</h3>
    <button id=${element.name} class="buttonShow"> Ver +
  </button></li>
  </section>`)
    //interpolacion de variables
  );
}
showAllCharacters();

const btnVer = document.querySelectorAll(".buttonShow")
const information = document.querySelector("#informationCharacters")
btnVer.forEach((button) => {
  button.addEventListener("click", (evento) => {
  //console.log(evento.target.id)

    (information.innerHTML += `<div class="information">
Nombre: ${button.name} \n
Fecha de Nacimiento: ${allCharacters[0].birth}
\n Casa de Hogwarts: ${allCharacters[0].house}
\n Tipo de Mago: ${allCharacters[0].species}
</div>`)
  })
})