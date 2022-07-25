
export const showImage = (element) => {
   let imageCharacter = Object.values(element);
   let arrayImage = imageCharacter[1].map(total => total.image);
  return arrayImage;
};

export const showName = (element) => {
  let nameCharacter = Object.values(element);
  let arrayName = nameCharacter[1].map(total => total.name);
  return arrayName;
}