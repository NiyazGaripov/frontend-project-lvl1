#!/usr/bin/env node

import readlineSync from 'readline-sync';

const MAX_NUMBER = 100;
const QUESTION_COUNT = 3;
const STEP = 1;
const OPERATORS = ['+', '-', '*'];
let CORRECT_ANSWER_COUNT = 1;
let userName = '';
