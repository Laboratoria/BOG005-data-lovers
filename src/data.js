
export const showImage = (element) => {
   let imageCharacter = Object.values(element);
   let listImage = imageCharacter[1].map(total => total.image);
  return listImage;
};

export const showName = (element) => {
  let nameCharacter = Object.values(element);
  let listName = nameCharacter[1].map(total => total.name);
  return listName;
}
