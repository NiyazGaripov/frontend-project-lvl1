import { QUESTION_COUNT } from '../constants.js';
import { getRandomNumber, getRandomNumberBetweenTwoValues } from '../utils.js';
import startGame from '../index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 8;
const PROGRESSION_LENGTH = 10;
const DELETE_COUNT = 1;
const description = 'What number is missing in the progression?';
