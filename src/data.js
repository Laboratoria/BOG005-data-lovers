
export const showImage = (dataRyM) => {
   let imageCharacter = Object.values(dataRyM);
   let listImage = imageCharacter[1].map(total => total.image);
  //  let listImage = dataRyM['results'].map(total => total.image);
  //  console.log(listImage);
     return listImage;
};


export const showName = (dataRyM) => {
  let nameCharacter = Object.values(dataRyM);
  // console.log(nameCharacter);
  let listName = nameCharacter[1].map(total => total.name);
  // let listName = dataRyM['results'].map(total => total.name);

  return listName;
};

export const showNameAndImageSort = (dataRyM) => {
  let nameAndImageSort = showName().sort(dataRyM)
  return nameAndImageSort;
  // dataRyM['results'].sort((total => total.name))
}
