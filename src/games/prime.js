import { getRandomNumber } from '../utils.js';
import { QUESTION_COUNT, MAX_NUMBER } from '../constants.js';
import startGame from '../index.js';

const START_NUMBER = 2;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (value) => {
  const squareRoot = Math.sqrt(value);

  for (let i = START_NUMBER; i <= squareRoot; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }

  return value > 1;
};

const gameData = new Array(QUESTION_COUNT).fill('').map(() => {
  const randomNumber = getRandomNumber(MAX_NUMBER);

  const result = {
    question: randomNumber,
    rightAnswer: isPrime(randomNumber) ? 'yes' : 'no',
  };

  return result;
});
