// estas funciones son de ejemplo

export const sortName = (data) => {

  return data.sort((a, b) =>{
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  });
};

export const anotherExample = () => {
  return 'OMG';
};
