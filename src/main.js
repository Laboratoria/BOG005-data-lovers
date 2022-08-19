import data from './data/harrypotter/data.js'
import functions from './data.js'

// Mostrar sección a través de botón

const btnShowSectionCharacters = document.getElementById('nav-characters')
btnShowSectionCharacters.addEventListener('click', changeBtnStyle)

function changeBtnStyle() {
  document.getElementById('showCharacters').style.display = 'none'
  document.getElementById('showCharacters').style.display = 'block'
}

// Función visualizar personajes
const allCharacters = data.characters.slice(0, 60)
const content = document.querySelector('#showCharacters')


function showAllCharacters(arrData) {

  const cards = []
  // Recorro el arreglo de objetos y por cada objeto, creo una tarjeta, la inserto en el arreglo y al final devuelvo el arreglo
  arrData.forEach((item) => {
    const card = document.createElement('div');

    const img = document.createElement('img');
    img.innerHTML = '<img class="wand" src="Img/icons8-harry.png" alt="Imagen generica para personajes">';

    const name = document.createElement('p');
    name.innerHTML = `${item.name}`

    const button = document.createElement('button');
    button.innerHTML = 'Ver +';
    button.addEventListener('click', (e) => {
      const information2 = document.querySelector('#informationCharacters')
      const i = e.target.dataset.id
      information2.innerHTML = `<div class="information">
        <strong>Nombre:</strong> ${item.name ? item.name : 'Sin información'}
        <strong>Fecha de Nacimiento:</strong> ${item.birth ? item.birth : 'Sin información'}
        <br> <strong>Casa de Hogwarts:</strong> ${item.house ? item.house : 'Sin información'}
        <br> <strong>Tipo de Mago:</strong> ${item.species ? item.species : 'Sin información'}
      </div>`

    });

    card.appendChild(name)
    card.appendChild(button)
    card.appendChild(img)

    cards.push(card);
  })

  return cards;
}

showAllCharacters(allCharacters).forEach((card) => {
  content.appendChild(card)
});

document.getElementById('btnOrderAscent').addEventListener('click', () => {
  const orderAscent = functions.sortName(allCharacters, 'name', 'ascendant')
  content.innerHTML = ''
  showAllCharacters(orderAscent).forEach((card) => {
    content.appendChild(card)
  });
})

document.getElementById('btnOrderFalling').addEventListener('click', displayOrderFalling)

function displayOrderFalling() {
  const orderFalling = functions.sortName(allCharacters, 'name', 'falling')
  showAllCharacters(orderFalling)
}

document.getElementById('btnHouseGry').addEventListener('click', filterHouseGry)

function filterHouseGry() {
  const gryFilterHouse = functions.sortFilter(allCharacters)
  console.log(gryFilterHouse)
  showAllCharacters(gryFilterHouse)
}
