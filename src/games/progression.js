import { QUESTION_COUNT } from '../constants.js';
import { getRandomNumber, getRandomNumberBetweenTwoValues } from '../utils.js';
import startGame from '../index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 8;
const PROGRESSION_LENGTH = 10;
const DELETE_COUNT = 1;
const description = 'What number is missing in the progression?';

const getArithmeticProgression = () => {
  const NTH_NUMBER_OF_PROGRESSION = getRandomNumberBetweenTwoValues(MIN_NUMBER, MAX_NUMBER);
  const STEP_OF_PROGRESSION = getRandomNumberBetweenTwoValues(MIN_NUMBER, MAX_NUMBER);

  return Array(PROGRESSION_LENGTH)
    .fill()
    .map((item, i) => (i + NTH_NUMBER_OF_PROGRESSION) * STEP_OF_PROGRESSION);
};

const gameData = new Array(QUESTION_COUNT).fill('').map(() => {
  const randomNumber = getRandomNumber(MAX_NUMBER);
  const arithmeticProgression = getArithmeticProgression();
  const missingValue = arithmeticProgression.splice(randomNumber, DELETE_COUNT, '..');
  const rightAnswer = missingValue[0];

  return {
    question: `${arithmeticProgression.join(' ')}`,
    rightAnswer: `${rightAnswer}`,
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
