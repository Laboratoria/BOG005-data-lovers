
export const filterData = (data, tipofiltro, valor) => {
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

export const filterDatas = (data, tipofiltro, tipofiltro2, valor1, valor2) => {
  // console.log(valor);
 
   let filtrado = [];
 
   data.athletes.forEach(atleta => {
     if(atleta[tipofiltro] == valor1 && [tipofiltro2] == valor2  ){
       //console.log(atleta);
       filtrado.push(atleta);
     }
   });
 
     return filtrado;
 };
export const data = () => {
  return 'data';
};
