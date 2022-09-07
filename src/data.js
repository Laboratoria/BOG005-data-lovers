// estas funciones son de ejemplo

export const filtrarPais = (datos, opcion) => {
  const dataFiltradaPais = datos.filter((elemento) => elemento.team === opcion);

  return dataFiltradaPais;
};

export const anotherExample = () => {
  return "OMG";
};
