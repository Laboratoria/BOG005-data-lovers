// AQUI DEBE IR TODA LA LOGICA//

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

function filterByDirector(data, director) {
  let moviesByDirector = data.filter(function (film) {
    return film.director === director;
  });
  console.log(moviesByDirector);
  moviesByDirectorData = moviesByDirector;
}

export { sortByNameOrTitle, filterByDirector };

// if (a) {
//     //bla
// } else {
//     //ble
// }

// a ? //bla : //ble