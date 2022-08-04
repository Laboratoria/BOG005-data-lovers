
//filter characters for houses

export const functionGryffindor = (data) => {
    return data.characters.filter(character => character.house && character.house.includes('Gryffindor'));
}

export const functionSlytterin = (data) => {
    return data.characters.filter(character => character.house && character.house.includes('Slytterin'));
}

export const functionRavenclaw = (data) => {
    return data.characters.filter(character => character.house && character.house.includes('Ravenclaw'));
}

export const functionHufflepuff = (data) => {
    return data.characters.filter(character => character.house && character.house.includes('Hufflepuff'));
}

