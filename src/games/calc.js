import { getRandomNumber, getRandomArrayItem } from '../utils.js';
import { QUESTION_COUNT } from '../constants.js';
import startGame from '../index.js';

const MAX_NUMBER = 20;
const OPERATORS = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const calculateExpression = (firstOperand, secondOperand, operator) => {
  let result;

  try {
    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      default:
        throw new Error(`Please specify one of the listed operators ${OPERATORS}`);
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const gameData = new Array(QUESTION_COUNT).fill('').map(() => {
  const firstOperand = getRandomNumber(MAX_NUMBER);
  const secondOperand = getRandomNumber(MAX_NUMBER);
  const operator = getRandomArrayItem(OPERATORS);
  const operationResult = calculateExpression(firstOperand, secondOperand, operator);

  return {
    question: `${firstOperand} ${operator} ${secondOperand}`,
    rightAnswer: `${operationResult}`,
  };
});

const startGameBrainCalc = () => {
  const gameConfig = {
    description,
    gameData,
  };

  startGame(gameConfig);
};

export default startGameBrainCalc;
