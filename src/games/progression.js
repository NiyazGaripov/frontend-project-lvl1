import { QUESTION_COUNT } from '../constants.js';
import { getRandomNumberBetweenTwoValues } from '../utils.js';
import startGame from '../index.js';

const START_VALUE = 1;
const PROGRESSION_LENGTH = 10;
const description = 'What number is missing in the progression?';

const getArithmeticProgression = (start, step, indexOfMissingInteger) => {
  let arithmeticProgression = '';

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    if (i === indexOfMissingInteger) {
      arithmeticProgression += ' ..';
    } else {
      const currentValue = (i + start) * step;
      arithmeticProgression += ` ${currentValue}`;
    }
  }

  return arithmeticProgression;
};

const gameData = new Array(QUESTION_COUNT).fill('').map(() => {
  const startInteger = getRandomNumberBetweenTwoValues(START_VALUE, PROGRESSION_LENGTH);
  const stepOfProgression = getRandomNumberBetweenTwoValues(START_VALUE, PROGRESSION_LENGTH);
  const indexOfMissingInteger = getRandomNumberBetweenTwoValues(0, PROGRESSION_LENGTH - 1);

  const question = getArithmeticProgression(startInteger, stepOfProgression, indexOfMissingInteger);
  const rightAnswer = String((startInteger + indexOfMissingInteger) * stepOfProgression);

  return {
    question,
    rightAnswer,
  };
});

const startGameBrainProgression = () => {
  const gameConfig = {
    description,
    gameData,
  };

  startGame(gameConfig);
};

export default startGameBrainProgression;
