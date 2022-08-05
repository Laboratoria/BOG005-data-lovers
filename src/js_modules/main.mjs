import data from '../data/harrypotter/data.mjs';
import ProcessData from './allData.mjs';
import CreateContainersForCharactersSection from './displayMain.mjs';

const HarryPotterData = new ProcessData(data);
const hpCharactersOrderedList = HarryPotterData.getOrderedNamesList();

// Filling containers with characters information
hpCharactersOrderedList.forEach(character => {
  let characterContainer = new CreateContainersForCharactersSection();
  characterContainer.createCharacterContainer("list");
  characterContainer.newNodeFigCaption.textContent = character;
  characterContainer.newNodeImage.src = "http://imageshack.com/f/pmDlbIROp";
})