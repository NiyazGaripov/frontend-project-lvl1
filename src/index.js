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

const buildGame = (gameConfig) => {
  const { description, gameData } = gameConfig;
  console.log(description);

  for (let index = 0; index < gameData.length; index += 1) {
    const { question, rightAnswer } = gameData[index];
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer === rightAnswer) {
      console.log('Correct!');

      if (CORRECT_ANSWER_COUNT === QUESTION_COUNT) {
        console.log(`Congratulations, ${userName}!`);
      }

      CORRECT_ANSWER_COUNT += STEP;
    } else if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      return;
    } else {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
};

const startGame = (gameConfig) => {
  greeting();
  buildGame(gameConfig);
};

export default startGame;
