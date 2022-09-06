import data from './data/harrypotter/data.js'; //importamos la data.
import { orderNameAZ, orderNameZA, housesFilter, genderFilter} from './data.js';

//declaramos una constante de la data
const characters = data.characters;

//selectores del DOM
const welcome = document.getElementById("welcome");
const page1 = document.getElementById("pag1");
const page2 = document.getElementById("pag2");
const HomeBack = document.getElementById("homeBack");
let containerCard = document.querySelector(".containerCard");

//funcion boton inicio
welcome.addEventListener("click", changePage)
function changePage() {
	page1.style.display = "none";
	page2.style.display = "block";
}

//funcion boton regresar inicio
HomeBack.addEventListener("click", changePage2)
function changePage2() {
	page1.style.display = "block";
	page2.style.display = "none";
}
//funcion para orden alfabetico A-Z y Z-A
document.getElementById("alphabeticalOrder").addEventListener("change", function (event) {
	if (event.target.value == "a-z") {
		orderAsc()
	}
	if (event.target.value == "z-a") {
		orderDesc()
	}
})
function orderAsc() {
	let saveData = data.characters.sort(orderNameAZ("name"));
	card(saveData);
}
function orderDesc() {
	let saveData = data.characters.sort(orderNameZA("name"));
	card(saveData);
}

//funcion creacion de tarjetas y pintar data dentro de ellas
function card(characters) {
	let totalCard = ''
	characters.forEach((element) => {
		totalCard += `    
  <article class="containerFather">
  <nav class="card">
    <nav class="cardFront ${element.house}"> 
      <nav class="bodyCardFront">
      </nav>
    </nav>
    <nav class="cardBack" style="background-image:url(imgs/background.jpeg)">
      <nav class="bodyCardBack">
        <h1> ${element.name} </h1>
        <p> ${element.gender}</p>
        <p> ${element.birth}</p>
        <p> ${element.species}</p>
        <p> ${element.house}</p>  
      </nav>
    </nav>
  </nav>
</article>`
	});
	containerCard.innerHTML = totalCard
}
card(characters)

//filtro de las casas 
document.getElementById("HogwartsHouses").addEventListener("change", function (event) {
	console.log(event.target.value)
	if (event.target.value == "Houses") {
		card(characters)
	} else {

		const filterResult = housesFilter(characters, event.target.value)
		card(filterResult)
	}
})


// filtro por genero

document.getElementById("genderCharacters").addEventListener("change", function (event){
  if(event.target.value == "allGender"){
    card(characters)
  }else{
    const filterResult2 = genderFilter(characters, event.target.value)
    card(filterResult2)
  }

})





/*let list1 = characters.filter(function (characters) {
  return characters.gender === "Male";
})
console.log(list1);

let list2 = characters.filter(function (characters) {
  return characters.gender === "Female";
})
console.log(list2);*/


