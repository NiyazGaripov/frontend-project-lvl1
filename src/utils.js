export const getRandomNumber = (maxCount) => Math.floor(Math.random() * maxCount);

export const getRandomArrayItem = (array) => {
  const randomItem = getRandomNumber(array.length);

  return array[randomItem];
};

export const getRandomNumberBetweenTwoValues = (min, max) => min
  + Math.floor(Math.random()
  * (max - min));
