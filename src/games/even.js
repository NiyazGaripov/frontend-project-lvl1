import { getRandomNumber } from '../utils.js';
import { QUESTION_COUNT, MAX_NUMBER } from '../constants.js';
import startGame from '../index.js';

const NUMBER_BY_WHICH_DIVIDE = 2;
const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (number) => number % NUMBER_BY_WHICH_DIVIDE === 0;

const gameData = new Array(QUESTION_COUNT).fill('').map(() => {
  const randomNumber = getRandomNumber(MAX_NUMBER);
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return {
    question: String(randomNumber),
    rightAnswer,
  };
});

const startGameBrainEven = () => {
  const gameConfig = {
    description,
    gameData,
  };

  startGame(gameConfig);
};

export default startGameBrainEven;
