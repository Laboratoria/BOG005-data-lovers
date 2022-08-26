import data from './data/harrypotter/data.js'; //importamos la data.

console.log('example', data);

const books = data.books; //declaramos una constante de la data
const characters = data.characters
console.log(books, characters);


function card(characters) {
    
    let containerCard = document.querySelector(".containerCard");
    let totalCard=''
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
  containerCard.innerHTML=totalCard
}
card(characters)


let list = characters.filter(function(personajes){
  return personajes.ancestry;
})
  
  
});

