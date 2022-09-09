// estas funciones son de ejemplo

export let filtrarPais = (deportes, opcion) => {
  let dataFiltradaPais = deportes.filter(
    (elemento) => elemento.team === opcion
  );
  console.log("parámetro: ", opcion);
  return dataFiltradaPais;
};

export const anotherExample = () => {
  return "OMG";
};

//filtro guia test
/*export const countryFilter= (deportes , opcion) => { 
  const paisFiltrado = deportes.filter(Element => Element.team === opcion)
  return paisFiltrado;
};*/
