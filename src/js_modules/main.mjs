import data from '../data/harrypotter/data.mjs';
import ProcessData from './allData.mjs';
import CreateContainersForCharactersSection from './displayList.mjs';
import CreateDisplayCard from './displayCard.mjs';

const HarryPotterData = new ProcessData(data);
const hpCharactersOrderedList = HarryPotterData.getOrderedNamesList();

const creatingHTMLElements = new CreateContainersForCharactersSection();
creatingHTMLElements.createCharacterContainer(hpCharactersOrderedList, "http://imageshack.com/f/po6UMYRmp", "list");

//Elementos de la tarjeta del personaje

//const objectDataCharacters = data.characters
//  const cardCharactersElements = new CreateDisplayCard()
//  cardCharactersElements.createCharacterContainer(hpCharactersOrderedList, "http://imageshack.com/f/po6UMYRmp", "card")

 const nodeParent = creatingHTMLElements.containerCharacters
 nodeParent.addEventListener('click',(event)=>{
    if(event.target.nodeName === 'FIGURE' || event.target.nodeName === 'IMG' || event.target.nodeName === 'FIGCAPTION'){
        
        const cardCharactersElements = new CreateDisplayCard()
        cardCharactersElements.createCharacterContainer(hpCharactersOrderedList, "http://imageshack.com/f/po6UMYRmp", "card", event)
        cardCharactersElements.showCharacterCard ()
    }
 })