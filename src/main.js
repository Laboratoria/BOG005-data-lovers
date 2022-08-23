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
const allCharacters = data.characters.slice(0, 450)
const content = document.querySelector('#showCharacters')

function showAllCharacters(arrData) {
  const cards = []
  // Recorro el arreglo de objetos y por cada objeto, creo una tarjeta, la inserto en el arreglo y al final devuelvo el arreglo
  arrData.forEach((item) => {
    const card = document.createElement('div')

    const img = document.createElement('img')
    img.src = './Img/icons8-harry.png'

    const name = document.createElement('p')
    name.innerHTML = `${item.name}`

    const button = document.createElement('button')
    button.innerHTML = 'Ver +'
    button.addEventListener('click', (e) => {
      const information = document.querySelector('#informationCharacters')
      // const i = e.target.dataset.id
      information.innerHTML = `<div class="information">
        <strong>Nombre:</strong> ${item.name ? item.name : 'Sin información'}
        <strong>Fecha de Nacimiento:</strong> ${item.birth ? item.birth : 'Sin información'}
        <br> <strong>Casa de Hogwarts:</strong> ${item.house ? item.house : 'Sin información'}
        <br> <strong>Tipo de Mago:</strong> ${item.species ? item.species : 'Sin información'}
      </div>`
    })

    card.appendChild(name)
    card.appendChild(button)
    card.appendChild(img)

    cards.push(card)
  })

  return cards
}

showAllCharacters(allCharacters).forEach((card) => {
  content.appendChild(card)
})

// Funciones

const contentOrder = document.querySelector('#showOrderCharacters')

function orderCharacters(arrData) {
  const cards = []
  // Recorro el arreglo de objetos y por cada objeto, creo una tarjeta, la inserto en el arreglo y al final devuelvo el arreglo
  arrData.forEach((item) => {
    const cardOrder = document.createElement('div')

    const img = document.createElement('img')
    img.src = './Img/soplón-96.png'

    const name = document.createElement('p')
    name.innerHTML = `Nombre: ${item.name}`

    const nameHouse = document.createElement('p')
    nameHouse.innerHTML = `Casa: ${item.house ? item.house : 'Sin información'}`

    cardOrder.appendChild(name)
    cardOrder.appendChild(nameHouse)
    cardOrder.appendChild(img)

    cards.push(cardOrder)
  })

  return cards
}

orderCharacters(allCharacters).forEach((cardOrder) => {
  contentOrder.appendChild(cardOrder)
})

// Función ordenar AZ / ZA

document.getElementById('btnOrderAscent').addEventListener('click', () => {
  const orderAscent = functions.sortName(allCharacters, 'name', 'ascendant')
  contentOrder.innerHTML = ''
  orderCharacters(orderAscent).forEach((card) => {
    contentOrder.appendChild(card)
  })
})

document.getElementById('btnOrderFalling').addEventListener('click', () => {
  const orderFalling = functions.sortName(allCharacters, 'name', 'falling')
  contentOrder.innerHTML = ''
  orderCharacters(orderFalling).forEach((card) => {
    contentOrder.appendChild(card)
  })
})

document.getElementById('filterHouseSelect').addEventListener('change', filterHouse)
function filterHouse() {
  contentOrder.innerHTML = ''
  const house = document.getElementById('filterHouseSelect').value
  const filter1 = functions.sortFilter(allCharacters, house)
  orderCharacters(filter1).forEach((card) => {
    contentOrder.appendChild(card)
  })
  console.log(filter1.length)
  const average = ((filter1.length / 450) * 100).toFixed(2)
  document.getElementById('averagePrint').value = average + '%'
}
