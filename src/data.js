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
export const countryFilter = (deportes, opcion) => {
  console.log(deportes, opcion);
  const paisFiltrado = deportes.filter((Element) => Element.team === opcion);

  return paisFiltrado;
};

//filtro guia test
/*export const countryFilter = (deportes, opcion) => {
  const paisFiltrado = deportes.filter((Element) => Element.team === opcion);
  return paisFiltrado;
};*/
