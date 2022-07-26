import {showImage, showName} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

let dataRyM = data;
let showImages = showImage(dataRyM);
let showNames = showName(dataRyM);
let addImage, addName;

for (let i=0; i < showImages.length; i++ ){
     let showLinks = document.createElement("img");
    showLinks.src = showImages[i];
    showLinks.id = "img"+i; 
    addImage = document.getElementById("screen1");
    addImage.appendChild(showLinks);
    
   
    let showNamesCharacter = document.createElement("span");
    showNamesCharacter.textContent = showNames[i];
    showNamesCharacter.id = "name"+i; 
    addName = document.getElementById("screen1");
    addName.appendChild(showNamesCharacter);
    }

