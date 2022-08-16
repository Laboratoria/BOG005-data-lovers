const utilities = {
  sortData: function (data, sortBy = 'title', sortOrder ='ascendente') {
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

filterData: function(data) {
  const arrayFilter = data.filter(films => films.rt_score >= 94) ;
  return arrayFilter;
 },
};
  

export default utilities;


