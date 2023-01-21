import { getRandomNumber, getRandomArrayItem } from '../utils.js';
import QUESTION_COUNT from '../constants.js';
import startGame from '../index.js';

const MAX_NUMBER = 20;
const OPERATORS = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const calculateExpression = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return `Please specify one of the listed operators ${OPERATORS}`;
  }
};

const gameData = new Array(QUESTION_COUNT).fill('').map(() => {
  const firstOperand = getRandomNumber(MAX_NUMBER);
  const secondOperand = getRandomNumber(MAX_NUMBER);
  const operator = getRandomArrayItem(OPERATORS);
  const operationResult = calculateExpression(firstOperand, secondOperand, operator);

  const result = {
    question: `${firstOperand} ${operator} ${secondOperand}`,
    rightAnswer: `${operationResult}`,
  };

  return result;
});

const startGameBrainCalc = () => {
  const gameConfig = {
    description,
    gameData,
  };

  startGame(gameConfig);
};

export default startGameBrainCalc;
