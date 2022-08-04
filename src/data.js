//estas funciones son de ejemplo
export const example = () => {
  return 'example';
};
export const anotherExample = () => {
  return 'OMG';
};
export const filterByName = arr => filter(arr)

export const filteringDataZtoA = arr => {
  return arr.reverse( function (x, y) {
    if (x.title < y.title){
        return -1;
     } else if (x.title > y.title) {
        return 1;
     } else {
        return 0;
     }
    }
  );
}