import data from '../data/harrypotter/data.mjs';
import ProcessData from './allData.mjs';
import CreateContainersForCharactersSection from './displayList.mjs';
import DetailsCharacters from './detailsCharacters.mjs'

// Characters - Dataset
const characterData = data.characters

// Event welcome button
const btnStartWelcomePage = document.getElementById("btn-start-welcome-page-id");
const welcomePage = document.getElementById("content-welcome-page-id");
const mainPage = document.getElementById("main-page-id");
const footer = document.getElementById("footer-main-page-id")
btnStartWelcomePage.addEventListener("click", () => {
  welcomePage.style.display = "none";
  header.style.display = "block";
  mainPage.style.display = "flex";
  footer.style.display = "flex";
});

// Create ordered characters list
const HarryPotterData = new ProcessData(data);
const hpCharactersOrderedList = HarryPotterData.getOrderedNamesList();

// Display main page and characters list
const creatingHTMLElements = new CreateContainersForCharactersSection();
creatingHTMLElements.addCharacterList(hpCharactersOrderedList, "http://imageshack.com/f/pnUFd2QWp", "list");

// Create characters card
const detailsDataCharacters = new DetailsCharacters()
const eventContainers = creatingHTMLElements.containerCharacters
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
btnCloseDetailsDataCharacters.addEventListener('click', () => {
    detailsDataCharacters.hiddenDetailsCharacters()
    detailsDataCharacters.cleanDetailsCharacters()
    header.style.display = "block"
    creatingHTMLElements.displayListCharacters()
})

