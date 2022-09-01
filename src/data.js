// Función de Ordenar de la A a la Z
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

// Función para filtrar por director

function filterByDirector(data, director) {
  let moviesByDirector = data.filter(function (film) {
    return film.director === director;
  });
  return moviesByDirector;
}

export { sortByNameOrTitle, filterByDirector };

// if (a) {
//     //bla
// } else {
//     //ble
// }

// a ? //bla : //ble