import {showImage, showName} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

let dataRyM = data;
let showImages = showImage(dataRyM);
let showNames = showName(dataRyM);
let addImage, addName;

for (let i=0; i < showImages.length; i++ ){
    //let showLinks = document.getElementById("character"); no es necesario el img en html
     let showLinks = document.createElement("img");
    showLinks.src = showImages[i];
    showLinks.id = "img"+i; //agregar id a la imagen
    console.log("mostrar links", showLinks)
    addImage = document.getElementById("div1");
    addImage.appendChild(showLinks);
    
   // let showNamesCharacter = document.getElementById("nameCharacter"); no es necesario el label en html
    let showNamesCharacter = document.createElement("label");
    showNamesCharacter.textContent = showNames[i];
    showNamesCharacter.id = "name"+i; //se puede hacer asi o llamando el id que ya trae la base de dado
    console.log("prueba nombre", showNamesCharacter)
    addName = document.getElementById("div1");
    addName.appendChild(showNamesCharacter);
    }


