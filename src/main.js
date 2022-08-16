import data from "./data/harrypotter/data.js";

const allCharacters = data.characters.slice(0, 21);
const content = document.querySelector("#showCharacters");

function showAllCharacters() {
  allCharacters.forEach(
    (element, i) =>
    //Template string
    (content.insertAdjacentHTML("beforeend", `<section class="card">
    <ul><img class="wand"src="Img/icons8-harry.png" alt="Imagen generica para personajes">
    <br>
    <h3 class="name-characters">${element.name}</h3>
    <button data-id=${i} class="btn buttonShow"> Ver +
  </button></ul>
  </section>`))
    //Interpolacion de variables
  );
}
showAllCharacters();

const btnVer = document.querySelectorAll(".buttonShow")
const information = document.querySelector("#informationCharacters")
btnVer.forEach((button) => {
  button.addEventListener("click", (event) => {
    const i = event.target.dataset.id
    information.insertAdjacentHTML("beforeend",
  `<div class="information">
  <strong>Nombre:</strong> ${allCharacters[i].name ? allCharacters[i].name : "Sin información"}
  <br> <strong>Fecha de Nacimiento:</strong> ${allCharacters[i].birth ? allCharacters[i].birth : "Sin información"}
  <br> <strong>Casa de Hogwarts:</strong> ${allCharacters[i].house ? allCharacters[i].house : "Sin información"}
  <br> <strong>Tipo de Mago:</strong> ${allCharacters[i].species ? allCharacters[i].species : "Sin información"}
  </div>`)
  })
})


