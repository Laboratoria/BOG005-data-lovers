const utilities = {
  sortData: function (data, sortBy = 'title', sortOrder =  'ascendente') {
    const result = data.sort((a, b) => {
      let ma = a[sortBy].toUpperCase();
      let mb = b[sortBy].toUpperCase();
      if (sortOrder == 'ascendente') {
        if (ma < mb) {
          return -1;
        }
        if (ma > mb) {
          return 1;
        }
        return 0;
      } else if (sortOrder == 'descendente') {
        if (ma > mb) {
          return -1;
        }
        if (ma < mb) {
          return 1;
        }
        return 0;
      }
    });
    return result;
  },

  filterData: function (data) {
    const arrayFilter = data.filter(films => films.rt_score > 95);
    return arrayFilter;
  },

  curiousData: function (films) {
    // obtenemos los directores sin duplicados.
    const directors = [];
    films.forEach(film => {
      if (!directors.includes(film.director))
        directors.push(film.director);
    });

    // obtiene la cantidad de peliculas de cada director.
    const result = directors.map(function (director) {
      let movies = films.filter(film => film.director == director)
      let cantidad = movies.length;
      return {
        "name": director,
        "length": cantidad,
        "films": movies,
      }
    });
    console.log(result);
    return result
  },
}

export default utilities;
