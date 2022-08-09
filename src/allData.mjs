import data from './data/harrypotter/data.mjs';
import htmlElements from './displayMain.mjs';

const allData = {
  bookData: data.books,
  characterData: data.characters,

  getData() {
    console.log("Books: ", this.bookData)
    console.log("Character: " , this.characterData)
  },

  getOrderedCharactersList() {
    const moreImportant = [];
    const otherCharacters = [];

    this.characterData.forEach((character) => {
      if (character.books_featured_in.length === 7) {
        moreImportant.push(character.name);
      } else {
        otherCharacters.push(character.name);
      }
    })

    const allCharacters = moreImportant.concat(otherCharacters);
    allCharacters.forEach((character) => {
      htmlElements.createViewMainPage(character);
    })

  }
}



export default allData;
