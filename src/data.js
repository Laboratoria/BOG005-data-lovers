// estas funciones son de ejemplo

//Ordenar
export function orderNameAZ(prop) {
  if (!prop) {
    throw new Error();
  }
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  };
}
export function orderNameZA(prop) {
  if (!prop) {
    throw new Error();
  }
  return function (a, b) {
    if (a[prop] < b[prop]) {
      return 1;
    } else if (a[prop] > b[prop]) {
      return -1;
    }
    return 0;
  };
}

//Filtros

//Por país
export const countryFilter = (deportes, opcion) => {
  const paisFiltrado = deportes.filter((Element) => Element.team === opcion);
  return paisFiltrado;
};

//Por género
export const genderFilter = (deportes, opcion) => {
  const generoFiltrado = deportes.filter(
    (Element) => Element.gender === opcion
  );
  return generoFiltrado;
};

//Por medalla
export const medalFilter = (deportes, opcion) => {
  const medallaFiltrado = deportes.filter(
    (Element) => Element.medal === opcion
  );
  return medallaFiltrado;
};

//Por deporte
export const sportFilter = (deportes, opcion) => {
  const deporteFiltrado = deportes.filter(
    (Element) => Element.sport === opcion
  );
  return deporteFiltrado;
};
