/* export const sortName = (data) => {
  
  return data.sort((a, b) =>{
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  });
}; */

const ordenarData= {
sortName: function(data, sortBy="name", sortOrder="ascendente"){
const resultado = data.sort((a, b)  => {
  let ma = a[sortBy].toLowerCase();
  let mb = b[sortBy].toLowerCase();

  if(sortOrder == 'ascendente'){
    if (ma == mb){
      return 0;
    }
    if (ma > mb){
      return 1;
    }
    if (ma < mb){
      return -1;
    }
    } else if (sortOrder == "descendente"){
      if (ma == mb){
        return 0;
      }
      if (ma > mb){
        return -1;
      }
      if (ma < mb){
        return 1;
      }
    };
  })
  return resultado;
  },


  /* filterHouse: function(data) {
    const houseCharacter = data.filter(function(allCharacters){ 
      return allCharacters.house === "Gryffindor"
    }) */
    filterHouse: function(data) {
      const houseCharacter = data.filter(allCharacter => allCharacter.house == "Gryffindor"  )
      return (houseCharacter)
    
  }

}

  
export default ordenarData ;





export const anotherExample = () => {
  return 'OMG';
};
