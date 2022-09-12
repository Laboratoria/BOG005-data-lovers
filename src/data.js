// estas funciones son de ejemplo

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
