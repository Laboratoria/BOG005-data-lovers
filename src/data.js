import data from './data/harrypotter/data.js';

let personajes = [];

data.characters.forEach((item, i) => {  //guardamos las imagenes en un array 
    personajes[i] = item;              //para podederlas duplicar y organizar
  })

  console.log(personajes);


// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
