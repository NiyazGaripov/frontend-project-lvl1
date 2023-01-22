import { getRandomNumber } from '../utils.js';
import { QUESTION_COUNT, MAX_NUMBER } from '../constants.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstOperand, secondOperand) => {
  const remainder = firstOperand % secondOperand;

  return secondOperand ? getGreatestCommonDivisor(secondOperand, remainder) : firstOperand;
};
