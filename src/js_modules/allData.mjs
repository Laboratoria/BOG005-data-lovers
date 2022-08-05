// allData.mjs - Extract characters information to process it

import data from '../data/harrypotter/data.mjs';

class ProcessData {
  constructor (data) {
    // Importando personajes y libros del archivo data.js
    this.characters = data.characters;
    this.books = data.books;
  }

  // Función para crear una lista con el nombre de los personajes ordenados por apariciones en los libros
  getOrderedNamesList() {
    let importanceLevel1 = [];
    let importanceLevel2 = [];
    let importanceLevel3 = [];
    let importanceLevel4 = [];
    let importanceLevel5 = [];

    this.characters.forEach(character => {
      let characterName = character.name;
      let characterBooks = character.books_featured_in;

    //   if (characterBooks.length === 7) {
    //     moreImportantCharacters.push(characterName);
    //   } else {
    //     otherCharacters.push(characterName);
    //   }
    // })

      switch (characterBooks.length) {
        case 7:
          characterName.push(importanceLevel1);
          break;
        case 6:
          characterName.push(importanceLevel2);
          break;
        case 5:
          characterName.push(importanceLevel3);
          break;
        case 4:
          characterName.push(importanceLevel4);
          break;
        default:
          characterName.push(importanceLevel5);
          break;
      }
    });

    let allCharacters = importanceLevel1.concat(importanceLevel2).concat(importanceLevel3).concat(importanceLevel4).concat(importanceLevel5);
    return allCharacters;
  }
}

export default ProcessData;