import { getRandomNumber } from '../utils.js';
import { QUESTION_COUNT, MAX_NUMBER } from '../constants.js';
import startGame from '../index.js';

const FIRST_PRIME_NUMBER = 2;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (value) => {
  if (value < FIRST_PRIME_NUMBER) {
    return false;
  }

  const squareRoot = Math.sqrt(value);

  for (let i = FIRST_PRIME_NUMBER; i <= squareRoot; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
};

const gameData = new Array(QUESTION_COUNT).fill('').map(() => {
  const randomNumber = getRandomNumber(MAX_NUMBER);

  return {
    question: String(randomNumber),
    rightAnswer: isPrime(randomNumber) ? 'yes' : 'no',
  };
});

const startGameBrainPrime = () => {
  const gameConfig = {
    description,
    gameData,
  };

  startGame(gameConfig);
};

export default startGameBrainPrime;
