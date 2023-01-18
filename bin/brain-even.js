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

const askQuestions = () => {
  while (CORRECT_ANSWER_COUNT <= QUESTION_COUNT) {
    const randomNumber = Math.floor(Math.random() * MAX_NUMBER);
    const isEven = randomNumber % DIVIDER === 0;
    const isOdd = randomNumber % DIVIDER !== 0;

    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `, {
      trueValue: ['yes'],
      falseValue: ['no'],
    });

    const rightAnswer = (userAnswer === true && isEven) || (userAnswer === false && isOdd);
    const wrongAnswer = (userAnswer === true && isOdd) || (userAnswer === false && isEven);

    if (rightAnswer) {
      console.log('Correct!');

      if (CORRECT_ANSWER_COUNT === QUESTION_COUNT) {
        console.log(`Congratulations, ${userName}!`);
      }

      CORRECT_ANSWER_COUNT += STEP;
    } else if (wrongAnswer) {
      const isAnswerYes = userAnswer === true ? 'yes' : 'no';
      const invertedAnswerValue = isAnswerYes === 'yes' ? 'no' : 'yes';

      console.log(`${isAnswerYes} is wrong answer ;(. Correct answer was ${invertedAnswerValue}.\nLet's try again, ${userName}!`);
      return;
    } else {
      console.log(`Please use yes or no\nLet's try again, ${userName}!`);
      return;
    }
  }
};
