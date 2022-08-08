// displayMain.mjs - Create and display dynamically the HTML elements of the web page

class CreateContainersForCharactersSection {
  constructor () {
    this.newNodeFigure;
    this.newNodeImage;
    this.newNodeFigCaption;
    this.allFigure = []
  }

  createCharacterContainer (data,srcImage,section) {
   this.containerCharacters = document.getElementById(`container-characters-${section}-id`);
    // Filling containers with data information
    data.forEach(element => {
    // Creating nodes
    this.newNodeFigure = document.createElement("figure");
    this.newNodeImage= document.createElement("img");
    this.newNodeFigCaption = document.createElement("figcaption");

    // Setting up attributes to the nodes created
    this.newNodeFigure.setAttribute("class", `newNodeFigure-${section}-class`);
    this.newNodeImage.setAttribute("data-img", `${element.name}`)
    this.newNodeImage.setAttribute("class", `newNodeImage-${section}-class`);
    this.newNodeFigCaption.setAttribute("data-figcaption", `${element.name}`);
    this.newNodeFigCaption.setAttribute("class", `newNodeFigCaption-${section}-class`);
    this.newNodeFigCaption.textContent = element.name;
    this.newNodeImage.src = srcImage;
    

    // Appending nodes to its parents
    this.newNodeFigure.insertAdjacentElement("beforeend", this.newNodeImage);
    this.newNodeFigure.insertAdjacentElement("beforeend", this.newNodeFigCaption);
   //this.containerCharacters.appendChild(this.newNodeFigure);

     this.allFigure.push(this.newNodeFigure)
    //return this.allFigure
   });
//agrega los figure en el DOM sin modificarlo por cada iteración
   this.containerCharacters.append(...this.allFigure)

  }

 
}
//si le doy click a un elemento debe salir una card con el detalle de los objetos
export default CreateContainersForCharactersSection;




