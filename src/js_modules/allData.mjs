// allData.mjs - Extract characters information to process it
class ProcessData {
  constructor (data) {
    // Importing characters and books from the dataset file
    this.characters = data.characters;
    this.books = data.books;
    this.characterPosition = 0;
  }

  // Creating the list of characters ordered by the number of books they appear in
  getOrderedNamesList() {
    let importanceLevel1 = [];
    let importanceLevel2 = [];
    let importanceLevel3 = [];
    let importanceLevel4 = [];
    let importanceLevel5 = [];

    let characterData = [...this.characters]

    characterData.forEach(character => {
      let characterName = character;
      let characterBooks = character.books_featured_in;

      switch (characterBooks.length) {
        case 7:
          importanceLevel1.push(characterName);
          break;
        case 6:
          importanceLevel2.push(characterName);
          break;
        case 5:
          importanceLevel3.push(characterName);
          break;
        case 4:
          importanceLevel4.push(characterName);
          break;
        default:
          importanceLevel5.push(characterName);
          break;
      }
    });

    let allCharacters = importanceLevel1.concat(importanceLevel2).concat(importanceLevel3).concat(importanceLevel4).concat(importanceLevel5);

    return allCharacters;
  }

  // Creating array with characters to pagination to the next page
  charactersPerPage() {
    let allCharacters = this.getOrderedNamesList();
    let pageCharacters = [];
    let maxCharactersPerPage = this.characterPosition + 7;
    for (let i = this.characterPosition; i <= maxCharactersPerPage; i++) {
      pageCharacters.push(allCharacters[i]);
    }

    this.characterPosition = maxCharactersPerPage + 1;
    return pageCharacters;
  }

  // Creating array with characters to pagination to the previous page

  // Changing images
  imageSource() {
    const characters = this.charactersPerPage();
    characters.forEach(character => {
      if(character.species === "Human" && character.gender === "Female" || character.species === "Human (formerly)" && character.gender === "Female") {
        return "https://imagizer.imageshack.com/img922/3540/cBthJx.png";
      } else if (character.species === "human" && character.gender === "Male" || character.species === "Human (formerly)" && character.gender === "Male") {
        return "https://imagizer.imageshack.com/img923/332/wM4EDt.png";
      } else if (character.species === "Acromantula" || character.species === "Centaur" || character.species === "Peacock" || character.species === "Boarhound" || character.species === "Basilisk") {
        return "https://imagizer.imageshack.com/img924/7108/e1ORgP.png";
      } else {
        return "https://imagizer.imageshack.com/img924/3708/Q2vin4.png";
      }
    })
  }

}

export default ProcessData;



