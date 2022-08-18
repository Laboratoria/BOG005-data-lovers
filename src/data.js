const utilities = {
  sortData: function (data, sortBy = 'title', sortOrder = 'ascendente') {
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

  curiousData: function(data) {
    const listDirectors = data.map(film => film.director).filter(onlyUnique);
    console.log(listDirectors);
    return listDirectors;
  },
   
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export default utilities;


