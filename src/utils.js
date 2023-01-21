export const getRandomNumber = (maxCount) => Math.floor(Math.random() * maxCount);

export const getRandomArrayItem = (array) => {
  const randomItem = getRandomNumber(array.length);

  return array[randomItem];
};
