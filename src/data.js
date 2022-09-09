// estas funciones son de ejemplo

//import athletes from "./data/athletes/athletes";

//export let filtrarPais = (deportes, opcion) => {
  //let dataFiltradaPais = deportes.filter((elemento) => elemento.team === opcion);
  //console.log('parámetro: ',opcion);
 // return dataFiltradaPais;
//;

export const countryFilter= (deportes , opcion) => { 
  const paisFiltrado = deportes.filter(Element => Element.team === opcion)
  return paisFiltrado;
};
