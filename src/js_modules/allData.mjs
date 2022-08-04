// En este archivo extraemos la  información de los personajes del objeto data

import data from '../data/harrypotter/data.mjs';
// import htmlElements from './displayMain.mjs';

// const allData = {
//   bookData: data.books,
//   characterData: data.characters,

//   getData() {
//     console.log("Books: ", this.bookData)
//     console.log("Character: " , this.characterData)
//   },

//   getOrderedCharactersList() {
//     const moreImportant = [];
//     const otherCharacters = [];

//     this.characterData.forEach((character) => {
//       if (character.books_featured_in.length === 7) {
//         moreImportant.push(character.name);
//       } else {
//         otherCharacters.push(character.name);
//       }
//     })

//     const allCharacters = moreImportant.concat(otherCharacters);
//     allCharacters.forEach((character) => {
//       htmlElements.createViewMainPage(character);
//     })

//   }
// }


class ProcessData {
  constructor (data) {
    // Importando personajes y libros del archivo data.js
    this.characters = data.characters;
    this.books = data.books;
  }

  // Función para crear una lista con el nombre de los personajes ordenados por apariciones en los libros
  getOrderedNamesList() {
    let moreImportantCharacters = [];
    let otherCharacters = [];

    this.characters.forEach(character => {
      let characterName = character.name;
      let characterBooks = character.books_featured_in;

      if (characterBooks.length === 7) {
        moreImportantCharacters.push(characterName);
      } else {
        otherCharacters.push(characterName);
      }
    })

    const allCharacters = moreImportantCharacters.concat(otherCharacters);
    return allCharacters;
  }
};


export default ProcessData;