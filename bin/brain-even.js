import readlineSync from 'readline-sync';

const MAX_NUMBER = 100;
const DIVIDER = 2;
const QUESTION_COUNT = 3;
const STEP = 1;
let CORRECT_ANSWER_COUNT = 1;
let userName = '';

const greeting = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
