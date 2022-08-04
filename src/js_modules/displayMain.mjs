// Funciones para crear y mostrar dinámicamente los elementos HTML de la página web

import ProcessData from "./allData.mjs";
// const htmlElements = {
// containerCharactersList: document.getElementById("container-characters-list-id"),

// createViewMainPage(nameCharacter) {
//   const characterContainer = document.createElement("figure");
//   characterContainer.setAttribute("class", "container-character-class")
//   const characterPicture = document.createElement("img");
//   characterPicture.src =  "https://imageshack.com/i/pnUFd2QWp";
//   characterPicture.setAttribute("class", "picture-character-class");
//   const characterName = document.createElement("figcaption");
//   characterName.setAttribute("class", "name-character-class")
//   characterName.textContent = nameCharacter;

//   characterContainer.insertAdjacentElement("beforeend", characterPicture);
//   characterContainer.insertAdjacentElement("beforeend", characterName);

//   this.containerCharactersList.appendChild(characterContainer);

// },


// }

class CreateContainersForCharactersList {
  constructor () {
    this.newNodeFigure = document.createElement("fig");
    this.newNodeImage= document.createElement("img");
    this.newNodeFigCaption = document.createElement("figcaption");
  }

  createCharacterContainer (seccion, srcImagen) {
    this.containerCharacters = document.getElementById(`container-characters-${seccion}-id`);

    this.newNodeFigure.setAttribute("class", `newNodeFigure-${seccion}-class`);
    this.newNodeImage.setAttribute("class", `newNodeImage-${seccion}-class`);
    this.newNodeImage.src = srcImagen;

    this.newNodeFigure.insertAdjacentElement("beforeend", this.newNodeImage);
    this.newNodeFigure.insertAdjacentElement("beforeend", this.newNodeFigCaption);
    this.containerCharacters.appendChild(this.newNodeFigure);



  }
}