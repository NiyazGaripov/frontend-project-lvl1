import { getRandomNumber } from '../utils.js';
import { QUESTION_COUNT, MAX_NUMBER } from '../constants.js';
import startGame from '../index.js';

const DIVIDER = 2;
const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const gameData = new Array(QUESTION_COUNT).fill('').map(() => {
  const randomNumber = getRandomNumber(MAX_NUMBER);

  return {
    question: String(randomNumber),
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
