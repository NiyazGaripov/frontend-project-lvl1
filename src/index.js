import readlineSync from 'readline-sync';
import QUESTION_COUNT from './constants.js';

const STEP = 1;
let CORRECT_ANSWER_COUNT = 1;
let userName = '';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const startGame = (gameConfig) => {};

export default startGame;
