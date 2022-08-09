
const filterData = (data, tipofiltro, valor) => {
 // console.log(valor);

  let filtrado = [];

  data.athletes.forEach(atleta => {
    if(atleta[tipofiltro] == valor ){
      //console.log(atleta);
      filtrado.push(atleta);
    }
  });

    return filtrado;
};

const dataAtletas = (array, atletaNombre, atletaPais, atletaGenero, atletaDeporte) => {


  if (atletaNombre !== '') {
    array = filtroNombres(array, atletaNombre);
  }

  if (atletaPais !== '') {
    array = filtroPais(array, atletaPais)
  }

  if (atletaGenero !== '') {
    array = filtroGenero(array, atletaGenero)
  }

  if (atletaDeporte !== '') {
    array = filtroDeporte(array, atletaDeporte)
  }

  const nuevoArray = array.map(obj => ({
    nombre: obj.name,
    deporte: obj.sport,
    equipo: obj.team,
    genero: obj.gender,
    medalla: obj.medal,
    edad: obj.age
  }));

  return nuevoArray;

};

export{ filterData, dataAtletas}