import { filterData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';



let button = document.getElementById("buttonSearch");
document.getElementById('listCard').style.visibility="hidden";


function showList(){
    document.getElementById('listCard').style.visibility="visible";
}


button.addEventListener("click", showList())
console.log(filterData(data, "sport", "Taekwondo"));



