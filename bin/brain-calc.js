#!/usr/bin/env node

import readlineSync from 'readline-sync';

const MAX_NUMBER = 100;
const QUESTION_COUNT = 3;
const STEP = 1;
const OPERATORS = ['+', '-', '*'];
let CORRECT_ANSWER_COUNT = 1;
let userName = '';

const getRandomNumber = (maxCount = MAX_NUMBER) => Math.floor(Math.random() * maxCount);

const getRandomArrayItem = (array) => {
  const randomItem = getRandomNumber(array.length);

  return array[randomItem];
};

const greeting = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const askQuestions = () => {
  while (CORRECT_ANSWER_COUNT <= QUESTION_COUNT) {
    const firstOperand = getRandomNumber();
    const secondOperand = getRandomNumber();
    const operator = getRandomArrayItem(OPERATORS);
    let rightAnswer;

    switch (operator) {
      case '+':
        rightAnswer = firstOperand + secondOperand;
        break;
      case '-':
        rightAnswer = firstOperand - secondOperand;
        break;
      case '*':
        rightAnswer = firstOperand * secondOperand;
        break;
      default:
        return;
    }

    const userAnswer = readlineSync.questionInt(`Question: ${firstOperand} ${operator} ${secondOperand}\nYour answer: `);

    if (rightAnswer === userAnswer) {
      console.log('Correct!');

      if (CORRECT_ANSWER_COUNT === QUESTION_COUNT) {
        console.log(`Congratulations, ${userName}!`);
      }

      CORRECT_ANSWER_COUNT += STEP;
    } else if (rightAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      return;
    } else {
      console.log(`Please use numbers\nLet's try again, ${userName}!`);
      return;
    }
  }
};

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  greeting();
  console.log('What is the result of the expression?');
  askQuestions();
};

startGame();
