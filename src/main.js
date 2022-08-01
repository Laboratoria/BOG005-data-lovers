import {showImage, showName} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

let dataRyM = data;
let showImages = showImage(dataRyM);
let showNames = showName(dataRyM);

let acum = "";
let addDiv;
let screen1 = document.getElementById("screen1");
let sizeData = showImages.length;
console.log(sizeData);
let divideData = Math.round(sizeData / 33);
console.log(divideData);
// let left = document.getElementById("left");
// let div = document.getElementsByTagName("div");
// document.getElementsByTagName("img").style.display= "none";
// for (let i=0; i < showImages.length; i++ ){
//     addDiv = `
//     <div id=${"div" + i} className=${"character"}>
//     <img src=${showImages[i]} id=${"img" + i}>
//     <span id=${"name" + i}>${showNames[i]}</span>
//     </div>
//     `
//     acum+=addDiv
// }
// screen1.innerHTML = acum;

let pageStart = document.getElementById("page_start");
let pageCharacteres = document.getElementById("page_characteres");
let btnCharacteres = document.getElementById("button_characteres");
let btnRigth = document.getElementById("rigth");
let btnLeft = document.getElementById("left");

let positionStart = -15;
let positionEnd = 0;

pageStart.style.display = "visible";
pageCharacteres.style.display = "none";



// const rigth = () => {
//     pageStart.style.display = "none";
//     screen1.innerHTML = "";
//     acum = "";
//     for(let i = positionStart; i < positionEnd;i++ ){
//         addDiv = `
//         <div id=${"div" + i} className=${"character"}>
//         <img src=${showImages[i]} id=${"img" + i}>
//         <span id=${"name" + i}>${showNames[i]}</span>
//         </div>
//         `
//         acum+=addDiv;
//         screen1.innerHTML = acum;
//         if(positionEnd[i] == sizeData){
//             return;
//         }
//     }
//     positionStart +=15;
//     positionEnd += 15;
    
//     // pageCharacteres.style.display = "block";
// }


// btnRigth.addEventListener("click", rigth);

// const pageInitial = ()=> {
//     pageStart.style.display = "none";
//     pageCharacteres.style.display = "block";
//     screen1.style.display = "visible";
// }
    const rigth = () => {
        positionStart +=15;
        positionEnd += 15;
        pageStart.style.display = "none";
        pageCharacteres.style.display = "block";
        screen1.style.display = "visible";
        screen1.innerHTML = "";
        acum = "";
        console.log(positionStart, positionEnd);
        for(let i = positionStart; i < positionEnd;i++ ){
            if(positionEnd > sizeData){
                return;
            }
            addDiv = `
            <div id=${"div" + i} className=${"character"}>
            <img src=${showImages[i]} id=${"img" + i}>
            <span id=${"name" + i}>${showNames[i]}</span>
            </div>
            `
            acum+=addDiv;
            screen1.innerHTML = acum;
            if(positionStart < 0 && positionEnd < 15){
                positionStart += 15;
                positionEnd += 15;
            }
        }
    }

    btnCharacteres.addEventListener("click", rigth);
    btnRigth.addEventListener("click", rigth);

    const left= () => {
        console.log("posición inicial"+positionStart, "posición final"+positionEnd)
        positionStart -= 15;
        positionEnd -= 15;
        pageStart.style.display = "none";
        pageCharacteres.style.display = "block";
        screen1.style.display = "visible";
        
        if(positionStart < 0 ){
        positionStart = 0;
        positionEnd = 15;
        btnLeft.style.display = "none";
        return;
        } else if(positionStart >= 15){
            btnLeft.style.display = "block";
        }
        screen1.innerHTML = "";
        acum = "";
        for(let i = positionStart; i < positionEnd; i++ ){
            addDiv = `
            <div id=${"div" + i} className=${"character"}>
            <img src=${showImages[i]} id=${"img" + i}>
            <span id=${"name" + i}>${showNames[i]}</span>
            </div>
            `
            acum+=addDiv;
            screen1.innerHTML = acum;
        }
        
    }
    btnLeft.addEventListener("click", left);

// btnCharacteres.addEventListener("click", pageInitial);

// for(let i = 90; i < showImages.length; i++){
//         document.getElementById("div" + i).style.display = "none";
// }


// for(let i = divideData; i < sizeData; i++){
//         document.getElementById("div" + i).style.display = "none";
// }
// const page1 = () =>{
//     for(let i = sizeData; i < 91; i++){
//             document.getElementById("div" + i).style.display = "none";
        
//     }
// }
// left.addEventListener("click", page1);





// const mostrarImagen= () => {

// }



    // <div ${"div" + i} className ${"character"}>
    // <span id ${showNames[i]}>${showNames[i]}<span/>
    // ${acum = acum + addDiv}
    
    //     let showDiv = document.createElement("div");
    //     // showDiv.innerHTML  =  showImages[i];
    //     showDiv.id = "div" + i;
    //     showDiv.className = "character";
    //     addDiv = document.getElementById("screen1");
    //     addDiv.appendChild(showDiv);
    
    //     let showLinks = document.createElement("img");
    //    showLinks.src = showImages[i];
    //    showLinks.id = "img"+i; 
    //    addImage = document.getElementById("div" + i);
    //    addImage.appendChild(showLinks);
    
    
    //     let showNamesCharacter = document.createElement("span");
    //     showNamesCharacter.textContent = showNames[i];
    //     showNamesCharacter.id = "name"+i; 
    //     addName = document.getElementById("div" + i);
    //     addName.appendChild(showNamesCharacter);
    
