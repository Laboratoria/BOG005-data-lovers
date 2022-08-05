// displayMain.mjs - Create and display dynamically the HTML elements of the web page

class CreateContainersForCharactersSection {
  constructor () {
    this.newNodeFigure = document.createElement("fig");
    this.newNodeImage= document.createElement("img");
    this.newNodeFigCaption = document.createElement("figcaption");
  }

  createCharacterContainer (section, srcImage) {
    this.containerCharacters = document.getElementById(`container-characters-${section}-id`);

    // Setting up attributes to the nodes created
    this.newNodeFigure.setAttribute("class", `newNodeFigure-${section}-class`);
    this.newNodeImage.setAttribute("class", `newNodeImage-${section}-class`);
    this.newNodeFigCaption.setAttribute("class", `newNodeFigCaption-${section}-class`);
    this.newNodeImage.src = `${srcImage}`;
    // this.newNodeFigCaption.textContent = ;

    // Appending nodes to its parents
    this.newNodeFigure.insertAdjacentElement("beforeend", this.newNodeImage);
    this.newNodeFigure.insertAdjacentElement("beforeend", this.newNodeFigCaption);
    this.containerCharacters.appendChild(this.newNodeFigure);
  }
}

export default CreateContainersForCharactersSection;