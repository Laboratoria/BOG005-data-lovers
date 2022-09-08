// estas funciones son de ejemplo

export let filtrarPais = (deportes, opcion) => {
  let dataFiltradaPais = deportes.filter((elemento) => elemento.team === opcion);
  console.log('parámetro: ',opcion);
  return dataFiltradaPais;
};

export const anotherExample = () => {
  return "OMG";
};
