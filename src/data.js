
export const filterData = (data, tipofiltro, valor) => {
  //console.log(data);

  let filtrado = [];

  data.athletes.forEach(atleta => {
    if(atleta[tipofiltro] == valor){
      //console.log(atleta);
      filtrado.push(atleta);
    }
  });

    return filtrado;
};

//export const data = () => {
  //return 'data';
//};
