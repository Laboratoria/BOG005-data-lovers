const htmlElements = {
containerCharactersList: document.getElementById("container-characters-list-id"),

createViewMainPage(nameCharacter) {
  const characterContainer = document.createElement("figure");
  characterContainer.setAttribute("class", "container-character-class")
  const characterPicture = document.createElement("img");
  characterPicture.src =  "https://imageshack.com/i/pnUFd2QWp";
  characterPicture.setAttribute("class", "picture-character-class");
  const characterName = document.createElement("figcaption");
  characterName.setAttribute("class", "name-character-class")
  characterName.textContent = nameCharacter;

  characterContainer.insertAdjacentElement("beforeend", characterPicture);
  characterContainer.insertAdjacentElement("beforeend", characterName);

  this.containerCharactersList.appendChild(characterContainer);

},



}

export default htmlElements;