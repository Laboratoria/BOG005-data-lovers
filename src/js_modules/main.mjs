import data from '../data/harrypotter/data.mjs';
import ProcessData from './allData.mjs';
import CreateContainersForCharactersSection from './displayList.mjs';
import DetailsCharacters from './detailsCharacters.mjs'

//Data of Characters
const characterData = data.characters

//List's characters orders
const HarryPotterData = new ProcessData(data);
const hpCharactersOrderedList = HarryPotterData.getOrderedNamesList();

//Display main page
const creatingHTMLElements = new CreateContainersForCharactersSection();
creatingHTMLElements.addCharacterList(hpCharactersOrderedList, "http://imageshack.com/f/pnUFd2QWp", "list");

//Create characters card with event
const detailsDataCharacters = new DetailsCharacters()
const  eventContainers = creatingHTMLElements.containerCharacters
const header = document.getElementById("header-main-page-id")
eventContainers.addEventListener('click',(event)=>{
    if(event.target.nodeName === "FIGURE" || event.target.nodeName ==="FIGCAPTION" || event.target.nodeName ==="IMG"){
        characterData.forEach((elem)=>{
            if(elem.id === parseInt(event.target.dataset.id)){
                detailsDataCharacters.createCharacterContainer(elem,"http://imageshack.com/f/pnUFd2QWp",'card')
                creatingHTMLElements.hiddenDisplayList()
                header.style.display = "none"
                detailsDataCharacters.displayDetailsCharacters()
            }
        })
    }
})

const btnCloseDetailsDataCharacters=detailsDataCharacters.buttonClose
btnCloseDetailsDataCharacters.addEventListener('click',()=>{
    detailsDataCharacters.hiddenDetailsCharacters()
    detailsDataCharacters.cleanDetailsCharacters()
    header.style.display = "block"
    creatingHTMLElements.displayListCharacters()
})