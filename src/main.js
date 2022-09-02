
import data from './data/harrypotter/data.js'; //importamos la data.
import { orderNameAZ, orderNameZA } from './data.js';
/*card(data.harrypotter)*/
  
 //declaramos una constante de la data
const characters = data.characters;



//importamos filtros
/*import{
  filterGender,
  HogwartsHouses,
  alphabeticalOrder,
  }from './data.js';*/

//selectores del DOM
const welcome = document.getElementById("welcome");
const page1 = document.getElementById("pag1");
const page2 = document.getElementById("pag2");
const HomeBack = document.getElementById("homeBack");
let containerCard = document.querySelector(".containerCard");
const orderAZ = document.getElementById("order-a-z");
const orderZA = document.getElementById("order-z-a");

//funcion boton inicio

welcome.addEventListener("click", changePage)
function changePage() {
  page1.style.display = "none";
  page2.style.display = "block";
}

//funcion boton regresar inicio
HomeBack.addEventListener("click",changePage2)
function changePage2(){
  page1.style.display = "block";
  page2.style.display = "none";
}

//funcion botones filtro A-Z Y Z-A
orderAZ.addEventListener("click", OrderAZ)
function OrderAZ(){
  let saveData= data.harrypotter.sort(orderNameAZ("name"));
  card(saveData);
}

orderZA.addEventListener("click", OrderZA)
function OrderZA(){
  let saveData= data.harrypotter.sort(orderNameZA("name"));
  card(saveData);
}




//funcion creacion de tarjetas y pintar data dentro de ellas
function card(characters) {
  
  let totalCard = ''
  characters.forEach((element) => {
    totalCard += `    

  <article class="containerFather">
  <nav class="card">
    <nav class="cardFront" style="background-image:url(imgs/escudo4.jpeg)"  alt=""> 
      <nav class="bodyCardFront">
      </nav>
    </nav>
    <nav class="cardBack" style="background-image:url(imgs/background.jpeg)">
      <nav class="bodyCardBack">
        <p> ${element.name} </p>
        <p> ${element.gender}</p>
        <p> ${element.birth}</p>
        <p> ${element.species}</p>
        
      </nav>
    </nav>
  </nav>
</article>`

  });
  containerCard.innerHTML = totalCard
  console.log(totalCard)
}
card(characters)


//funcion de filtrado

/*let houses = characters.filter(function (HogwartsHouses) {
  return HogwartsHouses.house === "Slytherin";

})
console.log(houses);

let houses1 = characters.filter(function (HogwartsHouses) {
  return HogwartsHouses.house === "Ravenclaw";
})
console.log(houses1);

let houses2 = characters.filter(function (HogwartsHouses) {
  return HogwartsHouses.house === "Gryffindor";
})
console.log(houses2);


let houses3 = characters.filter(function (HogwartsHouses) {
  return HogwartsHouses.house === "Hufflepuff";
})
console.log(houses3);

let list1 = characters.filter(function (characters) {
  return characters.gender === "Male";
})
console.log(list1);

let list2 = characters.filter(function (characters) {
  return characters.gender === "Female";
})
console.log(list2);*/


