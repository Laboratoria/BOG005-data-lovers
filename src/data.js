// estas funciones son de ejemplo
//funcion ( export )
export const words = (data) => {
  //return 'data';

  let order = data.sort((a, b) => {
    if (a.name == b.name) {
      return 0;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 1;
  });
return order

};

// export const anotherExample = () => {
//   return 'OMG';
//  };
//Data. nombre(funcion pura)