/* eslint-disable array-callback-return */
const functions = {
  sortName: function (data, sortBy = "name", sortOrder = "ascendant") {
    const result = data.sort(function (a, b) {
      const ia = a[sortBy].toUpperCase();
      const ib = b[sortBy].toUpperCase();
      if (sortOrder === "ascendant") {
        if (ia < ib) {
          return -1;
        }
        if (ia > ib) {
          return 1;
        }
        return 0;
      } else if (sortOrder === "falling") {
        if (ia > ib) {
          return -1;
        }
        if (ia < ib) {
          return 1;
        }
        return 0;
      }
    });
    return result;
  },

  /* sortFilter: function (data, selectHouse) {
    const charactersFilter = data.filter(allCharacters => allCharacters.house === selectHouse)
    return charactersFilter 
  },*/
  sortFilter: function (data, house) {
    const charactersFilter = data.filter( (item) => item.house === house);
    return charactersFilter;
  },
};

export default functions;
