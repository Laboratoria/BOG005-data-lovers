// AQUI DEBE IR TODA LA LOGICA//
// Función de ordenar A-Z

function sortByNameOrTitle(data) {
  return data.sort(function (a, b) {
    var textA = a.title
      ? a.title.toUpperCase()
      : a.name
      ? a.name.toUpperCase()
      : "";
    var textB = b.title
      ? b.title.toUpperCase()
      : b.name
      ? b.name.toUpperCase()
      : "";
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
}

// Función filtrar por director

/*let moviesByDirector = function x () {dataforFilter.filter(function (film) {
  return film.director === selectedDirector;
  })};*/
  
export const directorFilter = function filterByDirector() {
  let dataforFilter = ghibli.films;
    let moviesByDirector = dataforFilter.filter(function (film) {
    return film.director === selectedDirector;
  });
  console.log(moviesByDirector);
}

export { sortByNameOrTitle};
// import ghibli from "./data/ghibli/ghibli.js";

// if (a) {
//     //bla
// } else {
//     //ble
// }

// a ? //bla : //ble
