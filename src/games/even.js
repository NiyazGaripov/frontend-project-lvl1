import { getRandomNumber } from '../utils.js';
import QUESTION_COUNT from '../constants.js';
import startGame from '../index.js';

const MAX_NUMBER = 100;
const DIVIDER = 2;
const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const gameData = new Array(QUESTION_COUNT).fill('').map(() => {
  const randomNumber = getRandomNumber(MAX_NUMBER);

  return {
    question: randomNumber,
    rightAnswer: randomNumber % DIVIDER === 0 ? 'yes' : 'no',
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
